import React, { ReactElement } from "react";
import { Workout as WorkoutType } from "@/lib/models/workout";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";

export default function Workout(props: { workout: WorkoutType }) {
  const { workout } = props;
  return (
    <div className="bg-primary-light text-white flex flex-row items-center justify-between w-[90%] rounded-md py-2 px-3 my-2 cursor-pointer flex-wrap">
      <div className="flex flex-row items-center">
        {workout.icon}
        <h3 className="text-body mt-0 ml-2">{workout.name}</h3>
      </div>
      <div className="flex flex-row items-center opacity-60">
        {workout.duration ? (
          <>
            <FaRegClock />
            <span className="text-body ml-1">{workout.duration} mins</span>
          </>
        ) : (
          <>
            <AiOutlineNumber />
            <span className="text-body ml-1">{workout.reps} reps</span>
          </>
        )}
      </div>
    </div>
  );
}
