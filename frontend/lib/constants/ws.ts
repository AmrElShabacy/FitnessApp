import socketIOClient from "socket.io-client";

export const ws = socketIOClient("http://localhost:8080");
