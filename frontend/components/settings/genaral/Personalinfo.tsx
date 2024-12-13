"use client";

import React, { use } from "react";
import { useAppSelector } from "@/redux/store";
const Personalinfo = () => {
  const user = useAppSelector((state) => state.auth.values);
  return (
    <div
      className="
        flex
        flex-col
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
                justify-start
                items-start
                
                w-full
                
                
                "
      >
        <h1
          className="
                text-[2rem]
                font-bold
                text-center
                text-secondary-primary
                "
        >
          Personal Info
        </h1>
        <p
          className="
                text-base-primary
                "
        >
          Update your personal information
        </p>
      </div>
      <div
        className="
                flex
                flex-col
               
                justify-center
                items-center
                gap-5
                w-full
                
                
                "
      >
        <form
          action=""
          className="
            flex
            flex-col
            justify-center
            items-center
            sm:flex-col
            py-5
            gap-5
            w-full
            "
        >
          <div
            className="
                    flex
                    flex-col
                    sm:w-full
                    gap-1
                    w-[33%]
                    "
          >
            <label
              htmlFor=""
              className="
                    text-base-primary
                    "
            >
              Username
            </label>
            <input
              type="text"
              value={user?.username}
              className="
                px-5
                py-2
                rounded-md
                
                onfocus:outline-none
                onfocus:border-none
                
            "
            />
          </div>
          <div
            className="
                    flex
                    flex-col
                    sm:w-full
                    gap-1
                    w-[33%]
                    "
          >
            <label
              htmlFor=""
              className="
                    text-base-primary
                    "
            >
              Email
            </label>
            <input
              type="email"
              value={user?.email}
              className="
                px-5
                py-2
                rounded-md
                
                onfocus:outline-none
                onfocus:border-none
                
            "
            />
          </div>
          <div
            className="
                    flex
                    flex-col
                    sm:w-full
                    gap-1
                    w-[33%]
                    "
          >
            <label
              htmlFor=""
              className="
                    text-base-primary
                    "
            >
              Password
            </label>
            <input
              type="password"
              value={user?.password}
              className="
                px-5
                py-2
                rounded-md
                
                onfocus:outline-none
                onfocus:border-none
                
            "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalinfo;
