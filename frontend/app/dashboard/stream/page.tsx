"use client";
import React, { useState, useEffect, use } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import socketIoClient from "socket.io-client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Peer from "peerjs";
import { useDispatch } from "react-redux";
import { updatePeerId } from "@/redux/auth/auth-slice";
import { useAppContext } from "@/context";
// const ws = "http://localhost:8080";
const formSchema = z.object({
  name: z.string(),
  streamId: z.string().min(8, {
    message: "streamId not valid",
  }),
});
const page = () => {
  const { ws } = useAppContext();
  const userId = useAppSelector((state) => state.auth.values.id);
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      streamId: "",
      name: "",
    },
  });
  const joinRoom = (streamId: string) => {
    ws.emit("join-room");
  };
  const startStream = () => {
    ws.emit("create-room");
  };
  function onSubmit(values: z.infer<typeof formSchema>) {}
  const [startstream, setStartStream] = useState(false);
  return (
    <section
      className="
    flex
    flex-col
    
    h-screen
    py-20
    px-5
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
        py-5
        
        gap-5
        "
      >
        <h1
          className="
                text-[30px]
                capitalize
                font-bold
                tracking-wide
                text-center
                text-base-primary
                "
        >
          <span
            className="
                text-secondary-primary
                "
          >
            Join
          </span>{" "}
          Stream and start your{" "}
          <span
            className="
                text-secondary-primary
                "
          >
            journey
          </span>{" "}
          to become a better{" "}
          <span
            className="
                text-secondary-primary
                "
          >
            version
          </span>{" "}
          of you
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4
        w-[40%]
        px-10
        py-10
        text-base-primary
        bg-primary-light
        shadow-2xl

        rounded-3xl
        sm:w-[90%]
        sm:px-5
        "
          >
            {!startstream ? (
              <FormField
                control={form.control}
                name="streamId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stream Id</FormLabel>
                    <FormControl>
                      <Input placeholder="stream id" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : null}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div
              className="
            flex
            flex-col
            gap-2
            
              "
            >
              <Button
                type="submit"
                className="bg-secondary-primary
            text-base-primary
            px-10
            py-2
            rounded-full
            font-bold
            !mt-6
            "
                onClick={() =>
                  !startstream
                    ? joinRoom(form.getValues("streamId"))
                    : startStream()
                }
              >
                {!startstream ? "Join Stream" : "Start Stream"}
              </Button>
              <button
                className="
            text-secondary-primary
            text-sm
            underline
              "
                onClick={() => setStartStream(!startstream)}
              >
                {!startstream ? "Start Stream" : "join Stream"}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default page;
