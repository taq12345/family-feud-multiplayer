import { Router, type IRouter } from "express";
import { getMultiplayerLeaderboard, getSoloLeaderboard } from "../lib/stats.js";

const router: IRouter = Router();

router.get("/leaderboard", async (req, res) => {
  try {
    const limit = Math.min(Math.max(parseInt(String(req.query.limit ?? "100"), 10) || 100, 1), 500);
    const mode = String(req.query.mode ?? "multiplayer").toLowerCase();
    if (mode === "solo") {
      const rows = await getSoloLeaderboard(limit);
      res.json({ mode: "solo", leaderboard: rows });
      return;
    }
    const rows = await getMultiplayerLeaderboard(limit);
    res.json({ mode: "multiplayer", leaderboard: rows });
  } catch (err) {
    console.error("[leaderboard]", err);
    res.status(500).json({ error: "Failed to load leaderboard" });
  }
});

export default router;
