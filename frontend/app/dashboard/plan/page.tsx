"use client";
import React from "react";
import { CiLock } from "react-icons/ci";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";
import { useFetch } from "@/lib/helpers/hooks/useFetch";
import { getDetailsLink } from "@/lib/constants/endpoints";
const page = () => {
  const user = useAppSelector((state) => state.auth.values);

  const { data, isLoading, error } = useFetch(
    `${getDetailsLink}/${user.username}`
  );
  if (isLoading) return <h1 className="mt-[120px] text-white">Loading....</h1>;
  if (error) return <h1 className="mt-[120px] text-white">{error}</h1>;

  if (!data)
    return (
      <section
        className="
    flex
    flex-col
    justify-center
    items-center
    h-screen
    py-20
    px-5
    w-full
   relative"
      >
        <div className="planBack "></div>
        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        w-full
        
        absolute
        top-[50%]
        left-[50%]
        
        transform
        -translate-x-1/2
        -translate-y-1/2
        text-center
    
        "
        >
          <CiLock
            className="text-[60px] text-white
        text-center
        "
          />
          <h1
            className="
                text-5xl
                font-bold
                text-white
                text-center
                "
          >
            Choose The Best Plan For You
          </h1>
          <p
            className="
                text-base-primary
                
                
                text-center
                "
          >
            you need to be a premium member to access this page
          </p>
          <motion.button
            className="
                text-base-primary
                bg-secondary-primary
                py-3
                px-10
                
              
          rounded-lg
          font-bold
    
                mt-5
                "
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
              opacity: 0.8,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href={`
            ${user?.username ? "/create-plan" : "/auth/signin"}
          `}
            >
              Get Your Plan
            </Link>
          </motion.button>
        </div>
      </section>
    );

  return <h1 className="mt-[120px] text-white">You have an active plan</h1>;
};

export default page;
