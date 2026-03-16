import { Server as SocketServer, Socket } from "socket.io";
import { db } from "@workspace/db";
import { roomsTable, chatMessagesTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { GameState, createGameState, getNextQuestion, serializeGameState } from "./gameState.js";

const gameStates = new Map<string, GameState>();
const emptyRoomTimers = new Map<string, ReturnType<typeof setTimeout>>();

const EMPTY_ROOM_TTL_MS = 15 * 60 * 1000; // 15 minutes

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

export function setupSocketHandlers(io: SocketServer) {
  io.on("connection", (socket: Socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join_room", async ({ roomId, playerName, team }: { roomId: string; playerName: string; team: 1 | 2 }) => {
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

      await db.update(roomsTable).set({ currentRound: state.currentRound }).where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(state));
    });

    socket.on("buzz_in", ({ roomId }: { roomId: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "faceoff") return;
      const player = state.players.get(socket.id);
      if (!player) return;

      io.to(roomId).emit("buzzed_in", { playerName: player.name, team: player.team });
    });

    socket.on("faceoff_answer", async ({ roomId, answer }: { roomId: string; answer: string }) => {
      const state = gameStates.get(roomId);
      if (!state || state.status !== "faceoff" || !state.currentQuestion) return;
      const player = state.players.get(socket.id);
      if (!player) return;

      const normalizedAnswer = answer.trim().toLowerCase();
      const matchIndex = state.currentQuestion.answers.findIndex(
        a => a.text.toLowerCase().includes(normalizedAnswer) || normalizedAnswer.includes(a.text.toLowerCase().split(" ")[0])
      );

      if (matchIndex !== -1 && !state.revealedAnswers.has(matchIndex)) {
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
      } else {
        io.to(roomId).emit("answer_wrong", { playerName: player.name, team: player.team, answer });
      }
    });

    socket.on("submit_answer", async ({ roomId, answer }: { roomId: string; answer: string }) => {
      const state = gameStates.get(roomId);
      if (!state || (state.status !== "playing" && state.status !== "stealing") || !state.currentQuestion) return;
      const player = state.players.get(socket.id);
      if (!player) return;
      if (state.status === "playing" && player.team !== state.playingTeam) return;
      if (state.status === "stealing" && player.team === state.playingTeam) return;

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
        }
      } else {
        if (state.status === "playing") {
          state.strikes++;
          io.to(roomId).emit("strike", { strikes: state.strikes });

          if (state.strikes >= 3) {
            state.status = "stealing";
            state.strikes = 0;
            const stealingTeam = state.playingTeam === 1 ? 2 : 1;
            io.to(roomId).emit("steal_chance", { team: stealingTeam });
            io.to(roomId).emit("game_state", serializeGameState(state));
          }
        } else if (state.status === "stealing") {
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

      await db.update(roomsTable).set({ currentRound: state.currentRound }).where(eq(roomsTable.id, roomId));

      io.to(roomId).emit("game_state", serializeGameState(state));
    });

    socket.on("leave_room", async ({ roomId }: { roomId: string }) => {
      await handlePlayerLeave(io, socket, roomId);
      socket.leave(roomId);
      socket.data.roomId = null;
    });

    socket.on("disconnect", async () => {
      const { roomId } = socket.data;
      if (!roomId) return;
      await handlePlayerLeave(io, socket, roomId);
    });
  });
}

async function handlePlayerLeave(io: SocketServer, socket: Socket, roomId: string) {
  const playerName = socket.data.playerName;
  const state = gameStates.get(roomId);
  if (state) {
    state.players.delete(socket.id);
    try {
      await db.update(roomsTable)
        .set({ playerCount: state.players.size })
        .where(eq(roomsTable.id, roomId));
    } catch (err) {
      // ignore
    }
    if (state.players.size === 0) {
      if (state.status !== "waiting") {
        // Game had started — schedule deletion after 15 minutes of emptiness
        await scheduleRoomDeletion(roomId);
      } else {
        // Still in lobby — delete immediately
        gameStates.delete(roomId);
        try {
          await db.delete(roomsTable).where(eq(roomsTable.id, roomId));
        } catch (err) {
          // ignore
        }
      }
    } else {
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
