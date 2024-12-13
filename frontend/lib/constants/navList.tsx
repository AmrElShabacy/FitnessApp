interface Navlist {
  id: number;
  name: string;
  path: string;
}

const navlist: Navlist[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  { id: 2, name: "About", path: "#about" },
  {
    id: 3,
    name: "Contact",
    path: "#contact",
  },
  {
    id: 4,
    name: "Services",
    path: "#services",
  },
  {
    id: 5,
    name: "Membership",
    path: "#membership",
  },
];

export default navlist;
