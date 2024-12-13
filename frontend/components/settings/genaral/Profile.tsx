import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        w-full

    "
    >
      <div
        className="
            flex
            flex-col
            items-start
          
            w-full
            gap-5
            "
      >
        <h1
          className="
            text-[40px]
            font-bold
            text-center
            text-secondary-primary
            "
        >
          Profile
        </h1>
      </div>
      <div
        className="
            flex
            flex-col
            items-center
            justify-center
            w-full
            gap-5
            "
      >
        <Image
          src="https://github.com/shadcn.png"
          width={100}
          height={100}
          alt="profile"
          className="rounded-full"
        />
        <span
          className="
                    text-base-primary
                    "
        >
          WALID HASSAN
        </span>
      </div>
      <div
        className="
                flex
                flex-row
                items-center
                justify-center
                w-full
                gap-5
                py-4
                "
      >
        <button
          className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            gap-5
                            h-10
                            px-4
                            text-base-primary
                            bg-secondary-primary
                            rounded-lg
                            "
        >
          upload image
        </button>
        <button
          className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            gap-5
                            h-10
                            px-4
                            text-base-primary
                            bg-secondary-primary
                            rounded-lg
                            "
        >
          remove image
        </button>
      </div>
    </div>
  );
};

export default Profile;
