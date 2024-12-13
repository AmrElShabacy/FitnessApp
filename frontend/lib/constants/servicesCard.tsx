interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

import { IoMdFitness } from "react-icons/io";

const servicesCard: ServiceCard[] = [
  {
    id: 1,
    title: "Weight Lifting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem?",
    icon: <IoMdFitness />,
  },
  {
    id: 2,
    title: "Streams Training",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem?",
    icon: <IoMdFitness />,
  },
  {
    id: 3,
    title: "Blog Articles",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem?",
    icon: <IoMdFitness />,
  },
  {
    id: 4,
    title: "Personalized Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem?",
    icon: <IoMdFitness />,
  },
];
export default servicesCard;
