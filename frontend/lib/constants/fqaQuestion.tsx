import { CiMoneyCheck1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiWebcamThin } from "react-icons/pi";
import { FaFontAwesomeFlag } from "react-icons/fa";
interface Question {
  id: number;
  question: string;
  answer: string;
  icon: JSX.Element;
}

const question: Question[] = [
  {
    id: 1,
    question: "Is this platform free?",
    answer: "No it is paid. You can check our plans here",
    icon: <CiMoneyCheck1 />,
  },
  {
    id: 2,
    question: " I hate working out. Can I still join?",
    answer: "Yes. It comes with default styles that matches the other",
    icon: <GoPeople />,
  },
  {
    id: 3,
    question: "Do you provide online coaching services?",
    answer: "Yes. It comes with default styles that matches the other",
    icon: <PiWebcamThin />,
  },
  {
    id: 4,
    question: "Do I have to be in Egypt in order to use ShapeShift?",
    answer: "No. You can use ShapeShift from anywhere in the world",
    icon: <FaFontAwesomeFlag />,
  },
];

export default question;
