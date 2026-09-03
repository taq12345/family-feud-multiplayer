import { useEffect, useCallback, useRef } from "react";
import { getSocket } from "../lib/socket";

export interface Player {
  id: string;
  name: string;
  team: 1 | 2;
  isHost: boolean;
  contributedPoints: number;
  avatarUrl?: string | null;
}

export interface AnswerSlot {
  text: string | null;
  points: number | null;
  revealed: boolean;
  index: number;
}

export interface CurrentQuestion {
  id: number;
  question: string;
  answers: AnswerSlot[];
}

export interface GameStateData {
  roomId: string;
  roomName: string;
  isSolo?: boolean;
  players: Player[];
  team1Score: number;
  team2Score: number;
  team1Name: string;
  team2Name: string;
  status: "waiting" | "faceoff" | "playing" | "stealing" | "between_rounds" | "fast_money" | "finished";
  currentQuestion: CurrentQuestion | null;
  currentRound: number;
  totalRounds: number;
  roundPoints: number;
  strikes: number;
  playingTeam: 1 | 2 | null;
  faceoffTurn: 1 | 2 | null;
  faceoffDesignatedPlayerName: string | null;
  playingDesignatedPlayerName: string | null;
  betweenRoundsStartedAt: number | null;
  faceoffTimerStartedAt: number | null;
  roundTimerStartedAt: number | null;
}

export interface ChatMsg {
  playerName: string;
  message: string;
  createdAt: string;
  type?: "system-correct" | "system-wrong";
}

export interface CanonicalAnswerSlot {
  index: number;
  text: string;
  points: number;
}

export function createSoloGame(
  playerName: string, 
  rounds: number, 
  topic: string | undefined,
  onCreated: (roomId: string) => void,
  onError: (error: string) => void
) {
  const socket = getSocket();

  const cleanup = () => {
    clearTimeout(timeout);
    socket.off("solo_game_created", handleCreated);
    socket.off("solo_game_error", handleError);
  };
  const handleCreated = ({ roomId }: { roomId: string }) => {
    cleanup();
    onCreated(roomId);
  };
  const handleError = ({ message }: { message: string }) => {
    cleanup();
    onError(message);
  };
  const timeout = setTimeout(() => {
    cleanup();
    onError(
      socket.connected
        ? "The game server did not respond. Please try again."
        : "Could not connect to the game server. Please check your connection and try again.",
    );
  }, topic ? 90_000 : 15_000);

  socket.once("solo_game_created", handleCreated);
  socket.once("solo_game_error", handleError);
  socket.emit("create_solo_game", { playerName, rounds, topic });
}

export function useGameSocket(
  roomId: string | null,
  playerName: string | null,
  team: 1 | 2 | null,
  callbacks: {
    onGameState?: (state: GameStateData) => void;
    onChatMessage?: (msg: ChatMsg) => void;
    onChatHistory?: (msgs: ChatMsg[]) => void;
    onPlayerJoined?: (data: { playerName: string; team: 1 | 2 }) => void;
    onPlayerLeft?: (data: { playerName: string }) => void;
    onAnswerCorrect?: (data: { playerName: string; team: 1 | 2; answerIndex: number; answerText: string; playedAnswer: string; points: number; contributedPoints: number }) => void;
    onAnswerWrong?: (data: { playerName: string; team: 1 | 2; answer: string }) => void;
    onStrike?: (data: { strikes: number }) => void;
    onStealChance?: (data: { team: 1 | 2 }) => void;
    onRoundOver?: (data: {
      winningTeam: 1 | 2;
      points: number;
      team1Score: number;
      team2Score: number;
      canonicalAnswers: CanonicalAnswerSlot[] | null;
    }) => void;
    onRoomDeleted?: (data: { roomId: string }) => void;
    onJoinRejected?: (data: { reason: string }) => void;
    onHostChanged?: (data: { hostName: string }) => void;
    onFaceoffNoWinner?: (data: { canonicalAnswers: CanonicalAnswerSlot[] | null }) => void;
    onKickedInactive?: (data: { idleMinutes: number }) => void;
    onStealGuess?: (data: { playerName: string; answer: string }) => void;
    onKicked?: () => void;
    onPlayerKicked?: (data: { playerName: string; hostName: string }) => void;
    onCustomQuestionsError?: (data: { message: string }) => void;
    onNextRoundError?: (data: { message: string }) => void;
  }
) {
  const callbacksRef = useRef(callbacks);
  callbacksRef.current = callbacks;

  // Tracks an in-flight answer that has been emitted but not yet confirmed by the server.
  // If the socket reconnects before answer_correct/answer_wrong arrives, the answer is
  // re-emitted so the server gets a second chance to process it.
  const pendingAnswerRef = useRef<{ answer: string; type: "faceoff" | "submit" } | null>(null);
  const reemitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!roomId || !playerName || !team) return;
    const socket = getSocket();

    const handlers: Record<string, (...args: unknown[]) => void> = {
      game_state: (state: GameStateData) => callbacksRef.current.onGameState?.(state),
      chat_message: (msg: ChatMsg) => callbacksRef.current.onChatMessage?.(msg),
      chat_history: (msgs: ChatMsg[]) => callbacksRef.current.onChatHistory?.(msgs),
      player_joined: (data: { playerName: string; team: 1 | 2 }) => callbacksRef.current.onPlayerJoined?.(data),
      player_left: (data: { playerName: string }) => callbacksRef.current.onPlayerLeft?.(data),
      // Clear pending answer as soon as the server confirms or rejects — whichever arrives first.
      answer_correct: (data: { playerName: string; team: 1 | 2; answerIndex: number; answerText: string; playedAnswer: string; points: number; contributedPoints: number }) => {
        pendingAnswerRef.current = null;
        callbacksRef.current.onAnswerCorrect?.(data);
      },
      answer_wrong: (data: { playerName: string; team: 1 | 2; answer: string }) => {
        pendingAnswerRef.current = null;
        callbacksRef.current.onAnswerWrong?.(data);
      },
      strike: (data: { strikes: number }) => callbacksRef.current.onStrike?.(data),
      steal_chance: (data: { team: 1 | 2 }) => callbacksRef.current.onStealChance?.(data),
      round_over: (data: {
        winningTeam: 1 | 2;
        points: number;
        team1Score: number;
        team2Score: number;
        canonicalAnswers: CanonicalAnswerSlot[] | null;
      }) => callbacksRef.current.onRoundOver?.(data),
      room_deleted: (data: { roomId: string }) => callbacksRef.current.onRoomDeleted?.(data),
      join_rejected: (data: { reason: string }) => callbacksRef.current.onJoinRejected?.(data),
      host_changed: (data: { hostName: string }) => callbacksRef.current.onHostChanged?.(data),
      faceoff_no_winner: (data: { canonicalAnswers: CanonicalAnswerSlot[] | null }) =>
        callbacksRef.current.onFaceoffNoWinner?.(data),
      kicked_inactive: (data: { idleMinutes: number }) => callbacksRef.current.onKickedInactive?.(data),
      steal_guess: (data: { playerName: string; answer: string }) => callbacksRef.current.onStealGuess?.(data),
      kicked: () => callbacksRef.current.onKicked?.(),
      player_kicked: (data: { playerName: string; hostName: string }) => callbacksRef.current.onPlayerKicked?.(data),
      custom_questions_error: (data: { message: string }) => callbacksRef.current.onCustomQuestionsError?.(data),
      next_round_error: (data: { message: string }) => callbacksRef.current.onNextRoundError?.(data),
    };

    Object.entries(handlers).forEach(([event, handler]) => {
      socket.on(event, handler as (...args: unknown[]) => void);
    });

    // Re-emit join_room on every connect (covers initial connect + automatic reconnects).
    // The server detects whether this is a fresh join or a session restoration.
    const handleConnect = () => {
      socket.emit("join_room", { roomId, playerName, team });

      // If an answer was in-flight when the socket dropped, re-emit it after a short delay.
      // The delay allows the server to finish processing join_room and restore the player's
      // designated-player slot before the answer arrives.
      // Server guards (answerProcessing mutex + designated-player check) safely reject
      // the re-emit if the round has already moved on.
      if (pendingAnswerRef.current) {
        const pending = pendingAnswerRef.current;
        if (reemitTimerRef.current) clearTimeout(reemitTimerRef.current);
        reemitTimerRef.current = setTimeout(() => {
          reemitTimerRef.current = null;
          if (!pendingAnswerRef.current) return; // Cleared by answer_correct/answer_wrong — no need to re-emit
          if (pending.type === "faceoff") {
            socket.emit("faceoff_answer", { roomId, answer: pending.answer });
          } else {
            socket.emit("submit_answer", { roomId, answer: pending.answer });
          }
        }, 300);
      }
    };

    socket.on("connect", handleConnect);

    // If already connected, emit immediately
    if (socket.connected) {
      socket.emit("join_room", { roomId, playerName, team });
    }

    return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        socket.off(event, handler as (...args: unknown[]) => void);
      });
      socket.off("connect", handleConnect);
      if (reemitTimerRef.current) {
        clearTimeout(reemitTimerRef.current);
        reemitTimerRef.current = null;
      }
    };
  }, [roomId, playerName, team]);

  const setPendingAnswer = useCallback((answer: string, type: "faceoff" | "submit") => {
    pendingAnswerRef.current = { answer, type };
  }, []);

  const clearPendingAnswer = useCallback(() => {
    pendingAnswerRef.current = null;
  }, []);

  const startGame = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("start_game", { roomId });
  }, [roomId]);

  const faceoffAnswer = useCallback((answer: string) => {
    if (!roomId) return;
    getSocket().emit("faceoff_answer", { roomId, answer });
  }, [roomId]);

  const submitAnswer = useCallback((answer: string) => {
    if (!roomId) return;
    getSocket().emit("submit_answer", { roomId, answer });
  }, [roomId]);

  const sendChat = useCallback((message: string) => {
    if (!roomId) return;
    getSocket().emit("send_chat", { roomId, message });
  }, [roomId]);

  const nextRound = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("next_round", { roomId });
  }, [roomId]);

  const leaveRoom = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("leave_room", { roomId });
  }, [roomId]);

  const deleteRoom = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("delete_room", { roomId });
  }, [roomId]);

  const restartGame = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("restart_game", { roomId });
  }, [roomId]);

  const kickPlayer = useCallback((targetName: string) => {
    if (!roomId) return;
    getSocket().emit("kick_player", { roomId, targetName });
  }, [roomId]);

  const generateCustomQuestions = useCallback((topic: string) => {
    if (!roomId) return;
    getSocket().emit("generate_custom_questions", { roomId, topic });
  }, [roomId]);

  const cancelCustomQuestions = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("cancel_custom_questions", { roomId });
  }, [roomId]);

  return { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, leaveRoom, deleteRoom, restartGame, kickPlayer, generateCustomQuestions, cancelCustomQuestions, setPendingAnswer, clearPendingAnswer };
}
