import React from "react";
import { Switch } from "@/components/ui/switch";
const Twoauth = () => {
  return (
    <div
      className="
    flex
    flex-col
    justify-center
    items-center
    gap-5
    w-full

    "
    >
      <div
        className="
                flex
                flex-row
                justify-between
                items-center
                gap-5
                w-full
                "
      >
        <div
          className="
                    flex
                    flex-col
                    justify-start
                    items-start
                    gap-1
                    w-full
                    "
        >
          <h1
            className="
                text-[2rem]
                font-bold
                text-center
                text-secondary-primary
                "
          >
            Two Factor Authentication
          </h1>
          <p
            className="
                text-[#ffffff8b]
                "
          >
            Add an extra layer of security to your account
          </p>
        </div>
        <Switch
          className="
                bg-secondary-primary

            "
        />
      </div>
    </div>
  );
};

export default Twoauth;
