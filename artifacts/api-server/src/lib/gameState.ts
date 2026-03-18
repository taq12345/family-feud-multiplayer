import { surveyQuestions, SurveyQuestion } from "../data/questions.js";

export interface Player {
  id: string;
  name: string;
  team: 1 | 2;
  isHost: boolean;
}

export interface GameState {
  roomId: string;
  players: Map<string, Player>;
  team1Score: number;
  team2Score: number;
  team1Name: string;
  team2Name: string;
  status: "waiting" | "faceoff" | "playing" | "stealing" | "between_rounds" | "fast_money" | "finished";
  currentQuestion: SurveyQuestion | null;
  revealedAnswers: Set<number>;
  currentRound: number;
  totalRounds: number;
  roundPoints: number;
  strikes: number;
  playingTeam: 1 | 2 | null;
  faceoffWinner: 1 | 2 | null;
  buzzedPlayerId: string | null;
  faceoffLockTeam: 1 | 2 | null;
  questions: SurveyQuestion[];
  usedQuestionIds: Set<number>;
}

export function createGameState(roomId: string, team1Name: string, team2Name: string, totalRounds: number): GameState {
  const allQuestions = [...surveyQuestions];
  // Shuffle
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  return {
    roomId,
    players: new Map(),
    team1Score: 0,
    team2Score: 0,
    team1Name,
    team2Name,
    status: "waiting",
    currentQuestion: null,
    revealedAnswers: new Set(),
    currentRound: 0,
    totalRounds,
    roundPoints: 0,
    strikes: 0,
    playingTeam: null,
    faceoffWinner: null,
    buzzedPlayerId: null,
    faceoffLockTeam: null,
    questions: allQuestions,
    usedQuestionIds: new Set(),
  };
}

export function getNextQuestion(state: GameState): SurveyQuestion | null {
  return state.questions.find(q => !state.usedQuestionIds.has(q.id)) ?? null;
}

export function serializeGameState(state: GameState) {
  return {
    roomId: state.roomId,
    players: Array.from(state.players.values()),
    team1Score: state.team1Score,
    team2Score: state.team2Score,
    team1Name: state.team1Name,
    team2Name: state.team2Name,
    status: state.status,
    currentQuestion: state.currentQuestion
      ? {
          id: state.currentQuestion.id,
          question: state.currentQuestion.question,
          answers: state.currentQuestion.answers.map((a, i) => ({
            text: state.revealedAnswers.has(i) ? a.text : null,
            points: state.revealedAnswers.has(i) ? a.points : null,
            revealed: state.revealedAnswers.has(i),
            index: i,
          })),
        }
      : null,
    currentRound: state.currentRound,
    totalRounds: state.totalRounds,
    roundPoints: state.roundPoints,
    strikes: state.strikes,
    playingTeam: state.playingTeam,
    faceoffWinner: state.faceoffWinner,
  };
}
