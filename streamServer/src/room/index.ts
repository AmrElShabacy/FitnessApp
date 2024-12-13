import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
const rooms: Record<string, string[]> = {};
export const roomHandler = (socket: Socket) => {
  const createRoom = (userId: string) => {
    const roomId = uuidv4();
    rooms[roomId] = [];
    socket.emit("room-created", { roomId });
    console.log("create-room", roomId);
  };
  const joinRoom = ({ roomId, peerId }: { roomId: string; peerId: string }) => {
    if (rooms[roomId]) {
      console.log("join-room", roomId, peerId);
      rooms[roomId].push(peerId);
      socket.join(roomId);
      socket.to(roomId).emit("user-joined", { peerId });
      socket.emit("get-users", {
        roomId,
        participants: rooms[roomId],
      });
    }
    socket.on("disconnect", () => {
      console.log("disconnect", peerId);
      leaveRoom({ roomId, peerId });
    });
  };
  const leaveRoom = ({
    roomId,
    peerId,
  }: {
    roomId: string;
    peerId: string;
  }) => {
    rooms[roomId] = rooms[roomId].filter((id) => id !== peerId);
    socket.to(roomId).emit("user-disconnected", peerId);
  };
  socket.on("join-room", joinRoom);
  socket.on("create-room", createRoom);
};
