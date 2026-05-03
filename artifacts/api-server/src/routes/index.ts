import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import roomsRouter from "./rooms.js";
import feedbackRouter from "./feedback.js";
import usersRouter from "./users.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(roomsRouter);
router.use(feedbackRouter);
router.use(usersRouter);

export default router;
