import { db } from "@workspace/db";
import { usersTable, userStatsTable } from "@workspace/db/schema";
import { eq, sql, desc } from "drizzle-orm";
import type { GameState, Player } from "./gameState.js";

export interface StatsDelta {
  gamesWon?: number;
  gamesLost?: number;
  roundsWon?: number;
  roundsLost?: number;
  correctGuesses?: number;
  wrongGuesses?: number;
  successfulSteals?: number;
  totalPoints?: number;
}

/** Resolve a player nickname to a registered user id (or null if guest). */
async function resolveUserIdByNickname(nickname: string): Promise<string | null> {
  const lower = nickname.trim().toLowerCase();
  if (!lower) return null;
  try {
    const rows = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.nicknameLower, lower))
      .limit(1);
    return rows[0]?.id ?? null;
  } catch {
    return null;
  }
}

/** True if at least 2 distinct human-named players are in the room (i.e. real multiplayer). */
function isMultiplayerGame(state: GameState): boolean {
  if (state.isSolo) return false;
  return state.players.size >= 2;
}

/** Increment stats for a registered user. No-op for guests / unknown nicknames. */
export async function creditStats(nickname: string, delta: StatsDelta): Promise<void> {
  const userId = await resolveUserIdByNickname(nickname);
  if (!userId) return;
  const hasAny = Object.values(delta).some(v => (v ?? 0) !== 0);
  if (!hasAny) return;
  try {
    await db
      .insert(userStatsTable)
      .values({
        userId,
        gamesWon: delta.gamesWon ?? 0,
        gamesLost: delta.gamesLost ?? 0,
        roundsWon: delta.roundsWon ?? 0,
        roundsLost: delta.roundsLost ?? 0,
        correctGuesses: delta.correctGuesses ?? 0,
        wrongGuesses: delta.wrongGuesses ?? 0,
        successfulSteals: delta.successfulSteals ?? 0,
        totalPoints: delta.totalPoints ?? 0,
      })
      .onConflictDoUpdate({
        target: userStatsTable.userId,
        set: {
          gamesWon: sql`${userStatsTable.gamesWon} + ${delta.gamesWon ?? 0}`,
          gamesLost: sql`${userStatsTable.gamesLost} + ${delta.gamesLost ?? 0}`,
          roundsWon: sql`${userStatsTable.roundsWon} + ${delta.roundsWon ?? 0}`,
          roundsLost: sql`${userStatsTable.roundsLost} + ${delta.roundsLost ?? 0}`,
          correctGuesses: sql`${userStatsTable.correctGuesses} + ${delta.correctGuesses ?? 0}`,
          wrongGuesses: sql`${userStatsTable.wrongGuesses} + ${delta.wrongGuesses ?? 0}`,
          successfulSteals: sql`${userStatsTable.successfulSteals} + ${delta.successfulSteals ?? 0}`,
          totalPoints: sql`${userStatsTable.totalPoints} + ${delta.totalPoints ?? 0}`,
          updatedAt: sql`now()`,
        },
      });
  } catch (err) {
    console.error("[stats] creditStats failed for", nickname, err);
  }
}

/** Credit a single guess outcome. */
export async function creditGuess(
  state: GameState,
  player: Player,
  outcome: "correct" | "wrong",
  points: number = 0,
): Promise<void> {
  if (!isMultiplayerGame(state)) return;
  if (outcome === "correct") {
    await creditStats(player.name, { correctGuesses: 1, totalPoints: points });
  } else {
    await creditStats(player.name, { wrongGuesses: 1 });
  }
}

/** Credit a successful steal to the player who stole. */
export async function creditSteal(state: GameState, player: Player, points: number): Promise<void> {
  if (!isMultiplayerGame(state)) return;
  await creditStats(player.name, { successfulSteals: 1, totalPoints: points, correctGuesses: 1 });
}

/** Credit round win/loss to every player on each team. */
export async function creditRoundEnd(state: GameState, winningTeam: 1 | 2): Promise<void> {
  if (!isMultiplayerGame(state)) return;
  const promises: Promise<void>[] = [];
  for (const p of state.players.values()) {
    if (p.team === winningTeam) {
      promises.push(creditStats(p.name, { roundsWon: 1 }));
    } else {
      promises.push(creditStats(p.name, { roundsLost: 1 }));
    }
  }
  await Promise.all(promises);
}

/** Credit game win/loss when the final round is over. */
export async function creditGameEnd(state: GameState): Promise<void> {
  if (!isMultiplayerGame(state)) return;
  if (state.team1Score === state.team2Score) return; // tie — no credit
  const winningTeam: 1 | 2 = state.team1Score > state.team2Score ? 1 : 2;
  const promises: Promise<void>[] = [];
  for (const p of state.players.values()) {
    if (p.team === winningTeam) {
      promises.push(creditStats(p.name, { gamesWon: 1 }));
    } else {
      promises.push(creditStats(p.name, { gamesLost: 1 }));
    }
  }
  await Promise.all(promises);
}

export interface LeaderboardRow {
  userId: string;
  nickname: string;
  avatarUrl: string | null;
  gamesWon: number;
  gamesLost: number;
  roundsWon: number;
  roundsLost: number;
  correctGuesses: number;
  wrongGuesses: number;
  successfulSteals: number;
  totalPoints: number;
}

export async function getLeaderboard(limit = 100): Promise<LeaderboardRow[]> {
  const rows = await db
    .select({
      userId: usersTable.id,
      nickname: usersTable.nickname,
      avatarUrl: usersTable.avatarUrl,
      gamesWon: userStatsTable.gamesWon,
      gamesLost: userStatsTable.gamesLost,
      roundsWon: userStatsTable.roundsWon,
      roundsLost: userStatsTable.roundsLost,
      correctGuesses: userStatsTable.correctGuesses,
      wrongGuesses: userStatsTable.wrongGuesses,
      successfulSteals: userStatsTable.successfulSteals,
      totalPoints: userStatsTable.totalPoints,
    })
    .from(usersTable)
    .innerJoin(userStatsTable, eq(userStatsTable.userId, usersTable.id))
    .where(sql`${usersTable.nickname} IS NOT NULL`)
    .orderBy(desc(userStatsTable.totalPoints), desc(userStatsTable.gamesWon))
    .limit(limit);

  return rows.map(r => ({
    userId: r.userId,
    nickname: r.nickname ?? "",
    avatarUrl: r.avatarUrl,
    gamesWon: r.gamesWon,
    gamesLost: r.gamesLost,
    roundsWon: r.roundsWon,
    roundsLost: r.roundsLost,
    correctGuesses: r.correctGuesses,
    wrongGuesses: r.wrongGuesses,
    successfulSteals: r.successfulSteals,
    totalPoints: r.totalPoints,
  }));
}
