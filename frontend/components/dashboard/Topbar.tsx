"use client";
import React from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/store";
const Topbar = () => {
  const username = useAppSelector((state) => state.auth.values.username);
  const id = useAppSelector((state) => state.auth.values.id);
  console.log(username);
  console.log(id);
  return (
    <nav
      className="
      flex
      justify-between
      items-center
      h-20
      bg-bg-primary
      shadow-2xl
      fixed
      top-0
      w-full
      z-50
      left-0
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        px-5
        w-full
        "
      >
        <div
          className="
          flex
          items-center
          justify-between
          gap-10
          w-1/2
          sm:w-full
          "
        >
          <Link href="/">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={155}
              height={155}
            />
          </Link>
          <Searchbar />
        </div>
        <div
          className="
            flex
            items-center
            justify-between
            gap-5
            text-base-primary
            sm:hidden
            "
        >
          <div
            className="
            flex
            items-center
            justify-between
            relative
            "
          >
            <span
              className="absolute -top-1 -right-1 bg-secondary-primary text-base-primary text-[10px] rounded-full w-3 h-3 flex justify-center items-center
                
            "
            >
              50
            </span>
            <CiMail className="text-[20px]" />
          </div>
          <hr
            className="
            border-2
            
            border-secondary-primary
            h-10
            
            "
          />

          <div
            className="
            flex
            items-center
            justify-between
            relative
            "
          >
            <span
              className="absolute -top-1 -right-1 bg-secondary-primary text-base-primary text-[10px] rounded-full w-3 h-3 flex justify-center items-center
                
            "
            >
              50
            </span>
            <IoMdNotificationsOutline className="text-[20px]" />
          </div>

          <hr
            className="
            border-2
            border-secondary-primary
            h-10
            
            "
          />
          <span>{username}</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
