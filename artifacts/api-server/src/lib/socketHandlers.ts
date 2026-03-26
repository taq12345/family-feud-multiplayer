import { Server as SocketServer, Socket } from "socket.io";
import { db } from "@workspace/db";
import { roomsTable, chatMessagesTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { GameState, createGameState, getNextQuestion, serializeGameState, surveyQuestions } from "./gameState.js";
import { findMatchIndex, normalizeSubmittedAnswer } from "./answerMatcher.js";
import { generateCustomQuestions } from "./questionGenerator.js";

const gameStates = new Map<string, GameState>();
const answerTimers = new Map<string, ReturnType<typeof setTimeout>>();
const faceoffAnswerTimers = new Map<string, ReturnType<typeof setTimeout>>();
const autoAdvanceTimers = new Map<string, ReturnType<typeof setTimeout>>();
// Per-player disconnect grace timers (keyed by socket.id of the disconnected socket)
const playerDisconnectTimers = new Map<string, ReturnType<typeof setTimeout>>();
// Records when each socket disconnected (socket.id → timestamp ms)
const playerDisconnectTimes = new Map<string, number>();
// Players removed after grace timeout: name (lowercase) → idle minutes. Cleared on next join attempt.
const kickedPlayers = new Map<string, number>();
// Per-room mutex: prevents concurrent async answer processing for the same room
const answerProcessing = new Map<string, boolean>();

// nickname (lowercase) → socket.id – tracks every connected player across all rooms
const activeNicknames = new Map<string, string>();

export function isNicknameTaken(name: string, excludeSocketId?: string): boolean {
  const existing = activeNicknames.get(name.trim().toLowerCase());
  if (!existing) return false;
  return existing !== excludeSocketId;
}

const PLAYER_DISCONNECT_GRACE_MS = 30 * 60 * 1000; // 30 minutes per-player reconnect window
const FACEOFF_ANSWER_MS = 25 * 1000; // 25 seconds per faceoff guess
const ROUND_ANSWER_MS = 25 * 1000; // 25 seconds per guess

async function deleteRoomNow(roomId: string) {
  clearAutoAdvanceTimer(roomId);
  gameStates.delete(roomId);
  try {
    await db.delete(chatMessagesTable).where(eq(chatMessagesTable.roomId, roomId));
    await db.delete(roomsTable).where(eq(roomsTable.id, roomId));
    console.log(`Deleted empty room ${roomId}`);
  } catch (err) {
    console.error(`Failed to delete room ${roomId}:`, err);
  }
}

function clearPlayerDisconnectTimer(socketId: string) {
  const existing = playerDisconnectTimers.get(socketId);
  if (existing) {
    clearTimeout(existing);
    playerDisconnectTimers.delete(socketId);
  }
}

function clearAnswerTimer(roomId: string) {
  const existing = answerTimers.get(roomId);
  if (existing) {
    clearTimeout(existing);
    answerTimers.delete(roomId);
  }
}

function clearFaceoffAnswerTimer(roomId: string) {
  const existing = faceoffAnswerTimers.get(roomId);
  if (existing) {
    clearTimeout(existing);
    faceoffAnswerTimers.delete(roomId);
  }
}

function clearAutoAdvanceTimer(roomId: string) {
  const existing = autoAdvanceTimers.get(roomId);
  if (existing) {
    clearTimeout(existing);
    autoAdvanceTimers.delete(roomId);
  }
}

const AUTO_ADVANCE_MS = 60 * 1000; // 60 seconds between rounds before auto-advancing

async function advanceToNextRound(io: SocketServer, roomId: string) {
  const state = gameStates.get(roomId);
  if (!state || state.status !== "between_rounds") return;

  // Don't advance if the game is over (last round done or out of questions)
  if (state.currentRound >= state.totalRounds) return;

  // Don't advance if a team is empty — the game would freeze at faceoff
  const players = Array.from(state.players.values());
  const team1Count = players.filter(p => p.team === 1).length;
  const team2Count = players.filter(p => p.team === 2).length;
  if (team1Count === 0 || team2Count === 0) return;

  const question = getNextQuestion(state);
  if (!question) return;

  state.usedQuestionIds.add(question.id);
  state.currentQuestion = question;
  state.wrongAnswers = new Set();
  state.correctSubmissionNorms = new Set();
  state.currentRound++;
  state.status = "faceoff";
  state.revealedAnswers = new Set();
  state.strikes = 0;
  state.roundPoints = 0;
  state.playingTeam = null;
  state.faceoffWinner = null;
  state.roundTimerStartedAt = null;
  initFaceoff(state, state.currentRound % 2 === 1 ? 1 : 2);
  startFaceoffAnswerTimer(io, roomId);

  try {
    await db.update(roomsTable).set({ currentRound: state.currentRound }).where(eq(roomsTable.id, roomId));
  } catch { /* ignore */ }

  io.to(roomId).emit("game_state", serializeGameState(state));
}

function scheduleAutoAdvance(io: SocketServer, roomId: string) {
  clearAutoAdvanceTimer(roomId);
  const state = gameStates.get(roomId);
  const startedAt = state?.betweenRoundsStartedAt ?? Date.now();
  const elapsed = Date.now() - startedAt;
  const remaining = Math.max(0, AUTO_ADVANCE_MS - elapsed);
  const timer = setTimeout(async () => {
    autoAdvanceTimers.delete(roomId);
    await advanceToNextRound(io, roomId);
  }, remaining);
  autoAdvanceTimers.set(roomId, timer);
}

async function skipFaceoffRound(io: SocketServer, state: GameState, roomId: string) {
  clearFaceoffAnswerTimer(roomId);
  state.faceoffDesignatedPlayerId = null;
  state.faceoffTurn = null;
  if (state.currentQuestion) {
    state.revealedAnswers = new Set(state.currentQuestion.answers.map((_, idx) => idx));
  }
  state.status = "between_rounds";
  state.betweenRoundsStartedAt = Date.now();
  state.faceoffTimerStartedAt = null;
  state.roundTimerStartedAt = null;
  const canonicalAnswers = state.currentQuestion
    ? state.currentQuestion.answers.map((a, i) => ({ index: i, text: a.text, points: a.points }))
    : null;
  io.to(roomId).emit("faceoff_no_winner", { canonicalAnswers });
  io.to(roomId).emit("game_state", serializeGameState(state));

  if (state.currentRound < state.totalRounds) {
    scheduleAutoAdvance(io, roomId);
  }
}

function startFaceoffAnswerTimer(io: SocketServer, roomId: string) {
  clearFaceoffAnswerTimer(roomId);
  const _state = gameStates.get(roomId);
  if (_state) _state.faceoffTimerStartedAt = Date.now();
  const timer = setTimeout(async () => {
    faceoffAnswerTimers.delete(roomId);
    const state = gameStates.get(roomId);
    if (!state || state.status !== "faceoff" || !state.faceoffDesignatedPlayerId) return;
    const player = state.players.get(state.faceoffDesignatedPlayerId);
    if (!player) return;

    io.to(roomId).emit("answer_wrong", {
      playerName: player.name,
      team: player.team,
      answer: "(no answer in time)",
    });

    state.faceoffUsedPlayerIds.add(player.id);
    state.faceoffAttempts++;

    if (state.faceoffAttempts >= 8) {
      await skipFaceoffRound(io, state, roomId);
      return;
    }

    const nextTeam: 1 | 2 = player.team === 1 ? 2 : 1;
    state.faceoffTurn = nextTeam;
    state.faceoffDesignatedPlayerId = pickDesignatedPlayer(state, nextTeam);
    if (!state.faceoffDesignatedPlayerId) {
      // Next team has no players — skip the faceoff instead of freezing
      await skipFaceoffRound(io, state, roomId);
      return;
    }
    startFaceoffAnswerTimer(io, roomId);
    io.to(roomId).emit("game_state", serializeGameState(state));
  }, FACEOFF_ANSWER_MS);
  faceoffAnswerTimers.set(roomId, timer);
}

function pickDesignatedPlayer(state: GameState, team: 1 | 2): string | null {
  const teamPlayers = Array.from(state.players.values()).filter(p => p.team === team);
  const eligible = teamPlayers.filter(p => !state.faceoffUsedPlayerIds.has(p.id));
  if (eligible.length > 0) return eligible[0].id;
  // All used — reset used IDs for this team and try again
  for (const p of teamPlayers) state.faceoffUsedPlayerIds.delete(p.id);
  return teamPlayers[0]?.id ?? null;
}

function initFaceoff(state: GameState, startingTeam: 1 | 2) {
  state.faceoffTurn = startingTeam;
  state.faceoffUsedPlayerIds = new Set();
  state.faceoffAttempts = 0;
  state.faceoffDesignatedPlayerId = pickDesignatedPlayer(state, startingTeam);
}

function pickPlayingDesignatedPlayer(state: GameState, team: 1 | 2): string | null {
  const teamPlayers = Array.from(state.players.values()).filter(p => p.team === team);
  const eligible = teamPlayers.filter(p => !state.playingUsedPlayerIds.has(p.id));
  if (eligible.length > 0) return eligible[0].id;
  // All used — reset rotation and try again
  state.playingUsedPlayerIds = new Set();
  return teamPlayers[0]?.id ?? null;
}

function initPlayingTurn(state: GameState, team: 1 | 2, excludePlayerId?: string) {
  state.playingUsedPlayerIds = new Set();
  if (excludePlayerId) state.playingUsedPlayerIds.add(excludePlayerId);
  state.playingDesignatedPlayerId = pickPlayingDesignatedPlayer(state, team);
}

function rotatePlayingDesignatedPlayer(state: GameState) {
  if (!state.playingDesignatedPlayerId) return;
  const currentPlayer = state.players.get(state.playingDesignatedPlayerId);
  if (!currentPlayer) return;
  state.playingUsedPlayerIds.add(state.playingDesignatedPlayerId);
  state.playingDesignatedPlayerId = pickPlayingDesignatedPlayer(state, currentPlayer.team);
}

function initStealTurn(state: GameState, stealTeam: 1 | 2) {
  // Steal is one shot — pick the first available player from the stealing team
  const stealPlayers = Array.from(state.players.values()).filter(p => p.team === stealTeam);
  state.playingUsedPlayerIds = new Set();
  state.playingDesignatedPlayerId = stealPlayers[0]?.id ?? null;
}

function startAnswerTimer(io: SocketServer, state: GameState, roomId: string) {
  clearAnswerTimer(roomId);
  state.roundTimerStartedAt = Date.now();
  const timer = setTimeout(async () => {
    const current = gameStates.get(roomId);
    if (!current || (current.status !== "playing" && current.status !== "stealing") || !current.currentQuestion) return;

    // Use the designated player for the "no answer" attribution
    const designatedPlayer = current.playingDesignatedPlayerId
      ? current.players.get(current.playingDesignatedPlayerId) ?? null
      : null;

    if (designatedPlayer) {
      io.to(roomId).emit("answer_wrong", {
        playerName: designatedPlayer.name,
        team: designatedPlayer.team,
        answer: "(no answer in time)",
      });
    }

    if (current.status === "playing") {
      rotatePlayingDesignatedPlayer(current);
      current.strikes++;
      io.to(roomId).emit("strike", { strikes: current.strikes });

      if (current.strikes >= 3) {
        current.status = "stealing";
        current.strikes = 0;
        const stealingTeam = current.playingTeam === 1 ? 2 : 1;
        initStealTurn(current, stealingTeam);
        if (!current.playingDesignatedPlayerId) {
          // Steal team is empty — playing team wins immediately
          await endRound(io, current, roomId, current.playingTeam as 1 | 2);
          return;
        }
        io.to(roomId).emit("steal_chance", { team: stealingTeam });
        startAnswerTimer(io, current, roomId);
        io.to(roomId).emit("game_state", serializeGameState(current));
      } else {
        startAnswerTimer(io, current, roomId);
        io.to(roomId).emit("game_state", serializeGameState(current));
      }
    } else if (current.status === "stealing") {
      await endRound(io, current, roomId, current.playingTeam!);
    }
  }, ROUND_ANSWER_MS);
  answerTimers.set(roomId, timer);
}

export function setupSocketHandlers(io: SocketServer) {
  io.on("connection", (socket: Socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join_room", async ({ roomId, playerName, team }: { roomId: string; playerName: string; team: 1 | 2 }) => {
      const trimmedPlayerName = playerName.trim();
      if (!trimmedPlayerName || trimmedPlayerName.length > 16) {
        socket.emit("join_rejected", { reason: "Nickname must be 16 characters or fewer." });
        return;
      }

      // Load game state early — needed for reconnect detection
      if (!gameStates.has(roomId)) {
        try {
          const [room] = await db.select().from(roomsTable).where(eq(roomsTable.id, roomId));
          if (room) {
            const state = createGameState(roomId, room.name, room.team1Name, room.team2Name, room.totalRounds);
            gameStates.set(roomId, state);
          }
        } catch (err) {
          console.error("Failed to load room:", err);
        }
      }

      const state = gameStates.get(roomId);

      // Backward-compatible hydration: older in-memory states may not have roomName yet.
      if (state && !state.roomName) {
        try {
          const [room] = await db.select().from(roomsTable).where(eq(roomsTable.id, roomId));
          if (room?.name) state.roomName = room.name;
        } catch {
          // ignore; client will show fallback label
        }
      }

      // Check if this player was previously kicked due to inactivity
      const nameKey = trimmedPlayerName.toLowerCase();
      if (kickedPlayers.has(nameKey)) {
        const idleMinutes = kickedPlayers.get(nameKey)!;
        kickedPlayers.delete(nameKey);
        socket.emit("kicked_inactive", { idleMinutes });
        return;
      }

      // Detect reconnection: same player name already holds a slot in this room.
      // First check activeNicknames (covers active sessions); if that's empty (cleared on
      // disconnect), fall back to scanning state.players by name so we still recognise the
      // returning player and avoid inserting a duplicate entry.
      let existingSocketId = activeNicknames.get(nameKey) ?? null;
      let existingPlayer = existingSocketId && state ? (state.players.get(existingSocketId) ?? null) : null;

      if (!existingPlayer && state) {
        for (const [sid, p] of state.players.entries()) {
          if (p.name.trim().toLowerCase() === nameKey) {
            existingPlayer = p;
            existingSocketId = sid;
            break;
          }
        }
      }

      const isReconnect = !!existingPlayer;

      if (!isReconnect) {
        // Normal join: reject if nickname is taken by a different active session
        if (isNicknameTaken(trimmedPlayerName, socket.id)) {
          socket.emit("join_rejected", { reason: `Nickname "${trimmedPlayerName}" is already in use by another player.` });
          return;
        }
      }

      // Point the nickname to the new socket
      activeNicknames.set(nameKey, socket.id);

      socket.join(roomId);
      socket.data.roomId = roomId;
      socket.data.playerName = trimmedPlayerName;
      socket.data.team = team;

      if (isReconnect && existingSocketId && state && existingPlayer) {
        // ── Reconnection path ────────────────────────────────────────────
        // Cancel the per-player grace timer so they aren't removed later
        clearPlayerDisconnectTimer(existingSocketId);

        // Swap the old socket ID for the new one in the player map
        state.players.delete(existingSocketId);
        existingPlayer.id = socket.id;
        state.players.set(socket.id, existingPlayer);

        // Keep designation fields in sync with the new socket ID
        if (state.faceoffDesignatedPlayerId === existingSocketId) {
          state.faceoffDesignatedPlayerId = socket.id;
        }
        if (state.playingDesignatedPlayerId === existingSocketId) {
          state.playingDesignatedPlayerId = socket.id;
        }

        console.log(`${trimmedPlayerName} reconnected to ${roomId} (${existingSocketId} → ${socket.id})`);

        // Re-sync state to the reconnecting socket only
        const recent = await db.select().from(chatMessagesTable)
          .where(eq(chatMessagesTable.roomId, roomId))
          .limit(50);
        socket.emit("chat_history", recent.map(m => ({
          playerName: m.playerName,
          message: m.message,
          createdAt: m.createdAt.toISOString(),
        })));
        socket.emit("game_state", serializeGameState(state));
        // Don't broadcast player_joined — from everyone else's perspective they never left
        return;
      }

      // ── Normal (first-time) join path ────────────────────────────────
      if (state) {
        const isHost = !Array.from(state.players.values()).some(p => p.isHost);
        state.players.set(socket.id, {
          id: socket.id,
          name: trimmedPlayerName,
          team,
          isHost,
          contributedPoints: 0,
        });

        await db.update(roomsTable)
          .set({ playerCount: state.players.size })
          .where(eq(roomsTable.id, roomId));

        const recent = await db.select().from(chatMessagesTable)
          .where(eq(chatMessagesTable.roomId, roomId))
          .limit(50);
        socket.emit("chat_history", recent.map(m => ({
          playerName: m.playerName,
          message: m.message,
          createdAt: m.createdAt.toISOString(),
        })));

        // If a player joins into a between_rounds room and their team was empty (which
        // caused endRound to fire without scheduling auto-advance, or the timer already
        // fired while the team was empty), reschedule so the game can unblock.
        if (
          state.status === "between_rounds" &&
          state.currentRound < state.totalRounds &&
          !autoAdvanceTimers.has(roomId)
        ) {
          scheduleAutoAdvance(io, roomId);
        }

        io.to(roomId).emit("game_state", serializeGameState(state));
        io.to(roomId).emit("player_joined", { playerName: trimmedPlayerName, team });
      }
    });

    socket.on("start_game", async ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;

      await db.update(roomsTable).set({ status: "playing" }).where(eq(roomsTable.id, roomId));

      const question = getNextQuestion(state);
      if (!question) return;

      state.usedQuestionIds.add(question.id);
      state.currentQuestion = question;
      state.wrongAnswers = new Set();
      state.correctSubmissionNorms = new Set();
      state.currentRound = 1;
      state.status = "faceoff";
      state.revealedAnswers = new Set();
      state.strikes = 0;
      state.roundPoints = 0;
      state.playingTeam = null;
      state.faceoffWinner = null;
      initFaceoff(state, 1);
      startFaceoffAnswerTimer(io, roomId);

      await db.update(roomsTable).set({ currentRound: state.currentRound }).where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(state));
    });

    const customQuestionsInFlight = new Set<string>();

    socket.on("generate_custom_questions", async ({ roomId, topic }: { roomId: string; topic: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;
      if (state.status !== "waiting") return;

      if (customQuestionsInFlight.has(roomId)) {
        socket.emit("custom_questions_error", { message: "Questions are already being generated for this room. Please wait." });
        return;
      }

      const trimmedTopic = topic?.trim();
      if (!trimmedTopic || trimmedTopic.length < 2) {
        socket.emit("custom_questions_error", { message: "Please enter a valid topic (at least 2 characters)." });
        return;
      }

      customQuestionsInFlight.add(roomId);
      let result: Awaited<ReturnType<typeof generateCustomQuestions>>;
      try {
        result = await generateCustomQuestions(trimmedTopic, state.totalRounds);
      } finally {
        customQuestionsInFlight.delete(roomId);
      }

      if (!result.valid) {
        socket.emit("custom_questions_error", { message: result.reason });
        return;
      }

      // Re-validate room state after async AI call (race condition guard)
      const freshState = gameStates.get(roomId);
      if (!freshState) return;
      const freshPlayer = freshState.players.get(socket.id);
      if (!freshPlayer?.isHost) return;
      if (freshState.status !== "waiting") return;

      // Ensure both teams still have players — someone may have left during generation
      const playersAfter = Array.from(freshState.players.values());
      const team1After = playersAfter.filter(p => p.team === 1).length;
      const team2After = playersAfter.filter(p => p.team === 2).length;
      if (team1After === 0 || team2After === 0) {
        socket.emit("custom_questions_error", { message: "A team is now empty. Wait for players to join before starting." });
        return;
      }

      // Safety guard: require exactly totalRounds valid questions before proceeding
      if (result.questions.length !== freshState.totalRounds) {
        socket.emit("custom_questions_error", {
          message: `Expected ${freshState.totalRounds} questions but only ${result.questions.length} were generated. Please try again.`,
        });
        return;
      }

      // Overwrite the question pool with AI-generated questions
      freshState.questions = result.questions;
      freshState.usedQuestionIds = new Set();

      // Auto-start — same logic as start_game
      await db.update(roomsTable).set({ status: "playing" }).where(eq(roomsTable.id, roomId));

      const question = getNextQuestion(freshState);
      if (!question) {
        socket.emit("custom_questions_error", { message: "Could not start the game with generated questions. Please try again." });
        return;
      }

      freshState.usedQuestionIds.add(question.id);
      freshState.currentQuestion = question;
      freshState.wrongAnswers = new Set();
      freshState.correctSubmissionNorms = new Set();
      freshState.currentRound = 1;
      freshState.status = "faceoff";
      freshState.revealedAnswers = new Set();
      freshState.strikes = 0;
      freshState.roundPoints = 0;
      freshState.playingTeam = null;
      freshState.faceoffWinner = null;
      initFaceoff(freshState, 1);
      startFaceoffAnswerTimer(io, roomId);

      await db.update(roomsTable).set({ currentRound: freshState.currentRound }).where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(freshState));
    });

    socket.on("restart_game", async ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;
      if (state.status !== "between_rounds" || state.currentRound < state.totalRounds) return;

      // Cancel any active timers so they don't fire into the waiting state
      clearFaceoffAnswerTimer(roomId);
      clearAnswerTimer(roomId);
      clearAutoAdvanceTimer(roomId);

      // Reshuffle standard questions, placing previously-used ones at the back.
      // Always reverts to the standard survey pool (AI-generated questions are not kept).
      const previouslyUsed = new Set(state.usedQuestionIds);
      function shuffle<T>(arr: T[]): T[] {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      const freshQuestions = surveyQuestions.filter(q => !previouslyUsed.has(q.id));
      const staleQuestions = surveyQuestions.filter(q => previouslyUsed.has(q.id));
      state.questions = [...shuffle(freshQuestions), ...shuffle(staleQuestions)];
      state.usedQuestionIds = new Set();

      // Reset all game state to initial "waiting" values — players keep their teams
      state.team1Score = 0;
      state.team2Score = 0;
      state.players.forEach(p => { p.contributedPoints = 0; });
      state.status = "waiting";
      state.currentRound = 0;
      state.currentQuestion = null;
      state.revealedAnswers = new Set();
      state.roundPoints = 0;
      state.strikes = 0;
      state.wrongAnswers = new Set();
      state.correctSubmissionNorms = new Set();
      state.playingTeam = null;
      state.faceoffWinner = null;
      state.faceoffTurn = null;
      state.faceoffDesignatedPlayerId = null;
      state.faceoffUsedPlayerIds = new Set();
      state.faceoffAttempts = 0;
      state.playingDesignatedPlayerId = null;
      state.playingUsedPlayerIds = new Set();
      state.betweenRoundsStartedAt = null;
      state.faceoffTimerStartedAt = null;
      state.roundTimerStartedAt = null;

      await db.update(roomsTable)
        .set({ status: "waiting", team1Score: 0, team2Score: 0, currentRound: 0 })
        .where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(state));
    });

    socket.on("faceoff_answer", async ({ roomId, answer }: { roomId: string; answer: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "faceoff" || !state.currentQuestion) return;
      if (state.faceoffDesignatedPlayerId !== socket.id) return;
      const player = state.players.get(socket.id);
      if (!player) return;

      // Mutex: reject if another answer is already being processed for this room
      if (answerProcessing.get(roomId)) return;
      answerProcessing.set(roomId, true);

      try {
        // Clear the per-player faceoff timer immediately so it cannot fire during the async AI call
        clearFaceoffAnswerTimer(roomId);

        // Reject immediately if this answer was already used (wrong or correct) this round.
        // Use the same full normalizer as the answer matcher so the key is always consistent.
        const normSub = normalizeSubmittedAnswer(answer);
        if (normSub && state.wrongAnswers.has(normSub)) {
          io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
          state.faceoffUsedPlayerIds.add(socket.id);
          state.faceoffAttempts++;
          if (state.faceoffAttempts >= 8) {
            await skipFaceoffRound(io, state, roomId);
          } else {
            const nextTeam: 1 | 2 = player.team === 1 ? 2 : 1;
            state.faceoffTurn = nextTeam;
            state.faceoffDesignatedPlayerId = pickDesignatedPlayer(state, nextTeam);
            startFaceoffAnswerTimer(io, roomId);
            io.to(roomId).emit("game_state", serializeGameState(state));
          }
          return;
        }

        const question = state.currentQuestion.question;
        const answers = state.currentQuestion.answers;
        const matchIndex = await findMatchIndex(answer, answers, question, state.revealedAnswers);

        // Re-validate state after async work: another event could have changed status
        if (state.status !== "faceoff" || state.faceoffDesignatedPlayerId !== socket.id) return;

        if (matchIndex !== -1 && !state.revealedAnswers.has(matchIndex)) {
          state.faceoffDesignatedPlayerId = null;
          state.faceoffTurn = null;
          state.revealedAnswers.add(matchIndex);
          const ns = normalizeSubmittedAnswer(answer);
          if (ns) {
            state.correctSubmissionNorms.add(ns);
            state.wrongAnswers.add(ns); // block any re-guess of the same word
          }
          const pts = state.currentQuestion.answers[matchIndex].points;
          player.contributedPoints = (player.contributedPoints ?? 0) + pts;
          state.faceoffWinner = player.team;
          state.playingTeam = player.team;
          state.roundPoints += pts;
          state.status = "playing";
          state.faceoffTimerStartedAt = null;
          initPlayingTurn(state, player.team, player.id);

          io.to(roomId).emit("answer_correct", {
            playerName: player.name,
            team: player.team,
            answerIndex: matchIndex,
            answerText: state.currentQuestion.answers[matchIndex].text,
            playedAnswer: answer,
            points: pts,
            contributedPoints: player.contributedPoints,
          });
          startAnswerTimer(io, state, roomId);
          io.to(roomId).emit("game_state", serializeGameState(state));
        } else {
          if (normSub) state.wrongAnswers.add(normSub);
          io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
          state.faceoffUsedPlayerIds.add(socket.id);
          state.faceoffAttempts++;

          if (state.faceoffAttempts >= 8) {
            await skipFaceoffRound(io, state, roomId);
          } else {
            const nextTeam: 1 | 2 = player.team === 1 ? 2 : 1;
            state.faceoffTurn = nextTeam;
            state.faceoffDesignatedPlayerId = pickDesignatedPlayer(state, nextTeam);
            startFaceoffAnswerTimer(io, roomId);
            io.to(roomId).emit("game_state", serializeGameState(state));
          }
        }
      } finally {
        answerProcessing.delete(roomId);
      }
    });

    socket.on("submit_answer", async ({ roomId, answer }: { roomId: string; answer: string }) => {
      const state = gameStates.get(roomId);
      if (!state || (state.status !== "playing" && state.status !== "stealing") || !state.currentQuestion) return;
      const player = state.players.get(socket.id);
      if (!player) return;
      if (state.status === "playing" && player.team !== state.playingTeam) return;
      if (state.status === "stealing" && player.team === state.playingTeam) return;
      // Only the designated player may answer
      if (state.playingDesignatedPlayerId !== socket.id) return;

      // Mutex: reject if another answer is already being processed for this room
      if (answerProcessing.get(roomId)) return;
      answerProcessing.set(roomId, true);

      clearAnswerTimer(roomId);

      try {
        // Broadcast the steal guess to all players immediately (before AI processing)
        if (state.status === "stealing") {
          io.to(roomId).emit("steal_guess", { playerName: player.name, answer });
        }

        // Reject immediately if this answer was already used (wrong or correct) this round.
        const normSub = normalizeSubmittedAnswer(answer);
        if (normSub && state.wrongAnswers.has(normSub)) {
          if (state.status === "playing") {
            io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
            rotatePlayingDesignatedPlayer(state);
            state.strikes++;
            io.to(roomId).emit("strike", { strikes: state.strikes });
            if (state.strikes >= 3) {
              state.status = "stealing";
              state.strikes = 0;
              const stealingTeam = state.playingTeam === 1 ? 2 : 1;
              initStealTurn(state, stealingTeam);
              io.to(roomId).emit("steal_chance", { team: stealingTeam });
              startAnswerTimer(io, state, roomId);
              io.to(roomId).emit("game_state", serializeGameState(state));
            } else {
              startAnswerTimer(io, state, roomId);
              io.to(roomId).emit("game_state", serializeGameState(state));
            }
          } else if (state.status === "stealing") {
            io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
            await endRound(io, state, roomId, state.playingTeam!);
          }
          return;
        }

        const statusBeforeAwait = state.status;
        const question = state.currentQuestion.question;
        const answers = state.currentQuestion.answers;
        const matchIndex = await findMatchIndex(answer, answers, question, state.revealedAnswers);

        // Re-validate state after async work — reject if status changed or answer was already revealed
        if (state.status !== statusBeforeAwait) return;
        if (matchIndex !== -1 && state.revealedAnswers.has(matchIndex)) return;

        if (matchIndex !== -1) {
          state.revealedAnswers.add(matchIndex);
          const ns = normalizeSubmittedAnswer(answer);
          if (ns) {
            state.correctSubmissionNorms.add(ns);
            state.wrongAnswers.add(ns); // block any re-guess of the same word
          }
          const pts = state.currentQuestion.answers[matchIndex].points;
          player.contributedPoints = (player.contributedPoints ?? 0) + pts;
          state.roundPoints += pts;

          io.to(roomId).emit("answer_correct", {
            playerName: player.name,
            team: player.team,
            answerIndex: matchIndex,
            answerText: state.currentQuestion.answers[matchIndex].text,
            playedAnswer: answer,
            points: pts,
            contributedPoints: player.contributedPoints,
          });

          // Check if all answers revealed
          const allRevealed = state.currentQuestion.answers.every((_, i) => state.revealedAnswers.has(i));
          if (allRevealed || state.status === "stealing") {
            await endRound(io, state, roomId, player.team);
          } else {
            // Rotate to next player on the playing team for the next answer
            rotatePlayingDesignatedPlayer(state);
            startAnswerTimer(io, state, roomId);
            io.to(roomId).emit("game_state", serializeGameState(state));
          }
        } else {
          if (normSub) state.wrongAnswers.add(normSub);
          if (state.status === "playing") {
            io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
            rotatePlayingDesignatedPlayer(state);
            state.strikes++;
            io.to(roomId).emit("strike", { strikes: state.strikes });

            if (state.strikes >= 3) {
              state.status = "stealing";
              state.strikes = 0;
              const stealingTeam = state.playingTeam === 1 ? 2 : 1;
              initStealTurn(state, stealingTeam);
              io.to(roomId).emit("steal_chance", { team: stealingTeam });
              startAnswerTimer(io, state, roomId);
              io.to(roomId).emit("game_state", serializeGameState(state));
            } else {
              startAnswerTimer(io, state, roomId);
              io.to(roomId).emit("game_state", serializeGameState(state));
            }
          } else if (state.status === "stealing") {
            io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
            // Failed steal — playing team gets points
            await endRound(io, state, roomId, state.playingTeam!);
          }
        }
      } finally {
        answerProcessing.delete(roomId);
      }
    });

    socket.on("send_chat", async ({ roomId, message }: { roomId: string; message: string }) => {
      if (!message?.trim()) return;
      const playerName = socket.data.playerName ?? "Anonymous";

      try {
        await db.insert(chatMessagesTable).values({
          roomId,
          playerName,
          message: message.trim().slice(0, 200),
        });
      } catch (err) {
        console.error("Failed to save chat:", err);
      }

      io.to(roomId).emit("chat_message", {
        playerName,
        message: message.trim().slice(0, 200),
        createdAt: new Date().toISOString(),
      });
    });

    socket.on("next_round", async ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "between_rounds") return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;
      // Cancel the auto-advance timer — host is manually advancing
      clearAutoAdvanceTimer(roomId);
      await advanceToNextRound(io, roomId);
    });

    socket.on("delete_room", async ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;

      clearAutoAdvanceTimer(roomId);
      for (const [sid, p] of state.players.entries()) {
        clearPlayerDisconnectTimer(sid);
        const key = p.name.trim().toLowerCase();
        if (activeNicknames.get(key) === sid) activeNicknames.delete(key);
      }
      gameStates.delete(roomId);
      try {
        await db.delete(chatMessagesTable).where(eq(chatMessagesTable.roomId, roomId));
        await db.delete(roomsTable).where(eq(roomsTable.id, roomId));
      } catch {
        // ignore DB errors
      }

      io.to(roomId).emit("room_deleted", { roomId });
    });

    socket.on("leave_room", async ({ roomId }: { roomId: string }) => {
      clearPlayerDisconnectTimer(socket.id);
      await handlePlayerLeave(io, socket, roomId);
      socket.leave(roomId);
      socket.data.roomId = null;
    });

    socket.on("kick_player", async ({ roomId, targetName }: { roomId: string; targetName: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const requester = state.players.get(socket.id);
      if (!requester?.isHost) return;

      // Find the target player by name
      let targetSocketId: string | null = null;
      for (const [sid, p] of state.players.entries()) {
        if (p.name === targetName) { targetSocketId = sid; break; }
      }
      if (!targetSocketId || targetSocketId === socket.id) return;

      // Cancel any disconnect grace timer for the target
      clearPlayerDisconnectTimer(targetSocketId);

      // Notify the kicked player — they'll navigate away
      io.to(targetSocketId).emit("kicked");

      // Remove them from the room without emitting player_left (we'll emit player_kicked instead)
      const targetSocket = io.sockets.sockets.get(targetSocketId) ?? ({
        id: targetSocketId,
        data: { playerName: targetName, roomId },
        leave: (_: string) => {},
      } as unknown as import("socket.io").Socket);

      await handlePlayerLeave(io, targetSocket, roomId, { suppressPlayerLeft: true });
      targetSocket.leave(roomId);
      targetSocket.data.roomId = null;

      // Emit a single, clearly-worded kick announcement to everyone still in the room
      io.to(roomId).emit("player_kicked", { playerName: targetName, hostName: requester.name });
    });

    socket.on("disconnect", () => {
      const { roomId, playerName } = socket.data;
      if (!roomId) {
        // Never joined a room — clean up nickname immediately
        if (playerName) {
          const key = (playerName as string).trim().toLowerCase();
          if (activeNicknames.get(key) === socket.id) activeNicknames.delete(key);
        }
        return;
      }

      const state = gameStates.get(roomId);
      if (!state || !state.players.has(socket.id)) {
        // Not tracked in state — clean up nickname immediately
        if (playerName) {
          const key = (playerName as string).trim().toLowerCase();
          if (activeNicknames.get(key) === socket.id) activeNicknames.delete(key);
        }
        return;
      }

      // Start a 30-minute grace window — player keeps their slot while reconnecting.
      // Remove from activeNicknames immediately so the same player can re-enter via the lobby;
      // the join_room reconnect logic (which uses gameStates) will restore their slot.
      if (playerName) {
        const key = (playerName as string).trim().toLowerCase();
        if (activeNicknames.get(key) === socket.id) activeNicknames.delete(key);
      }
      const disconnectedAt = Date.now();
      playerDisconnectTimes.set(socket.id, disconnectedAt);
      console.log(`Socket ${socket.id} (${playerName}) disconnected from ${roomId} — grace timer started`);
      const timer = setTimeout(async () => {
        playerDisconnectTimers.delete(socket.id);
        // Record this player as kicked so the client sees the message on next reconnect
        const idleMs = Date.now() - (playerDisconnectTimes.get(socket.id) ?? disconnectedAt);
        playerDisconnectTimes.delete(socket.id);
        const idleMinutes = Math.round(idleMs / 60_000);
        if (playerName) {
          kickedPlayers.set((playerName as string).trim().toLowerCase(), idleMinutes);
        }
        console.log(`Grace timer expired for ${playerName} in ${roomId} (idle ~${idleMinutes}m) — removing player`);
        await handlePlayerLeave(io, socket, roomId);
      }, PLAYER_DISCONNECT_GRACE_MS);
      playerDisconnectTimers.set(socket.id, timer);
    });
  });
}

async function handlePlayerLeave(io: SocketServer, socket: Socket, roomId: string, options?: { suppressPlayerLeft?: boolean }) {
  const playerName = socket.data.playerName;
  if (playerName) {
    // Only remove if this socket still owns the nickname
    const key = playerName.trim().toLowerCase();
    if (activeNicknames.get(key) === socket.id) {
      activeNicknames.delete(key);
    }
  }
  const state = gameStates.get(roomId);
  if (state) {
    const departing = state.players.get(socket.id);
    // Guard: if already removed (e.g. kicked then leave_room fires), do nothing
    if (!departing) return;
    state.players.delete(socket.id);
    try {
      await db.update(roomsTable)
        .set({ playerCount: state.players.size })
        .where(eq(roomsTable.id, roomId));
    } catch (err) {
      // ignore
    }
    if (state.players.size === 0) {
      clearFaceoffAnswerTimer(roomId);
      clearAnswerTimer(roomId);
      await deleteRoomNow(roomId);
    } else {
      // Shared helper: reassign host if needed, then emit player_left
      const emitLeaveEvents = async () => {
        if (departing?.isHost) {
          const remaining = Array.from(state.players.values());
          const nextHost = remaining[Math.floor(Math.random() * remaining.length)];
          remaining.forEach(p => { p.isHost = p.id === nextHost.id; });
          try {
            await db.update(roomsTable)
              .set({ hostName: nextHost.name })
              .where(eq(roomsTable.id, roomId));
          } catch { /* ignore */ }
          io.to(roomId).emit("host_changed", { hostName: nextHost.name });
        }
        if (!options?.suppressPlayerLeft && playerName) io.to(roomId).emit("player_left", { playerName });
      };

      // Check if a team is now empty
      const team1Count = Array.from(state.players.values()).filter(p => p.team === 1).length;
      const team2Count = Array.from(state.players.values()).filter(p => p.team === 2).length;
      const emptyTeam: 1 | 2 | null = team1Count === 0 ? 1 : team2Count === 0 ? 2 : null;

      if (emptyTeam !== null && (state.status === "faceoff" || state.status === "playing" || state.status === "stealing")) {
        const remainingTeam: 1 | 2 = emptyTeam === 1 ? 2 : 1;
        await emitLeaveEvents();

        if (state.status === "faceoff") {
          clearFaceoffAnswerTimer(roomId);
          // No contest possible — skip faceoff (skipFaceoffRound emits game_state)
          await skipFaceoffRound(io, state, roomId);
          return;
        }

        // playing or stealing — award round to the remaining team immediately
        clearAnswerTimer(roomId);
        await endRound(io, state, roomId, remainingTeam);
        return;
      }

      // Both teams still have players — run normal reassignment logic

      // If departing player was the designated faceoff guesser, reassign immediately
      if (state.status === "faceoff" && departing && state.faceoffDesignatedPlayerId === departing.id) {
        clearFaceoffAnswerTimer(roomId);
        state.faceoffUsedPlayerIds.delete(departing.id);
        let newDesignated = pickDesignatedPlayer(state, departing.team);
        if (!newDesignated) {
          // No one left on same team — flip to other team
          const otherTeam: 1 | 2 = departing.team === 1 ? 2 : 1;
          state.faceoffTurn = otherTeam;
          newDesignated = pickDesignatedPlayer(state, otherTeam);
        }
        state.faceoffDesignatedPlayerId = newDesignated;
        if (newDesignated) startFaceoffAnswerTimer(io, roomId);
      }

      // If departing player was the designated playing/stealing guesser, reassign immediately
      if ((state.status === "playing" || state.status === "stealing") &&
          departing && state.playingDesignatedPlayerId === departing.id) {
        clearAnswerTimer(roomId);
        state.playingUsedPlayerIds.delete(departing.id);
        const activeTeam = state.status === "playing"
          ? (state.playingTeam as 1 | 2)
          : (state.playingTeam === 1 ? 2 : 1) as 1 | 2;
        const teamPlayers = Array.from(state.players.values()).filter(p => p.team === activeTeam);
        if (teamPlayers.length > 0) {
          state.playingDesignatedPlayerId = pickPlayingDesignatedPlayer(state, activeTeam);
          startAnswerTimer(io, state, roomId);
        } else {
          // No one left on the active team — end the round
          const winner = activeTeam === state.playingTeam
            ? (state.playingTeam === 1 ? 2 : 1) as 1 | 2
            : (state.playingTeam as 1 | 2);
          endRound(io, state, roomId, winner).catch(() => {});
        }
      }

      // If host left, pick a new host at random
      if (departing?.isHost) {
        const remaining = Array.from(state.players.values());
        const nextHost = remaining[Math.floor(Math.random() * remaining.length)];
        remaining.forEach(p => { p.isHost = p.id === nextHost.id; });
        try {
          await db.update(roomsTable)
            .set({ hostName: nextHost.name })
            .where(eq(roomsTable.id, roomId));
        } catch { /* ignore */ }
        io.to(roomId).emit("host_changed", { hostName: nextHost.name });
      }

      if (!options?.suppressPlayerLeft && playerName) io.to(roomId).emit("player_left", { playerName });
      io.to(roomId).emit("game_state", serializeGameState(state));
    }
  }
}

async function endRound(io: SocketServer, state: GameState, roomId: string, winningTeam: 1 | 2) {
  if (winningTeam === 1) {
    state.team1Score += state.roundPoints;
  } else {
    state.team2Score += state.roundPoints;
  }

  state.status = "between_rounds";
  state.betweenRoundsStartedAt = Date.now();
  state.faceoffTimerStartedAt = null;
  state.roundTimerStartedAt = null;

  // Full board in server state (reconnects / consistency). Client animates reveals using canonicalAnswers on round_over.
  if (state.currentQuestion) {
    state.revealedAnswers = new Set(state.currentQuestion.answers.map((_, idx) => idx));
  }

  try {
    await db.update(roomsTable).set({
      team1Score: state.team1Score,
      team2Score: state.team2Score,
    }).where(eq(roomsTable.id, roomId));
  } catch (err) {
    // ignore
  }

  const canonicalAnswers = state.currentQuestion
    ? state.currentQuestion.answers.map((a, i) => ({ index: i, text: a.text, points: a.points }))
    : null;

  io.to(roomId).emit("round_over", {
    winningTeam,
    points: state.roundPoints,
    team1Score: state.team1Score,
    team2Score: state.team2Score,
    canonicalAnswers,
  });
  io.to(roomId).emit("game_state", serializeGameState(state));

  // Auto-advance to next round if host doesn't click within 60 seconds.
  // Always schedule when there are more rounds — advanceToNextRound guards against advancing
  // into a faceoff when a team is empty, but the timer must exist so the round unblocks
  // as soon as a player rejoins and fills the empty team.
  if (state.currentRound < state.totalRounds) {
    scheduleAutoAdvance(io, roomId);
  }
}

export function getRoomPlayers(roomId: string) {
  const state = gameStates.get(roomId);
  if (!state) return [];
  return Array.from(state.players.values()).map(p => ({
    id: p.id,
    name: p.name,
    team: p.team,
    isHost: p.isHost,
    contributedPoints: p.contributedPoints ?? 0,
  }));
}

export function getPlayerSlot(nickname: string): { roomId: string; team: 1 | 2 } | null {
  const key = nickname.trim().toLowerCase();
  for (const [roomId, state] of gameStates.entries()) {
    for (const p of state.players.values()) {
      if (p.name.trim().toLowerCase() === key) {
        return { roomId, team: p.team };
      }
    }
  }
  return null;
}
