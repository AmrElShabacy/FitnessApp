import React from "react";
import sideList from "@/lib/constants/sideList";
import Link from "next/link";
import { workoutsList } from "@/lib/constants/workouts";
import Workout from "./single-workout";
export default function TodayWorkouts() {
  return (
    <div
      className="bg-green-light text-white flex flex-col items-center w-full max-w-[300px] rounded-md py-6 px-2
      
    "
    >
      <h2 className="text-subheading text-center mt-0 mb-1">
        Today's Workouts
      </h2>
      {workoutsList.map((item, index) => {
        return <Workout workout={item} key={index} />;
      })}
    </div>
  );
}
