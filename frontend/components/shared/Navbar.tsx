"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import navlist from "@/lib/constants/navList";
import { useAppSelector } from "@/redux/store";
const Navbar = () => {
  const user = useAppSelector((state) => state.auth.values);

  const router = useRouter();

  return (
    <nav
      className="
      flex
      justify-between
      items-center
      h-16
      
      text-secondary-primary
      relative
      shadow-sm
      font-mono
      px-20
      sm:hidden
      
    "
    >
      <div
        className="
      sm:hidden
      "
      >
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>
      </div>
      <div
        className="
        flex
        justify-between
        items-center
        text-base-primary
        "
      >
        <ul
          className="flex items-center
          font-bold
          text-[20px]
          gap-10
          cursor-pointer
        "
        >
          {navlist.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <motion.button
          className="
          text-base-primary
          px-10
          py-2
          rounded-lg
          font-bold
          bg-secondary-primary
          ml-10
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
      </div>
    </nav>
  );
};

export default Navbar;
