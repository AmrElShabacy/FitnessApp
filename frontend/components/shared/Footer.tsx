import footList from "@/lib/constants/footList";
import navlist from "@/lib/constants/navList";
import Link from "next/link";
import React from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer
      className="
        flex
        justify-around
        items-center
        flex-col
        px-20
        py-10
        w-full
        
        sm:px-5
        bg-primary-light
       
        
        "
    >
      <div
        className="
          flex
          flex-row
          justify-center
          items-center
          gap-10
          w-full
          
          "
      >
        <div
          className="
            flex
            flex-col
            justify-start
            items-start
            gap-5
            
            
            "
        >
          <span
            className="
              text-[20px]
              font-bold
              text-center
              text-secondary-primary
              "
          >
            Website
          </span>
          {navlist.map((list) => (
            <Link
              href={list.path}
              className="
            text-base-primary
            "
              key={list.id}
            >
              {list.name}
            </Link>
          ))}
        </div>
        <div
          className="
            flex
            flex-col
            justify-center
            items-center
            gap-5
            
            "
        >
          {footList.map((list) => (
            <Link
              href={list.path}
              className="
            text-base-primary
            "
              key={list.id}
            >
              {list.name}
            </Link>
          ))}
        </div>
        <div
          className="
            flex
            flex-col
            justify-start
            items-start
            gap-5
             w-[50%]
            "
        >
          <div
            className="
              flex
              flex-col
              justify-start
              items-start
              gap-2
              w-full
              
              "
          >
            <h1
              className="
              text-[20px]
              font-bold
              text-center
              text-secondary-primary
              "
            >
              Join our newsletter
            </h1>
            <span
              className="
              text-base-primary
              "
            >
              Get exclusive news, features, and updates from the Shoppies
              community delivered right to your inbox. Subscribe now. It's free.
            </span>
          </div>
          <Input placeholder="Email" className="max-w-[300px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
