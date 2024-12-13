import { IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiStreamOn, CiSettings } from "react-icons/ci";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoHelpOutline, IoShareSocialOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
interface SideList {
  id: number;
  name: string;
  icon: JSX.Element;
  link: string;
}
const sideList: SideList[] = [
  {
    id: 1,
    name: "Home",
    icon: <IoHomeOutline />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Stream",
    icon: <CiStreamOn />,
    link: "/dashboard/stream",
  },
  {
    id: 3,
    name: "Plan",
    icon: <MdOutlineNoteAlt />,
    link: "/dashboard/plan",
  },
  {
    id: 4,
    name: "Timeline",
    icon: <IoShareSocialOutline />,
    link: "/dashboard/timeline",
  },

  {
    id: 5,
    name: "Articles",
    icon: <RiArticleLine />,
    link: "/dashboard/articles",
  },
  {
    id: 6,
    name: "FAQ",
    icon: <IoHelpOutline />,
    link: "/faq",
  },
  {
    id: 7,
    name: "Settings",
    icon: <CiSettings />,
    link: "/dashboard/settings",
  },
  {
    id: 8,
    name: "Support",
    icon: <BiHelpCircle />,
    link: "/support",
  },
  {
    id: 9,
    name: "Logout",
    icon: <IoIosLogOut />,
    link: "/",
  },
];
export default sideList;
