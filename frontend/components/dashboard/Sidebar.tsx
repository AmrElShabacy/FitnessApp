"use client";

import React from "react";
import sideList from "@/lib/constants/sideList";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store";
import { logOut } from "@/redux/auth/auth-slice";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  function handleLogout() {
    dispatch(logOut());
    router.push("/");
  }
  return (
    <div
      className="
        w-64
        
        flex
        flex-col
        bg-bg-primary
        text-white
       z-40
       
       
       pt-20
        h-screen
        shadow-2xl
        sm:w-16
    "
    >
      <div
        className="
            flex
            flex-col
            justify-center
            items-center
            w-full
            
            h-full
            py-5
            gap-5
            "
      >
        {sideList.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className=" px-5
                        w-full
                        py-2
                        hover:bg-[#ffffff8b]
                        hover:text-secondary-primary
                        cursor-pointer"
          >
            <Link
              className="text-[20px] tracking-tight flex
                        flex-row
                        justify-start
                        items-center"
              href={item.link}
            >
              <div
                className="mr-5
                        text-[20px]"
              >
                {item.icon}
              </div>
              <div className="sm:hidden">{item.name}</div>
            </Link>
          </div>
        ))}
        <hr className="w-full border-[#ffffff8b]" />

        {sideList.slice(5, 9).map((item) => (
          <div
            key={item.id}
            className=" px-5
                        w-full
                        py-2
                        hover:bg-[#ffffff8b]
                        hover:text-secondary-primary
                        cursor-pointer"
          >
            {item.name === "Logout" ? (
              <button
                className="text-[20px] tracking-tight flex
                      flex-row
                      justify-start
                      items-center"
                onClick={handleLogout}
              >
                <div
                  className="mr-5
                      text-[20px]"
                >
                  {item.icon}
                </div>
                <div className="sm:hidden">{item.name}</div>
              </button>
            ) : (
              <Link
                className="text-[20px] tracking-tight flex
                        flex-row
                        justify-start
                        items-center"
                href={item.link}
              >
                <div
                  className="mr-5
                        text-[20px]"
                >
                  {item.icon}
                </div>
                <div className="sm:hidden">{item.name}</div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
