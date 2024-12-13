"use client";
import isAuth from "@/components/auth/isAutth";
import Steps from "@/components/create-plan/Steps";
import Stepsform from "@/components/create-plan/Stepsform";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [stepNumber, setStepNumber] = useState(0);

  function incrementStep() {
    setStepNumber((prevState) => prevState + 1);
  }
  return (
    <section
      className="flex flex-col items-center justify-center h-screen
  bg-bg-primary
  px-10
  py-10
    "
    >
      <div
        className="flex flex-col items-start justify-start
      w-full
      
      px-20
      text-base-primary
      sm:py-10
      sm:px-5
      bg-primary-light
      shadow-2xl
      h-[100vh]
          "
      >
        <div
          className="
        flex flex-col items-center justify-center
        w-full
        py-5
        
          "
        >
          <h1
            className="
          text-[40px] font-bold text-center
            "
          >
            <span
              className="
            text-secondary-primary
              "
            >
              Start
            </span>{" "}
            A New{" "}
            <span
              className="
            text-secondary-primary
              "
            >
              Adventure
            </span>{" "}
            With{" "}
            <span
              className="
            text-secondary-primary
              "
            >
              US
            </span>
          </h1>
        </div>
        <div
          className="
        flex flex-row items-center justify-center
        w-full
      gap-20
      
      h-[100%]
      border-secondary-primary
      border-t-2
        "
        >
          {/* steps form */}
          <Steps stepNumber={stepNumber} setStepNumber={setStepNumber} />
          <Stepsform stepNumber={stepNumber} incrementStep={incrementStep} />
        </div>
      </div>
    </section>
  );
};

export default isAuth(page);
