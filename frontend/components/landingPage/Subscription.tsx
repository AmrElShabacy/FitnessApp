"use client";

import React from "react";
import subscriptionCard from "@/lib/constants/subscriptionCard";
import { motion } from "framer-motion";
const Subscription = () => {
  return (
    <section
      className="
        flex
        justify-center
        items-center
        flex-col
        px-20
        min-h-screen
        sm:px-5
        py-10
        "
      id="membership"
    >
      <div
        className="
        flex
        flex-col
        justify-center
        items-center
        w-full
        gap-5
        "
      >
        <h1
          className="
            
            text-heading
            text-base-primary
            text-center
            tracking-wide
            "
        >
          Choose The Best Plan For You
        </h1>
        <p
          className="
                text-base-primary
                
                text-caption
                
                text-center
                "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem?
        </p>
        <div
          className="
                flex
                flex-row
                justify-center
                items-center
                border-2
                border-secondary-primary
                rounded-full
                "
        >
          <button
            className="
                  bg-secondary-primary
                  text-base-primary
                  text-button
                  px-5
                  py-2
                  flex
                  justify-center
                  items-center
                  rounded-l-full
                    w-[100px]
                  "
          >
            Monthly
          </button>
          <button
            className="
                 
                  text-base-primary
                  text-button
                  px-5
                  py-2
                  flex
                  justify-center
                  items-center
                  rounded-lg
                  w-[100px]
                  "
          >
            Yearly
          </button>
        </div>
        <div
          className="
            flex
            flex-row
            justify-center
            items-center
            gap-10
            sm:flex-col
            sm:gap-5
            sm:w-[100%]
            "
        >
          {subscriptionCard.map((card) => (
            <motion.div
              key={card.id}
              className="
                flex
                flex-col
                justify-start
                items-center
                bg-primary-light
                gap-10
                shadow-2xl
                text-base-primary
                rounded-2xl
                w-[300px]
                h-[540px]
                p-10
                sm:p-5
                sm:w-[100%]
                sm:h-[100%]
                cursor-pointer
                "
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <h1
                className="
                  text-base-primary
                  text-heading
                  sm:text-[20px]
                  "
              >
                {card.title}
              </h1>
              <h1
                className="
                  text-secondary-primary
                  text-[50px]
                  font-bold
                  sm:text-[40px]

                  "
              >
                {card.price}
              </h1>
              <div
                className="flex
                flex-col
                justify-between
                items-center
                h-full"
              >
                <ul
                  className={`
                flex
                flex-col
                gap-2
                sm:gap-1
                sm:text-[15px]
                sublist
                `}
                >
                  {card.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
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
                  rounded-full
                  w-[80%]
                  max-w-[160px]
                  sm:mt-2
                  "
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                    opacity: 0.8,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {card.btn}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
