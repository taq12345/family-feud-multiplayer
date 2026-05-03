import { Router, type IRouter } from "express";
import { getLeaderboard } from "../lib/stats.js";

const router: IRouter = Router();

router.get("/leaderboard", async (_req, res) => {
  try {
    const limit = Math.min(Math.max(parseInt(String(_req.query.limit ?? "100"), 10) || 100, 1), 500);
    const rows = await getLeaderboard(limit);
    res.json({ leaderboard: rows });
  } catch (err) {
    console.error("[leaderboard]", err);
    res.status(500).json({ error: "Failed to load leaderboard" });
  }
});

export default router;
