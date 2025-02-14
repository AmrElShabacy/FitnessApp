import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import { roomHandler } from "./room";
const port = 8080;
const app = express();
app.use(cors);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("a user connected");
  roomHandler(socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
