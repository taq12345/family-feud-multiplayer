import express, { type Express } from "express";
import { createServer } from "http";
import { Server as SocketServer } from "socket.io";
import cors from "cors";
import router from "./routes/index.js";
import { setupSocketHandlers } from "./lib/socketHandlers.js";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const httpServer = createServer(app);

const io = new SocketServer(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  path: "/api/socket.io",
  pingInterval: 25000,
  pingTimeout: 60000,
});

setupSocketHandlers(io);

export { httpServer as default };
export { app };
