import stepslist from "@/lib/constants/listSteps";
import React from "react";

const Steps = (props: { stepNumber: number; setStepNumber: Function }) => {
  return (
    <div
      className="
  flex flex-col items-center justify-start
  
  h-[100%]
  border-secondary-primary
  border-r-2
  pr-5
  py-10
 
  
  "
    >
      {stepslist.map((step, index) => (
        <div
          key={step.id}
          className="
        flex flex-row items-end justify-end
        gap-5
        w-[300px]
        text-right
        mb-10
        bg-bg-primary
        cursor-pointer
            "
        >
          <div
            className="
        text-base-primary
        
        
          "
          >
            <h1>{step.title}</h1>
            <p>{step.description}</p>
          </div>
          <div
            className={` w-[50px]
            h-[50px]
            rounded-full
            border-2 border-base-primary
            flex flex-row items-center justify-center
            hover:bg-secondary-primary
            hover:border-none
            ${
              index === props.stepNumber
                ? "bg-secondary-primary border-none"
                : ""
            }
          `}
            onClick={() => props.setStepNumber(index)}
          >
            {step.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
