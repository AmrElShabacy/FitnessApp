"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface Props {
  id: number | string;
  title: string;
  author: string;
  dateOfPublish: string;
  subject: string;
  blog: string;
}
const Articlecard = ({
  id,
  title,
  author,
  dateOfPublish,
  subject,
  blog,
}: Props) => {
  const router = useRouter();
  return (
    <motion.div
      className="
        flex
        flex-col
        justify-center
        items-center
        w-[30%]
        h-[500px]
        min-w-[300px]
        py-5
        bg-base-primary
        shadow-2xl
        cursor-pointer
        "
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        router.push(`/article/${id}`);
      }}
    >
      <div>
        <Image
          src="/assets/articleCard.jpg"
          width={500}
          height={500}
          alt="logo"
        />
      </div>
      <div
        className="
        flex
        flex-col
        
        w-full
        px-5
        gap-1
        pb-5
        "
      >
        <h2
          className="
            text-[17px]
            font-bold
            "
        >
          {title.slice(0, 25).concat("...")}
        </h2>
        <p
          className="
            
            text-[15px]
            "
        >
          {blog.slice(0, 100).concat("...")}
        </p>
      </div>
      <div
        className="
        flex
        flex-row
        justify-between
        items-center
        w-full
        px-5
        gap-5
        "
      >
        <div
          className="
                flex
                flex-row
                justify-center
                items-center
                gap-2
                "
        >
          <div
            className="
                flex
                flex-row
                justify-center
                items-center
                
                rounded-full
                
                bg-secondary-primary
                w-[40px]
                h-[40px]
                overflow-hidden
                
                "
          />

          <h3
            className="
                text-[15px]
                
                "
          >
            {author} <br />
            {dateOfPublish}
          </h3>
        </div>
        <motion.button
          className="
            bg-secondary-primary
            
        text-white font-bold py-2 px-4 rounded-lg"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
            opacity: 0.8,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            router.push(`/article/${id}`);
          }}
        >
          Read More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Articlecard;
