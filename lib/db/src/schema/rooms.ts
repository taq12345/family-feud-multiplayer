import { pgTable, text, integer, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const roomStatusEnum = pgEnum("room_status", ["waiting", "playing", "finished"]);

export const roomsTable = pgTable("rooms", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  hostName: text("host_name").notNull(),
  status: roomStatusEnum("status").notNull().default("waiting"),
  playerCount: integer("player_count").notNull().default(0),
  maxPlayers: integer("max_players").notNull().default(12),
  team1Name: text("team1_name").notNull().default("Team 1"),
  team2Name: text("team2_name").notNull().default("Team 2"),
  team1Score: integer("team1_score").notNull().default(0),
  team2Score: integer("team2_score").notNull().default(0),
  currentRound: integer("current_round").notNull().default(0),
  totalRounds: integer("total_rounds").notNull().default(5),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertRoomSchema = createInsertSchema(roomsTable).omit({ createdAt: true });
export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Room = typeof roomsTable.$inferSelect;
