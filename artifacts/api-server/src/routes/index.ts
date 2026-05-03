import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import roomsRouter from "./rooms.js";
import feedbackRouter from "./feedback.js";
import usersRouter from "./users.js";
import leaderboardRouter from "./leaderboard.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(roomsRouter);
router.use(feedbackRouter);
router.use(usersRouter);
router.use(leaderboardRouter);

export default router;
