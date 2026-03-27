import { surveyQuestions, SurveyQuestion } from "../data/questions.js";
export { surveyQuestions };

export interface Player {
  id: string;
  name: string;
  team: 1 | 2;
  isHost: boolean;
  contributedPoints: number;
}

export interface GameState {
  roomId: string;
  roomName: string;
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
  faceoffTurn: 1 | 2 | null;
  faceoffDesignatedPlayerId: string | null;
  faceoffUsedPlayerIds: Set<string>;
  faceoffAttempts: number;
  playingDesignatedPlayerId: string | null;
  playingUsedPlayerIds: Set<string>;
  questions: SurveyQuestion[];
  usedQuestionIds: Set<number>;
  wrongAnswers: Set<string>;
  /** Normalized submissions that already scored this question (repeat = wrong, sync). */
  correctSubmissionNorms: Set<string>;
  /** Unix ms when the game entered between_rounds for the current round (for accurate countdown on rejoin). */
  betweenRoundsStartedAt: number | null;
  /** Unix ms when the current faceoff answer timer was started (for accurate countdown on rejoin). */
  faceoffTimerStartedAt: number | null;
  /** Unix ms when the current playing/stealing answer timer was started (for accurate countdown on rejoin). */
  roundTimerStartedAt: number | null;
  /** Cross-round: last designated guesser for each team (to prevent back-to-back picks). */
  lastGuesserTeam1: string | null;
  lastGuesserTeam2: string | null;
}

export function createGameState(roomId: string, roomName: string, team1Name: string, team2Name: string, totalRounds: number): GameState {
  const allQuestions = [...surveyQuestions];
  // Shuffle
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  return {
    roomId,
    roomName,
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
    faceoffTurn: null,
    faceoffDesignatedPlayerId: null,
    faceoffUsedPlayerIds: new Set(),
    faceoffAttempts: 0,
    playingDesignatedPlayerId: null,
    playingUsedPlayerIds: new Set(),
    questions: allQuestions,
    usedQuestionIds: new Set(),
    wrongAnswers: new Set(),
    correctSubmissionNorms: new Set(),
    betweenRoundsStartedAt: null,
    faceoffTimerStartedAt: null,
    roundTimerStartedAt: null,
    lastGuesserTeam1: null,
    lastGuesserTeam2: null,
  };
}

export function getNextQuestion(state: GameState): SurveyQuestion | null {
  return state.questions.find(q => !state.usedQuestionIds.has(q.id)) ?? null;
}

export function serializeGameState(state: GameState) {
  const designatedPlayer = state.faceoffDesignatedPlayerId
    ? state.players.get(state.faceoffDesignatedPlayerId)
    : null;

  const playingDesignatedPlayer = state.playingDesignatedPlayerId
    ? state.players.get(state.playingDesignatedPlayerId)
    : null;

  return {
    roomId: state.roomId,
    roomName: state.roomName,
    players: Array.from(state.players.values()).map(player => ({
      ...player,
      contributedPoints: player.contributedPoints ?? 0,
    })),
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
    faceoffTurn: state.faceoffTurn,
    faceoffDesignatedPlayerName: designatedPlayer?.name ?? null,
    playingDesignatedPlayerName: playingDesignatedPlayer?.name ?? null,
    betweenRoundsStartedAt: state.betweenRoundsStartedAt,
    faceoffTimerStartedAt: state.faceoffTimerStartedAt,
    roundTimerStartedAt: state.roundTimerStartedAt,
  };
}
