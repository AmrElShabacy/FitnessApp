import { useAppContext } from "@/context";
import React, { useEffect } from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { FiCameraOff } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { LuScreenShare } from "react-icons/lu";

const ScreenView = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { stream, setStream } = useAppContext();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  return (
    <div
      className="
      flex
      flex-col
      justify-center
      py-5
      gap-5
      items-center
      w-full

    "
    >
      <div
        className="
      flex
      flex-col
      justify-center
      items-center
      w-full
        "
      >
        <video
          ref={videoRef}
          autoPlay
          className="
        w-full
        h-[300px]
          "
        />
      </div>
      <div
        className="
      flex
      flex-row
      justify-center
      items-center
      w-full
      gap-5
      
      "
      >
        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        rounded-full
        bg-primary-light
        border-2
        border-secondary-primary
        w-[100px]
        h-[100px]
          "
        >
          <FiCameraOff className="text-[50px]" />
        </div>
        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        rounded-full
        bg-primary-light
        border-2
        border-secondary-primary
        w-[100px]
        h-[100px]
          "
        >
          <AiOutlineAudioMuted className="text-[50px]" />
        </div>

        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        rounded-full
        bg-primary-light
        border-2
        border-secondary-primary
        w-[100px]
        h-[100px]
          "
        >
          <LuScreenShare className="text-[50px]" />
        </div>
        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        rounded-full
        bg-primary-light
        border-2
        border-secondary-primary
        w-[100px]
        h-[100px]
          "
        >
          <IoCallOutline className="text-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default ScreenView;
