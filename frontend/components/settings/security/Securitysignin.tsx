import React from "react";

const Securitysignin = () => {
  return (
    <div
      className="
            w-full
            flex
            flex-col
            justify-center
            items-center
            gap-5
           
            
        "
    >
      <div
        className="
                flex
                flex-col
                justify-start
                items-start
                
                w-full
                gap-5
                sm:px-5
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
          Sign In Security
        </h1>
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
                            gap-1
                            "
          >
            <h2
              className="
                            text-base-primary

                            "
            >
              change password
            </h2>
            <span
              className="
                            text-[#ffffff8b]
                            text-[12px]
                            "
            >
              Last changed on <span>date</span>
            </span>
          </div>

          <button
            className="
                            text-base-primary
                            px-5
                            py-2
                            rounded-md
                            bg-secondary-primary
                            hover:bg-secondary-light
                            transition
                            duration-200
                            ease-in-out
                            "
          >
            change
          </button>
        </div>
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
                            gap-1
                            "
          >
            <h2
              className="
                            text-base-primary

                            "
            >
              change username
            </h2>
            <span
              className="
                            text-[#ffffff8b]
                            text-[12px]
                            "
            >
              Last changed on <span>date</span>
            </span>
          </div>

          <button
            className="
                            text-base-primary
                            px-5
                            py-2
                            rounded-md
                            bg-secondary-primary
                            hover:bg-secondary-light
                            transition
                            duration-200
                            ease-in-out
                            "
          >
            change
          </button>
        </div>
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
                            gap-1
                            "
          >
            <h2
              className="
                            text-base-primary

                            "
            >
              change Email
            </h2>
            <span
              className="
                            text-[#ffffff8b]
                            text-[12px]
                            "
            >
              Last changed on <span>date</span>
            </span>
          </div>

          <button
            className="
                            text-base-primary
                            px-5
                            py-2
                            rounded-md
                            bg-secondary-primary
                            hover:bg-secondary-light
                            transition
                            duration-200
                            ease-in-out
                            "
          >
            change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Securitysignin;
