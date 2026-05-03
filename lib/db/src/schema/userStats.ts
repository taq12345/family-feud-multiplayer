import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { usersTable } from "./users";

export const userStatsTable = pgTable("user_stats", {
  userId: text("user_id")
    .primaryKey()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  gamesWon: integer("games_won").notNull().default(0),
  gamesLost: integer("games_lost").notNull().default(0),
  roundsWon: integer("rounds_won").notNull().default(0),
  roundsLost: integer("rounds_lost").notNull().default(0),
  correctGuesses: integer("correct_guesses").notNull().default(0),
  wrongGuesses: integer("wrong_guesses").notNull().default(0),
  successfulSteals: integer("successful_steals").notNull().default(0),
  totalPoints: integer("total_points").notNull().default(0),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type UserStats = typeof userStatsTable.$inferSelect;
export type InsertUserStats = typeof userStatsTable.$inferInsert;
