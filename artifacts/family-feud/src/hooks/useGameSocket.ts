import { useEffect, useCallback, useRef } from "react";
import { getSocket } from "../lib/socket";

export interface Player {
  id: string;
  name: string;
  team: 1 | 2;
  isHost: boolean;
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
  faceoffWinner: 1 | 2 | null;
  faceoffTurn: 1 | 2 | null;
  faceoffDesignatedPlayerName: string | null;
}

export interface ChatMsg {
  playerName: string;
  message: string;
  createdAt: string;
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
    onAnswerCorrect?: (data: { playerName: string; team: 1 | 2; answerIndex: number; answerText: string; points: number }) => void;
    onAnswerWrong?: (data: { playerName: string; team: 1 | 2; answer: string }) => void;
    onStrike?: (data: { strikes: number }) => void;
    onStealChance?: (data: { team: 1 | 2 }) => void;
    onRoundOver?: (data: { winningTeam: 1 | 2; points: number; team1Score: number; team2Score: number }) => void;
    onRoomDeleted?: (data: { roomId: string }) => void;
    onJoinRejected?: (data: { reason: string }) => void;
    onHostChanged?: (data: { hostName: string }) => void;
  }
) {
  const callbacksRef = useRef(callbacks);
  callbacksRef.current = callbacks;

  useEffect(() => {
    if (!roomId || !playerName || !team) return;
    const socket = getSocket();

    const handlers: Record<string, (...args: unknown[]) => void> = {
      game_state: (state: GameStateData) => callbacksRef.current.onGameState?.(state),
      chat_message: (msg: ChatMsg) => callbacksRef.current.onChatMessage?.(msg),
      chat_history: (msgs: ChatMsg[]) => callbacksRef.current.onChatHistory?.(msgs),
      player_joined: (data: { playerName: string; team: 1 | 2 }) => callbacksRef.current.onPlayerJoined?.(data),
      player_left: (data: { playerName: string }) => callbacksRef.current.onPlayerLeft?.(data),
      answer_correct: (data: { playerName: string; team: 1 | 2; answerIndex: number; points: number }) => callbacksRef.current.onAnswerCorrect?.(data),
      answer_wrong: (data: { playerName: string; team: 1 | 2; answer: string }) => callbacksRef.current.onAnswerWrong?.(data),
      strike: (data: { strikes: number }) => callbacksRef.current.onStrike?.(data),
      steal_chance: (data: { team: 1 | 2 }) => callbacksRef.current.onStealChance?.(data),
      round_over: (data: { winningTeam: 1 | 2; points: number; team1Score: number; team2Score: number }) => callbacksRef.current.onRoundOver?.(data),
      room_deleted: (data: { roomId: string }) => callbacksRef.current.onRoomDeleted?.(data),
      join_rejected: (data: { reason: string }) => callbacksRef.current.onJoinRejected?.(data),
      host_changed: (data: { hostName: string }) => callbacksRef.current.onHostChanged?.(data),
    };

    Object.entries(handlers).forEach(([event, handler]) => {
      socket.on(event, handler as (...args: unknown[]) => void);
    });

    socket.emit("join_room", { roomId, playerName, team });

    return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        socket.off(event, handler as (...args: unknown[]) => void);
      });
    };
  }, [roomId, playerName, team]);

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

  const passToOpponent = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("pass_turn", { roomId });
  }, [roomId]);

  const leaveRoom = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("leave_room", { roomId });
  }, [roomId]);

  const deleteRoom = useCallback(() => {
    if (!roomId) return;
    getSocket().emit("delete_room", { roomId });
  }, [roomId]);

  return { startGame, faceoffAnswer, submitAnswer, sendChat, nextRound, passToOpponent, leaveRoom, deleteRoom };
}
