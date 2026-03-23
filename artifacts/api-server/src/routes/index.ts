import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import roomsRouter from "./rooms.js";
import feedbackRouter from "./feedback.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(roomsRouter);
router.use(feedbackRouter);

export default router;
