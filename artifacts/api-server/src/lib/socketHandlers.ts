import { Server as SocketServer, Socket } from "socket.io";
import { db } from "@workspace/db";
import { roomsTable, chatMessagesTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { GameState, createGameState, getNextQuestion, serializeGameState } from "./gameState.js";

const gameStates = new Map<string, GameState>();
const emptyRoomTimers = new Map<string, ReturnType<typeof setTimeout>>();
const faceoffTimers = new Map<string, ReturnType<typeof setTimeout>>();
const answerTimers = new Map<string, ReturnType<typeof setTimeout>>();

// nickname (lowercase) → socket.id – tracks every connected player across all rooms
const activeNicknames = new Map<string, string>();

export function isNicknameTaken(name: string, excludeSocketId?: string): boolean {
  const existing = activeNicknames.get(name.trim().toLowerCase());
  if (!existing) return false;
  return existing !== excludeSocketId;
}

const EMPTY_ROOM_TTL_MS = 15 * 60 * 1000; // 15 minutes
const FACE_OFF_ANSWER_MS = 8 * 1000; // 8 seconds after buzz-in
const ROUND_ANSWER_MS = 15 * 1000; // 15 seconds per guess

async function scheduleRoomDeletion(roomId: string) {
  cancelRoomDeletion(roomId);
  const timer = setTimeout(async () => {
    emptyRoomTimers.delete(roomId);
    gameStates.delete(roomId);
    try {
      await db.delete(roomsTable).where(eq(roomsTable.id, roomId));
      console.log(`Deleted empty room ${roomId} after inactivity`);
    } catch (err) {
      console.error(`Failed to delete room ${roomId}:`, err);
    }
  }, EMPTY_ROOM_TTL_MS);
  emptyRoomTimers.set(roomId, timer);
}

function cancelRoomDeletion(roomId: string) {
  const existing = emptyRoomTimers.get(roomId);
  if (existing) {
    clearTimeout(existing);
    emptyRoomTimers.delete(roomId);
  }
}

function clearFaceoffTimer(roomId: string) {
  const existing = faceoffTimers.get(roomId);
  if (existing) {
    clearTimeout(existing);
    faceoffTimers.delete(roomId);
  }
}

function clearAnswerTimer(roomId: string) {
  const existing = answerTimers.get(roomId);
  if (existing) {
    clearTimeout(existing);
    answerTimers.delete(roomId);
  }
}

function startFaceoffTimer(io: SocketServer, roomId: string) {
  clearFaceoffTimer(roomId);
  const timer = setTimeout(() => {
    const state = gameStates.get(roomId);
    if (!state || state.status !== "faceoff" || !state.buzzedPlayerId) return;
    const player = state.players.get(state.buzzedPlayerId);
    if (!player) return;

    io.to(roomId).emit("answer_wrong", {
      playerName: player.name,
      team: player.team,
      answer: "(no answer in time)",
    });
    state.buzzedPlayerId = null;
    // After a wrong face-off attempt, give the other team the next exclusive buzz.
    // If the other team also misses, unlock so both can buzz again.
    if (state.faceoffLockTeam === null) {
      state.faceoffLockTeam = player.team === 1 ? 2 : 1;
    } else {
      state.faceoffLockTeam = null;
    }
    io.to(roomId).emit("game_state", serializeGameState(state));
  }, FACE_OFF_ANSWER_MS);
  faceoffTimers.set(roomId, timer);
}

function startAnswerTimer(io: SocketServer, state: GameState, roomId: string) {
  clearAnswerTimer(roomId);
  const timer = setTimeout(async () => {
    const current = gameStates.get(roomId);
    if (!current || (current.status !== "playing" && current.status !== "stealing") || !current.currentQuestion) return;

    const activeTeam = current.status === "playing" ? current.playingTeam : current.playingTeam === 1 ? 2 : 1;
    const player = Array.from(current.players.values()).find(p => p.team === activeTeam) ?? null;

    if (player) {
      io.to(roomId).emit("answer_wrong", {
        playerName: player.name,
        team: player.team,
        answer: "(no answer in time)",
      });
    }

    if (current.status === "playing") {
      current.strikes++;
      io.to(roomId).emit("strike", { strikes: current.strikes });

      if (current.strikes >= 3) {
        current.status = "stealing";
        current.strikes = 0;
        const stealingTeam = current.playingTeam === 1 ? 2 : 1;
        io.to(roomId).emit("steal_chance", { team: stealingTeam });
        io.to(roomId).emit("game_state", serializeGameState(current));
        startAnswerTimer(io, current, roomId);
      } else {
        io.to(roomId).emit("game_state", serializeGameState(current));
        startAnswerTimer(io, current, roomId);
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
      // Reject if another connected socket already owns this nickname
      if (isNicknameTaken(playerName, socket.id)) {
        socket.emit("join_rejected", { reason: `Nickname "${playerName}" is already in use by another player.` });
        return;
      }

      // Register the nickname before doing anything else
      activeNicknames.set(playerName.trim().toLowerCase(), socket.id);

      socket.join(roomId);
      socket.data.roomId = roomId;
      socket.data.playerName = playerName;
      socket.data.team = team;

      // Get or create game state
      if (!gameStates.has(roomId)) {
        try {
          const [room] = await db.select().from(roomsTable).where(eq(roomsTable.id, roomId));
          if (room) {
            const state = createGameState(roomId, room.team1Name, room.team2Name, room.totalRounds);
            gameStates.set(roomId, state);
          }
        } catch (err) {
          console.error("Failed to load room:", err);
        }
      }

      // Cancel any pending deletion for this room (player is rejoining)
      cancelRoomDeletion(roomId);

      const state = gameStates.get(roomId);
      if (state) {
        const isHost = state.players.size === 0;
        state.players.set(socket.id, {
          id: socket.id,
          name: playerName,
          team,
          isHost,
        });

        // Update player count in DB
        await db.update(roomsTable)
          .set({ playerCount: state.players.size })
          .where(eq(roomsTable.id, roomId));

        // Send recent chat history
        const recent = await db.select().from(chatMessagesTable)
          .where(eq(chatMessagesTable.roomId, roomId))
          .limit(50);
        socket.emit("chat_history", recent.map(m => ({
          playerName: m.playerName,
          message: m.message,
          createdAt: m.createdAt.toISOString(),
        })));

        io.to(roomId).emit("game_state", serializeGameState(state));
        io.to(roomId).emit("player_joined", { playerName, team });
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
      state.currentRound = 1;
      state.status = "faceoff";
      state.revealedAnswers = new Set();
      state.strikes = 0;
      state.roundPoints = 0;
      state.playingTeam = null;
      state.faceoffWinner = null;
      state.buzzedPlayerId = null;
      state.faceoffLockTeam = null;

      await db.update(roomsTable).set({ currentRound: state.currentRound }).where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(state));
    });

    socket.on("buzz_in", ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "faceoff") return;
      if (state.buzzedPlayerId) return;
      const player = state.players.get(socket.id);
      if (!player) return;
      if (state.faceoffLockTeam && player.team !== state.faceoffLockTeam) return;

      state.buzzedPlayerId = socket.id;
      io.to(roomId).emit("buzzed_in", { playerName: player.name, team: player.team });
      startFaceoffTimer(io, roomId);
    });

    socket.on("faceoff_answer", async ({ roomId, answer }: { roomId: string; answer: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "faceoff" || !state.currentQuestion) return;
      const player = state.players.get(socket.id);
      if (!player) return;

      if (state.buzzedPlayerId !== socket.id) return;

      const normalizedAnswer = answer.trim().toLowerCase();
      const matchIndex = state.currentQuestion.answers.findIndex(
        a => a.text.toLowerCase().includes(normalizedAnswer) || normalizedAnswer.includes(a.text.toLowerCase().split(" ")[0])
      );

      if (matchIndex !== -1 && !state.revealedAnswers.has(matchIndex)) {
        clearFaceoffTimer(roomId);
        state.buzzedPlayerId = null;
        state.faceoffLockTeam = null;
        state.revealedAnswers.add(matchIndex);
        state.faceoffWinner = player.team;
        state.playingTeam = player.team;
        state.roundPoints += state.currentQuestion.answers[matchIndex].points;
        state.status = "playing";

        io.to(roomId).emit("answer_correct", {
          playerName: player.name,
          team: player.team,
          answerIndex: matchIndex,
          points: state.currentQuestion.answers[matchIndex].points,
        });
        io.to(roomId).emit("game_state", serializeGameState(state));
        startAnswerTimer(io, state, roomId);
      } else {
        io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
        clearFaceoffTimer(roomId);
        state.buzzedPlayerId = null;
        if (state.faceoffLockTeam === null) {
          state.faceoffLockTeam = player.team === 1 ? 2 : 1;
        } else {
          state.faceoffLockTeam = null;
        }
        io.to(roomId).emit("game_state", serializeGameState(state));
      }
    });

    socket.on("submit_answer", async ({ roomId, answer }: { roomId: string; answer: string }) => {
      const state = gameStates.get(roomId);
      if (!state || (state.status !== "playing" && state.status !== "stealing") || !state.currentQuestion) return;
      const player = state.players.get(socket.id);
      if (!player) return;
      if (state.status === "playing" && player.team !== state.playingTeam) return;
      if (state.status === "stealing" && player.team === state.playingTeam) return;

      clearAnswerTimer(roomId);

      const normalizedAnswer = answer.trim().toLowerCase();
      const matchIndex = state.currentQuestion.answers.findIndex(
        (a, i) => !state.revealedAnswers.has(i) &&
          (a.text.toLowerCase().includes(normalizedAnswer) || normalizedAnswer.includes(a.text.toLowerCase().split(" ")[0]))
      );

      if (matchIndex !== -1) {
        state.revealedAnswers.add(matchIndex);
        const pts = state.currentQuestion.answers[matchIndex].points;
        state.roundPoints += pts;

        io.to(roomId).emit("answer_correct", {
          playerName: player.name,
          team: player.team,
          answerIndex: matchIndex,
          points: pts,
        });

        // Check if all answers revealed
        const allRevealed = state.currentQuestion.answers.every((_, i) => state.revealedAnswers.has(i));
        if (allRevealed || state.status === "stealing") {
          await endRound(io, state, roomId, player.team);
        } else {
          io.to(roomId).emit("game_state", serializeGameState(state));
          startAnswerTimer(io, state, roomId);
        }
      } else {
        if (state.status === "playing") {
          io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
          state.strikes++;
          io.to(roomId).emit("strike", { strikes: state.strikes });

          if (state.strikes >= 3) {
            state.status = "stealing";
            state.strikes = 0;
            const stealingTeam = state.playingTeam === 1 ? 2 : 1;
            io.to(roomId).emit("steal_chance", { team: stealingTeam });
            io.to(roomId).emit("game_state", serializeGameState(state));
            startAnswerTimer(io, state, roomId);
          } else {
            io.to(roomId).emit("game_state", serializeGameState(state));
            startAnswerTimer(io, state, roomId);
          }
        } else if (state.status === "stealing") {
          io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
          // Failed steal — playing team gets points
          await endRound(io, state, roomId, state.playingTeam!);
        }
      }
    });

    socket.on("pass_turn", ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "playing") return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;

      state.strikes++;
      io.to(roomId).emit("strike", { strikes: state.strikes });

      if (state.strikes >= 3) {
        state.status = "stealing";
        state.strikes = 0;
        const stealingTeam = state.playingTeam === 1 ? 2 : 1;
        io.to(roomId).emit("steal_chance", { team: stealingTeam });
        io.to(roomId).emit("game_state", serializeGameState(state));
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

      if (state.currentRound >= state.totalRounds) {
        state.status = "finished";
        await db.update(roomsTable).set({ status: "finished" }).where(eq(roomsTable.id, roomId));
        io.to(roomId).emit("game_state", serializeGameState(state));
        return;
      }

      const question = getNextQuestion(state);
      if (!question) {
        state.status = "finished";
        await db.update(roomsTable).set({ status: "finished" }).where(eq(roomsTable.id, roomId));
        io.to(roomId).emit("game_state", serializeGameState(state));
        return;
      }

      state.usedQuestionIds.add(question.id);
      state.currentQuestion = question;
      state.currentRound++;
      state.status = "faceoff";
      state.revealedAnswers = new Set();
      state.strikes = 0;
      state.roundPoints = 0;
      state.playingTeam = null;
      state.faceoffWinner = null;
      state.buzzedPlayerId = null;
      state.faceoffLockTeam = null;

      await db.update(roomsTable).set({ currentRound: state.currentRound }).where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(state));
    });

    socket.on("delete_room", async ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state) return;
      const player = state.players.get(socket.id);
      if (!player?.isHost) return;

      gameStates.delete(roomId);
      try {
        await db.delete(roomsTable).where(eq(roomsTable.id, roomId));
      } catch {
        // ignore DB errors
      }

      io.to(roomId).emit("room_deleted", { roomId });
    });

    socket.on("leave_room", async ({ roomId }: { roomId: string }) => {
      await handlePlayerLeave(io, socket, roomId);
      socket.leave(roomId);
      socket.data.roomId = null;
    });

    socket.on("disconnect", async () => {
      const { roomId, playerName } = socket.data;
      if (!roomId) {
        // Player disconnected without ever joining a room – still clean up nickname
        if (playerName) {
          const key = (playerName as string).trim().toLowerCase();
          if (activeNicknames.get(key) === socket.id) activeNicknames.delete(key);
        }
        return;
      }
      await handlePlayerLeave(io, socket, roomId);
    });
  });
}

async function handlePlayerLeave(io: SocketServer, socket: Socket, roomId: string) {
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
    state.players.delete(socket.id);
    try {
      await db.update(roomsTable)
        .set({ playerCount: state.players.size })
        .where(eq(roomsTable.id, roomId));
    } catch (err) {
      // ignore
    }
    if (state.players.size === 0) {
      // Always delete empty rooms immediately
      cancelRoomDeletion(roomId);
      clearFaceoffTimer(roomId);
      clearAnswerTimer(roomId);
      gameStates.delete(roomId);
      try {
        await db.delete(roomsTable).where(eq(roomsTable.id, roomId));
      } catch (err) {
        // ignore
      }
    } else {
      // If host left, pick a new host at random
      if (departing?.isHost) {
        const remaining = Array.from(state.players.values());
        const nextHost = remaining[Math.floor(Math.random() * remaining.length)];
        // Ensure only one host
        remaining.forEach(p => { p.isHost = p.id === nextHost.id; });

        try {
          await db.update(roomsTable)
            .set({ hostName: nextHost.name })
            .where(eq(roomsTable.id, roomId));
        } catch {
          // ignore
        }

        io.to(roomId).emit("host_changed", { hostName: nextHost.name });
      }

      if (playerName) io.to(roomId).emit("player_left", { playerName });
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

  // Reveal all remaining answers at end of round
  if (state.currentQuestion) {
    state.revealedAnswers = new Set(
      state.currentQuestion.answers.map((_, idx) => idx)
    );
  }

  state.status = "between_rounds";

  try {
    await db.update(roomsTable).set({
      team1Score: state.team1Score,
      team2Score: state.team2Score,
    }).where(eq(roomsTable.id, roomId));
  } catch (err) {
    // ignore
  }

  io.to(roomId).emit("round_over", {
    winningTeam,
    points: state.roundPoints,
    team1Score: state.team1Score,
    team2Score: state.team2Score,
  });
  io.to(roomId).emit("game_state", serializeGameState(state));
}

export function getRoomPlayers(roomId: string) {
  const state = gameStates.get(roomId);
  if (!state) return [];
  return Array.from(state.players.values()).map(p => ({
    id: p.id,
    name: p.name,
    team: p.team,
    isHost: p.isHost,
  }));
}
