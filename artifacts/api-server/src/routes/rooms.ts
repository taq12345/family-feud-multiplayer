import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { roomsTable } from "@workspace/db/schema";
import { getRoomPlayers, isNicknameTaken, getPlayerSlot } from "../lib/socketHandlers.js";
import { notifyRoomCreated } from "../lib/notify.js";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { surveyQuestions } from "../lib/questionsBank.js";

const router: IRouter = Router();
const ALLOWED_TOTAL_ROUNDS = new Set([2, 4, 6, 8, 10]);

router.get("/rooms", async (_req, res) => {
  try {
    const rooms = await db.select().from(roomsTable).orderBy(roomsTable.createdAt);
    res.json(rooms.map(r => ({
      id: r.id,
      name: r.name,
      hostName: r.hostName,
      status: r.status,
      playerCount: r.playerCount,
      maxPlayers: r.maxPlayers,
      team1Name: r.team1Name,
      team2Name: r.team2Name,
      team1Score: r.team1Score,
      team2Score: r.team2Score,
      currentRound: r.currentRound,
      totalRounds: r.totalRounds,
      createdAt: r.createdAt.toISOString(),
    })));
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch rooms" });
  }
});

router.post("/rooms", async (req, res) => {
  const { name, hostName, team1Name, team2Name, maxPlayers, totalRounds } = req.body;
  const trimmedRoomName = String(name ?? "").trim();
  const trimmedHostName = String(hostName ?? "").trim();
  const normalizedTotalRounds = totalRounds === undefined ? 4 : Number(totalRounds);

  if (!trimmedRoomName || !trimmedHostName || !team1Name || !team2Name) {
    res.status(400).json({ error: "name, hostName, team1Name, team2Name are required" });
    return;
  }

  if (trimmedRoomName.length > 32) {
    res.status(400).json({ error: "Room name must be 32 characters or fewer." });
    return;
  }

  if (trimmedHostName.length > 16) {
    res.status(400).json({ error: "Nickname must be 16 characters or fewer." });
    return;
  }

  if (!Number.isInteger(normalizedTotalRounds) || !ALLOWED_TOTAL_ROUNDS.has(normalizedTotalRounds)) {
    res.status(400).json({ error: "totalRounds must be one of: 2, 4, 6, 8, 10." });
    return;
  }

  const id = nanoid(8);
  try {
    // Enforce at most one room per host
    const existing = await db.select().from(roomsTable).where(eq(roomsTable.hostName, trimmedHostName));
    if (existing.length > 0) {
      res.status(400).json({ error: "You already have an active room." });
      return;
    }

    const [room] = await db.insert(roomsTable).values({
      id,
      name: trimmedRoomName,
      hostName: trimmedHostName,
      team1Name,
      team2Name,
      maxPlayers: Math.min(10, Math.max(2, Number(maxPlayers) || 10)),
      totalRounds: normalizedTotalRounds,
      status: "waiting",
      playerCount: 0,
      team1Score: 0,
      team2Score: 0,
      currentRound: 0,
    }).returning();

    res.status(201).json({
      id: room.id,
      name: room.name,
      hostName: room.hostName,
      status: room.status,
      playerCount: room.playerCount,
      maxPlayers: room.maxPlayers,
      team1Name: room.team1Name,
      team2Name: room.team2Name,
      team1Score: room.team1Score,
      team2Score: room.team2Score,
      currentRound: room.currentRound,
      totalRounds: room.totalRounds,
      createdAt: room.createdAt.toISOString(),
    });
    notifyRoomCreated(room);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to create room" });
    return;
  }
});

router.get("/rooms/:roomId", async (req, res) => {
  const { roomId } = req.params;
  try {
    const [room] = await db.select().from(roomsTable).where(eq(roomsTable.id, roomId));
    if (!room) {
      res.status(404).json({ error: "Room not found" });
      return;
    }

    res.json({
      id: room.id,
      name: room.name,
      hostName: room.hostName,
      status: room.status,
      playerCount: room.playerCount,
      maxPlayers: room.maxPlayers,
      team1Name: room.team1Name,
      team2Name: room.team2Name,
      team1Score: room.team1Score,
      team2Score: room.team2Score,
      currentRound: room.currentRound,
      totalRounds: room.totalRounds,
      createdAt: room.createdAt.toISOString(),
    });
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch room" });
    return;
  }
});

router.get("/rooms/:roomId/players", async (req, res) => {
  const { roomId } = req.params;
  try {
    const players = getRoomPlayers(roomId);
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch room players" });
  }
});

router.get("/nicknames/:name/check", (req, res) => {
  const { name } = req.params;
  res.json({ taken: isNicknameTaken(name) });
});

router.get("/player-slots", (req, res) => {
  const nickname = req.query.nickname as string | undefined;
  if (!nickname?.trim()) {
    res.status(400).json({ error: "nickname required" });
    return;
  }
  const slot = getPlayerSlot(nickname);
  res.json(slot ?? null);
  return;
});

router.get("/questions", (_req, res) => {
  res.json(surveyQuestions);
});

export default router;
