"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      className="
      flex
      justify-center
      items-center
      flex-col
      max-w-7xl
      min-w-full
      sm:py-5
      sm:px-5
      "
      id="about"
    >
      <div
        className="
        flex
        
        flex-row
        shadow-lg
        sm:shadow-xl
        
        "
      >
        <Image
          src="/assets/AboutUs.png"
          alt="About Us"
          width={450}
          height={450}
          className="rounded-lg
         ml-10
          sm:hidden
          "
        />
        <div
          className="
          flex
          flex-col
          
          text-base-primary
          px-40
          py-10
          w-100%
          sm:px-5
          sm:py-10
          
          "
        >
          <h2
            className="
            text-[40px]
            font-bold
            mb-5
           
            tracking-wide
            sm:text-[30px]
            
            "
          >
            Get Ready to{" "}
            <span
              className="
              text-secondary-primary
              "
            >
              Start
            </span>{" "}
            Your New{" "}
            <span
              className="
              text-secondary-primary
              "
            >
              Adventure
            </span>
          </h2>
          <p
            className="
            text-[20px]
            mb-5
            sm:text-[15px]
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quia, quae, quos voluptates magnam quod dolorum
            voluptatum unde quibusdam quas? Quisquam voluptate, quia, quae, quos
            voluptates magnam quod dolorum voluptatum unde quibusdam quas?
          </p>
          <motion.button
            className="
            bg-secondary-primary
            text-base-primary
            text-button
            px-5
            py-2
            flex
            justify-center
            items-center
            rounded-lg
            w-[200px]
            tracking-wide
            "
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
              opacity: 0.8,
            }}
            whileTap={{ scale: 0.9 }}
          >
            Free Trial Today
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
