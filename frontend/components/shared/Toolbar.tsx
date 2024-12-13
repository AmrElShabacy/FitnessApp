"use client";
import navlist from "@/lib/constants/navList";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const Toolbar = () => {
  const [show, setShow] = React.useState(false);
  const user = useAppSelector((state) => state.auth.values);

  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="
            flex
            flex-col
            justify-center
            items-center
            w-full
            backdrop-filter
            backdrop-blur-md
            fixed
            py-5
           
           
            gap-5
            z-50
            px-5
            "
            initial={{
              bottom: -100,
            }}
            animate={{
              bottom: 50,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            exit={{
              bottom: -100,
              transition: {
                duration: 0.5,
                ease: "linear",
              },
            }}
          >
            <motion.button
              className="
          text-base-primary
          px-10
          py-2
          rounded-lg
          font-bold
          bg-secondary-primary
          w-full
          "
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                opacity: 0.8,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </motion.button>
            <motion.button
              className="
          text-base-primary
          px-10
          py-2
          rounded-lg
          font-bold
          bg-secondary-primary
          w-full
          "
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                opacity: 0.8,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                user?.username
                  ? router.push("/dashboard")
                  : router.push("auth/signup");
              }}
            >
              {user?.username ? "Dashboard" : "Sign Up"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="
        
        justify-center
        items-center
        
        w-full
            h-16
            
            shadow-md
            backdrop-filter
            backdrop-blur-2xl

            
            px-5
            hidden
            sm:flex
            
            bottom-[-1%]
            left-0
            fixed
flex-wrap
            z-50
        
        text-base-primary
        "
      >
        <ul
          className="flex items-center
            justify-between
          font-bold
          text-[.72rem]
          gap-4
          
          cursor-pointer
        "
        >
          {navlist.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
          <li>
            <HiOutlineDotsHorizontal
              className="text-[25px] text-white"
              onClick={() => {
                setShow(true);
              }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Toolbar;
