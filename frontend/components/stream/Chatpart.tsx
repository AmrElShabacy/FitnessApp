"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
interface Messages {
  id: number;
  message: string;
  user: {
    name: string;
    image: string;
  };
}
const Chatpart = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const sendMessage = (e: any) => {
    e.preventDefault();
    const messageobj = {
      id: messages.length + 1,
      message: message,
      user: {
        name: "Aman",
        image: "/assets/profile.jpg",
      },
    };
    setMessages([...messages, messageobj]);
    setMessage("");
  };
  return (
    <div
      className="
    flex
    flex-col
    justify-end
    items-center
    w-full
    h-full
    gap-5
    px-5
    pb-5
    overflow-y-auto
    "
    >
      <div
        className="
        flex
        flex-col
        
        w-full
        overflow-y-auto
        
        py-5
        gap-5
        "
      >
        {/* chat message here */}

        {messages.map((messageobj) => (
          <div
            className="
            flex
            flex-col
            justify-end
            items-end
            w-full
            gap-2
            px-5
            py-2
            rounded-lg
            text-base-primary
            bg-secondary-primary
            "
          >
            <h1>{messageobj.message}</h1>
          </div>
        ))}
      </div>
      <div
        className="
        flex
        flex-row
        justify-start
        items-center
        w-full
        
        gap-5
        "
      >
        <Input
          type="text"
          placeholder="Enter your message"
          className=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="
            bg-secondary-primary
            text-base-primary
            text-button
            px-5
            py-2
            flex
            justify-center
            items-center
            rounded-lg
            w-[100px]
            "
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatpart;
