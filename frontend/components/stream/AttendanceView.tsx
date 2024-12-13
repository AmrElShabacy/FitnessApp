"use client";
import { useAppContext } from "@/context";
import { Video } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { VideoPlayer } from "./VideoPlayer";
import Peer from "peerjs";
type peerState = Record<
  string,
  {
    stream: MediaStream;
  }
>;
const AttendanceView = () => {
  const { peers, stream } = useAppContext();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  return (
    <div
      className="
      flex
      flex-row
      
      
      px-5
      w-full
      gap-5
      py-3
      
    "
    >
      <div
        className="
        flex
        flex-row
        justify-center
        items-center
        flex-1
        flex-wrap
          rounded-full
          bg-red-500
        gap-3
        "
      >
        {Object.values(peers as peerState).map((peer) => {
          return <VideoPlayer stream={peer.stream} />;
        })}
      </div>
    </div>
  );
};

export default AttendanceView;
