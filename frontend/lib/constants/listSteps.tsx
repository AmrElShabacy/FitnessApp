import { IoPersonOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosBody } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const stepslist = [
  {
    id: 1,
    title: "Your Body",
    description: "Info about your body",
    icon: <IoIosBody />,
  },
  {
    id: 2,
    title: "Goals",
    description: "Your planned objectives",
    icon: <GoGoal />,
  },
  {
    id: 3,
    title: "Food Preference",
    description: "The food you like to have",
    icon: <IoFastFoodOutline />,
  },
  /*
  {
    id: 4,
    title: "contact",
    description: "Enter your contact",
    icon: <CiPhone />,
  },
  {
    id: 5,
    title: "Your Name",
    description: "Enter your name",
    icon: <IoPersonOutline />,
  },
  */
];

export default stepslist;
