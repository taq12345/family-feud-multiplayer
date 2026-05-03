import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import { db } from "@workspace/db";
import { usersTable } from "@workspace/db/schema";
import { eq, sql } from "drizzle-orm";

const router: IRouter = Router();

const NICKNAME_REGEX = /^[A-Za-z0-9_-]{2,16}$/;
const RESERVED_NICKNAMES = new Set([
  "admin", "administrator", "moderator", "mod", "host", "system",
  "friendlyfeud", "friendly", "feud", "bot", "support", "help",
  "null", "undefined", "anonymous", "guest", "user", "owner",
]);

interface AuthedRequest extends Request {
  userId?: string;
}

async function requireAuth(req: AuthedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const auth = getAuth(req);
    const userId = auth?.userId;
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    req.userId = userId;
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}

async function ensureUserRow(clerkUserId: string) {
  const existing = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkUserId, clerkUserId))
    .limit(1);
  if (existing[0]) return existing[0];

  let email: string | null = null;
  let avatarUrl: string | null = null;
  try {
    const cu = await clerkClient.users.getUser(clerkUserId);
    email = cu.primaryEmailAddress?.emailAddress ?? cu.emailAddresses[0]?.emailAddress ?? null;
    avatarUrl = cu.imageUrl ?? null;
  } catch {
    // ignore — we can hydrate later
  }

  const inserted = await db
    .insert(usersTable)
    .values({
      id: clerkUserId,
      clerkUserId,
      email,
      avatarUrl,
    })
    .onConflictDoNothing({ target: usersTable.clerkUserId })
    .returning();

  if (inserted[0]) return inserted[0];

  const refetch = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkUserId, clerkUserId))
    .limit(1);
  return refetch[0]!;
}

/**
 * Re-pull the user's avatar URL from Clerk and persist it to our DB.
 * Called by the client after it uploads a new profile picture via Clerk's
 * `user.setProfileImage({ file })` — Clerk hosts the image, we just mirror
 * the resulting URL so leaderboards / room headers update right away.
 */
router.post("/users/me/sync-avatar", requireAuth, async (req: AuthedRequest, res) => {
  try {
    await ensureUserRow(req.userId!);
    let avatarUrl: string | null = null;
    try {
      const cu = await clerkClient.users.getUser(req.userId!);
      avatarUrl = cu.imageUrl ?? null;
    } catch (err) {
      console.error("[users/me/sync-avatar] clerk fetch failed", err);
      res.status(502).json({ error: "Could not fetch profile from Clerk" });
      return;
    }
    const updated = await db
      .update(usersTable)
      .set({ avatarUrl })
      .where(eq(usersTable.clerkUserId, req.userId!))
      .returning();
    res.json({ avatarUrl: updated[0]?.avatarUrl ?? null });
  } catch (err) {
    console.error("[users/me/sync-avatar]", err);
    res.status(500).json({ error: "Failed to sync avatar" });
  }
});

router.get("/users/me", requireAuth, async (req: AuthedRequest, res) => {
  try {
    const row = await ensureUserRow(req.userId!);
    res.json({
      id: row.id,
      nickname: row.nickname,
      email: row.email,
      avatarUrl: row.avatarUrl,
      hasNickname: !!row.nickname,
    });
  } catch (err) {
    console.error("[users/me]", err);
    res.status(500).json({ error: "Failed to load user" });
  }
});

// Public — anyone (including guests) can check if a nickname is available / reserved
router.get("/users/check-nickname", async (req, res) => {
  const raw = String(req.query.name ?? "").trim();
  if (!raw) {
    res.status(400).json({ error: "name required" });
    return;
  }
  if (!NICKNAME_REGEX.test(raw)) {
    res.json({
      available: false,
      reason: "Nicknames must be 2–16 characters: letters, numbers, _ or -",
    });
    return;
  }
  const lower = raw.toLowerCase();
  if (RESERVED_NICKNAMES.has(lower)) {
    res.json({ available: false, reason: "That nickname is reserved" });
    return;
  }
  const taken = await db
    .select({ id: usersTable.id })
    .from(usersTable)
    .where(eq(usersTable.nicknameLower, lower))
    .limit(1);
  if (taken.length > 0) {
    res.json({
      available: false,
      reason: "That nickname is taken by a registered player",
    });
    return;
  }
  res.json({ available: true });
});

router.post("/users/me/nickname", requireAuth, async (req: AuthedRequest, res) => {
  const raw = String(req.body?.nickname ?? "").trim();
  if (!NICKNAME_REGEX.test(raw)) {
    res.status(400).json({
      error: "Nicknames must be 2–16 characters: letters, numbers, _ or -",
    });
    return;
  }
  const lower = raw.toLowerCase();
  if (RESERVED_NICKNAMES.has(lower)) {
    res.status(400).json({ error: "That nickname is reserved" });
    return;
  }

  try {
    const row = await ensureUserRow(req.userId!);
    if (row.nickname) {
      res.status(409).json({
        error: "Your nickname is already set and cannot be changed",
        nickname: row.nickname,
      });
      return;
    }

    // Check uniqueness
    const taken = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.nicknameLower, lower))
      .limit(1);
    if (taken.length > 0) {
      res.status(409).json({ error: "That nickname is taken" });
      return;
    }

    const updated = await db
      .update(usersTable)
      .set({ nickname: raw, nicknameLower: lower, nicknameSetAt: sql`now()` })
      .where(eq(usersTable.clerkUserId, req.userId!))
      .returning();

    res.json({
      id: updated[0]!.id,
      nickname: updated[0]!.nickname,
      hasNickname: true,
    });
  } catch (err: any) {
    // Handle unique constraint race
    if (err?.code === "23505") {
      res.status(409).json({ error: "That nickname is taken" });
      return;
    }
    console.error("[users/me/nickname]", err);
    res.status(500).json({ error: "Failed to set nickname" });
  }
});

export default router;
export { NICKNAME_REGEX, RESERVED_NICKNAMES };
