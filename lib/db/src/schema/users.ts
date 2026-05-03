import { pgTable, text, timestamp, index } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const usersTable = pgTable(
  "users",
  {
    id: text("id").primaryKey(),
    clerkUserId: text("clerk_user_id").notNull().unique(),
    nickname: text("nickname"),
    nicknameLower: text("nickname_lower"),
    email: text("email"),
    avatarUrl: text("avatar_url"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    nicknameSetAt: timestamp("nickname_set_at"),
  },
  (table) => ({
    nicknameLowerIdx: index("users_nickname_lower_idx").on(table.nicknameLower),
    nicknameLowerUnique: index("users_nickname_lower_unique_idx")
      .on(table.nicknameLower)
      .where(sql`${table.nicknameLower} IS NOT NULL`),
  }),
);

export type User = typeof usersTable.$inferSelect;
export type InsertUser = typeof usersTable.$inferInsert;
