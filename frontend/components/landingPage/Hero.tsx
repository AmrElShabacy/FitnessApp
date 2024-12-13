"use client";
import { FaPlay } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <motion.div
      className="
      flex
      justify-between
      items-center
      px-20
      max-w-7xl
      sm:px-5
      sm:pt-10
      sm:justify-center
      
      
      "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        className="
        flex
        flex-row
        justify-center
        items-start
        w-100%
        sm:flex-col
        sm:items-center
        
        "
      >
        <div
          className="
          flex
          flex-col
         mt-40
         mr-20
          text-base-primary
          sm:justify-start 
          sm:items-start
          sm:mt-0
          sm:mr-0
          
          
          "
        >
          <h1
            className="
            text-[40px]
            font-bold
            mb-5
            tracking-widest
            sm:text-[30px]
          
            
            "
          >
            <span
              className="
              text-secondary-primary
              "
            >
              Transform
            </span>{" "}
            Your
            <br />
            Fitness Into{" "}
            <span
              className="
              text-secondary-primary
              "
            >
              Shape
            </span>
          </h1>
          <p
            className="
            text-[20px]
            mb-5
            sm:text-[15px]
            
            "
          >
            we are here to help you to transform your body into shape and make
            you fit and healthy for your life
          </p>
          <div
            className="
            flex
            justify-start
            items-center
            gap-10
            sm:justify-center
            sm:items-center
            sm:flex-col
            sm:gap-5
            sm:w-[100%]
            "
          >
            <motion.button
              className="
              bg-secondary-primary
              text-base-primary
              px-10
              py-2
              rounded
              text-button
              sm:w-[100%]
              "
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                opacity: 0.8,
              }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="
              bg-secondary-primary
              text-base-primary
              px-10
              py-2
              flex
              justify-center
              items-center
              
              rounded
              text-button
              sm:w-[100%]
              gap-2
              "
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                opacity: 0.8,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPlay />
              Watch Video
            </motion.button>
          </div>
          <div></div>
        </div>
        <div
          className="
          flex
          justify-center
          items-center
          sm:hidden
          "
        >
          <Image
            src={"/assets/mainPhoto.png"}
            alt="mainPhoto"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
