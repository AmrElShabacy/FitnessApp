"use client";

import React from "react";
import servicesCard from "@/lib/constants/servicesCard";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section
      className="
        flex
        justify-center
        items-center
        mt-[-5px]
        px-20
        max-w-7xl
        min-w-full
        mb-20
        sm:p-5
        sm:mt-0
        sm:mb-0 
        
        "
      id="services"
    >
      <motion.div
        className="
          flex
          flex-row
          justify-center
          items-center
          bg-white
          gap-10
          shadow-2x
         sm:flex-col
         sm:gap-5
        sm:bg-transparent
          w-100%
          z-10
          "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {
          // @ts-ignore
          servicesCard.map((service) => (
            <div
              key={service.id}
              className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    
                    
                    rounded-2xl
                    w-[30%]
                    h-[30%]
                    sm:w-[100%]
                    sm:h-[100%]
                    p-10
                    sm:p-5
                    mb-10
                    sm:bg-base-primary
                    sm:mb-0
                    "
            >
              <div
                className="
                    flex
                    justify-center
                    items-center
                    bg-secondary-primary
                    rounded-full
                    w-[50px]
                    h-[50px]
                    
                    
                    "
              >
                {service.icon}
              </div>
              <h1
                className="
                    text-secondary-primary
                    text-[20px]
                    font-bold
                    mt-5
                    "
              >
                {service.title}
              </h1>
              <p
                className="
                    text-secondary-primary
                    text-[15px]
                    mt-5
                    "
              >
                {service.description}
              </p>
            </div>
          ))
        }
      </motion.div>
    </section>
  );
};

export default Services;
