import { FaRunning } from "react-icons/fa";
import { Workout } from "../models/workout";
import { IoMdBicycle } from "react-icons/io";
import { IoBarbellSharp } from "react-icons/io5";
import { GiJumpingRope } from "react-icons/gi";

export const workoutsList: Workout[] = [
  {
    name: "Running",
    icon: <FaRunning />,
    duration: 34,
  },
  {
    name: "Cycling",
    icon: <IoMdBicycle />,
    duration: 20,
  },
  {
    name: "Squats",
    icon: <IoBarbellSharp />,
    reps: 40,
  },
  {
    name: "Rope Jumps",
    icon: <GiJumpingRope />,
    reps: 60,
  },
];
