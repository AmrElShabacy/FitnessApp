"use client";

import React, { useEffect } from "react";
import TodayWorkouts from "@/components/dashboard/workouts/today-workouts";
import Workoutgraph from "@/components/dashboard/workouts/Workoutgraph";
import Lineworkout from "@/components/dashboard/workouts/Lineworkout";
import isAuth from "@/components/auth/isAutth";
import { useAppContext } from "@/context";

const page = () => {
  const { user, setUser } = useAppContext();
  console.log(user);
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
            flex-row
            justify-start
            items-start
            w-full
            py-5
            
            gap-20
            "
      >
        <TodayWorkouts />
        <Lineworkout />
        <Workoutgraph />
      </div>
    </section>
  );
};

export default isAuth(page);
