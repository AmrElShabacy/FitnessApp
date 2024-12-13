"use client";
import AttendanceView from "@/components/stream/AttendanceView";
import Chatpart from "@/components/stream/Chatpart";
import ScreenView from "@/components/stream/ScreenView";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import socketIoClient from "socket.io-client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
import Peer from "peerjs";
import { useDispatch } from "react-redux";
import App from "next/app";
import { updatePeerId } from "@/redux/auth/auth-slice";
import isAuth from "@/components/auth/isAutth";
import { useAppContext } from "@/context";

const page = () => {
  const { id } = useParams();

  const { ws, me, setStream } = useAppContext();
  useEffect(() => {
    try {
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: false })
        .then((stream) => {
          setStream(stream);
        });
    } catch (err) {
      console.log(err);
    }
    if (me)
      ws.emit("join-room", {
        roomId: id,
        peerId: me?.id,
      });
  }, [id, me, ws]);

  return (
    <section
      className="
    flex
    flex-col
    justify-start
    items-start
    h-screen
    py-2
    px-5
    w-full
    bg-bg-primary
    "
    >
      <div
        className="
        flex
        flex-row
        justify-start
        items-start
        w-full
        py-5
        h-full
        gap-5
        "
      >
        <div
          className="
                flex
                flex-col
                justify-center
                items-center
                w-3/4
                "
        >
          <div
            className="
            flex
            flex-col
            justify-end
            items-center
            w-full
            border-2
            border-secondary-primary
            h-[70vh]
            bg-primary-light
            shadow-2xl
            "
          >
            <ScreenView />
          </div>
          <div
            className="
            flex
            flex-col
            justify-center
            items-center
            w-full
            "
          >
            <AttendanceView />
          </div>
        </div>
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            w-1/4
            border-2
            border-secondary-primary
            h-full
            bg-primary-light
            shadow-2xl
            "
        >
          <Chatpart />
        </div>
      </div>
    </section>
  );
};

export default isAuth(page);
