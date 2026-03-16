import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { roomsTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { surveyQuestions } from "../data/questions.js";

const router: IRouter = Router();

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
  if (!name || !hostName || !team1Name || !team2Name) {
    return res.status(400).json({ error: "name, hostName, team1Name, team2Name are required" });
  }

  const id = nanoid(8);
  try {
    const [room] = await db.insert(roomsTable).values({
      id,
      name,
      hostName,
      team1Name,
      team2Name,
      maxPlayers: maxPlayers ?? 12,
      totalRounds: totalRounds ?? 5,
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
  } catch (err) {
    res.status(500).json({ error: "Failed to create room" });
  }
});

router.get("/rooms/:roomId", async (req, res) => {
  const { roomId } = req.params;
  try {
    const [room] = await db.select().from(roomsTable).where(eq(roomsTable.id, roomId));
    if (!room) return res.status(404).json({ error: "Room not found" });

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
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch room" });
  }
});

router.get("/questions", (_req, res) => {
  res.json(surveyQuestions);
});

export default router;
