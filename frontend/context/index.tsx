"use client";
import socketIOClient from "socket.io-client";
import { peerReducer } from "@/lib/reducers/peerReducer";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import { useRouter } from "next/navigation";
import Peer from "peerjs";
import { v4 as uuidv4 } from "uuid";
import { addPeerAction } from "@/lib/actions/peerAction";
const WS = "http://localhost:8080";
const AppContext = createContext<null | any>(null);
const ws = socketIOClient(WS);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [me, setMe] = useState<Peer>();
  const [stream, setStream] = useState<MediaStream>();
  const [peers, dispatch] = useReducer(peerReducer, {});
  const enterRoom = ({ roomId }: { roomId: string }) => {
    router.push(`/stream/${roomId}`);
  };
  const getUsers = ({ participants }: { participants: string[] }) => {
    console.log(participants);
  };
  useEffect(() => {
    const meId = uuidv4();
    const peer = new Peer(meId);
    setMe(peer);

    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
  }, []);
  useEffect(() => {
    if (!me) return;
    if (!stream) return;
    ws.on("user-joined", ({ peerId }) => {
      const call = me.call(peerId, stream);
      call.on("stream", (userVideoStream) => {
        dispatch(addPeerAction(peerId, userVideoStream));
      });
    });
    me.on("call", (call) => {
      call.answer(stream);
      call.on("stream", (userVideoStream) => {
        dispatch(addPeerAction(call.peer, userVideoStream));
      });
    });
  }, [me, stream]);
  console.log(peers);
  return (
    <AppContext.Provider value={{ ws, me, stream, setStream, peers }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
