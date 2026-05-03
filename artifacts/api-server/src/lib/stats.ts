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
  soloCorrectGuesses?: number;
  soloWrongGuesses?: number;
  soloTotalPoints?: number;
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

/** True if at least 2 distinct players participated in this game (i.e. real multiplayer).
 *  Uses allParticipants (a permanent roster) so late disconnects don't produce false negatives. */
function isMultiplayerGame(state: GameState): boolean {
  if (state.isSolo) return false;
  return state.allParticipants.size >= 2;
}

/** True if this is a real solo-mode game (single player against the survey). */
function isSoloGame(state: GameState): boolean {
  return !!state.isSolo;
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
        soloCorrectGuesses: delta.soloCorrectGuesses ?? 0,
        soloWrongGuesses: delta.soloWrongGuesses ?? 0,
        soloTotalPoints: delta.soloTotalPoints ?? 0,
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
          soloCorrectGuesses: sql`${userStatsTable.soloCorrectGuesses} + ${delta.soloCorrectGuesses ?? 0}`,
          soloWrongGuesses: sql`${userStatsTable.soloWrongGuesses} + ${delta.soloWrongGuesses ?? 0}`,
          soloTotalPoints: sql`${userStatsTable.soloTotalPoints} + ${delta.soloTotalPoints ?? 0}`,
          updatedAt: sql`now()`,
        },
      });
  } catch (err) {
    console.error("[stats] creditStats failed for", nickname, err);
  }
}

/** Credit a single guess outcome (multiplayer or solo, routed to separate columns). */
export async function creditGuess(
  state: GameState,
  player: Player,
  outcome: "correct" | "wrong",
  points: number = 0,
): Promise<void> {
  if (isSoloGame(state)) {
    if (outcome === "correct") {
      await creditStats(player.name, { soloCorrectGuesses: 1, soloTotalPoints: points });
    } else {
      await creditStats(player.name, { soloWrongGuesses: 1 });
    }
    return;
  }
  if (!isMultiplayerGame(state)) return;
  if (outcome === "correct") {
    await creditStats(player.name, { correctGuesses: 1, totalPoints: points });
  } else {
    await creditStats(player.name, { wrongGuesses: 1 });
  }
}

/** Credit a successful steal to the player who stole. Multiplayer only. */
export async function creditSteal(state: GameState, player: Player, points: number): Promise<void> {
  if (!isMultiplayerGame(state)) return;
  await creditStats(player.name, { successfulSteals: 1, totalPoints: points, correctGuesses: 1 });
}

/** Credit round win/loss to every player who participated in the round. */
export async function creditRoundEnd(state: GameState, winningTeam: 1 | 2): Promise<void> {
  if (!isMultiplayerGame(state)) return;
  const promises: Promise<void>[] = [];
  for (const p of state.allParticipants.values()) {
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
  if (state.team1Score === state.team2Score) {
    console.log(`[stats] creditGameEnd room=${state.roomId} — tie, no credit`);
    return;
  }
  const winningTeam: 1 | 2 = state.team1Score > state.team2Score ? 1 : 2;
  console.log(
    `[stats] creditGameEnd room=${state.roomId} winningTeam=${winningTeam} ` +
    `score=${state.team1Score}-${state.team2Score} participants=${state.allParticipants.size}`,
  );
  const promises: Promise<void>[] = [];
  for (const p of state.allParticipants.values()) {
    if (p.team === winningTeam) {
      promises.push(creditStats(p.name, { gamesWon: 1 }));
    } else {
      promises.push(creditStats(p.name, { gamesLost: 1 }));
    }
  }
  await Promise.all(promises);
}

export interface MultiplayerLeaderboardRow {
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

export interface SoloLeaderboardRow {
  userId: string;
  nickname: string;
  avatarUrl: string | null;
  correctGuesses: number;
  wrongGuesses: number;
  totalPoints: number;
}

export async function getMultiplayerLeaderboard(limit = 100): Promise<MultiplayerLeaderboardRow[]> {
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
    .where(sql`${usersTable.nickname} IS NOT NULL AND (
      ${userStatsTable.totalPoints} > 0
      OR ${userStatsTable.gamesWon} > 0
      OR ${userStatsTable.gamesLost} > 0
      OR ${userStatsTable.roundsWon} > 0
      OR ${userStatsTable.roundsLost} > 0
      OR ${userStatsTable.correctGuesses} > 0
      OR ${userStatsTable.wrongGuesses} > 0
      OR ${userStatsTable.successfulSteals} > 0
    )`)
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

export async function getSoloLeaderboard(limit = 100): Promise<SoloLeaderboardRow[]> {
  const rows = await db
    .select({
      userId: usersTable.id,
      nickname: usersTable.nickname,
      avatarUrl: usersTable.avatarUrl,
      correctGuesses: userStatsTable.soloCorrectGuesses,
      wrongGuesses: userStatsTable.soloWrongGuesses,
      totalPoints: userStatsTable.soloTotalPoints,
    })
    .from(usersTable)
    .innerJoin(userStatsTable, eq(userStatsTable.userId, usersTable.id))
    .where(sql`${usersTable.nickname} IS NOT NULL AND (
      ${userStatsTable.soloTotalPoints} > 0
      OR ${userStatsTable.soloCorrectGuesses} > 0
      OR ${userStatsTable.soloWrongGuesses} > 0
    )`)
    .orderBy(desc(userStatsTable.soloTotalPoints), desc(userStatsTable.soloCorrectGuesses))
    .limit(limit);

  return rows.map(r => ({
    userId: r.userId,
    nickname: r.nickname ?? "",
    avatarUrl: r.avatarUrl,
    correctGuesses: r.correctGuesses,
    wrongGuesses: r.wrongGuesses,
    totalPoints: r.totalPoints,
  }));
}
