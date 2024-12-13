import React from "react";
import tabs from "@/lib/constants/settingsTab";
import { useRouter } from "next/navigation";
const Settingstabs = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: any;
  activeTab: any;
}) => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-row
        justify-start
        items-center
        gap-10
       
        w-full
      "
      >
        {tabs.map((tab) => (
          <span
            className={`${
              activeTab === tab.name
                ? "border-b-2 border-secondary-primary"
                : ""
            }
            text-base-primary
            cursor-pointer
            hover:text-secondary-primary
            hover:border-b-2
            `}
            onClick={() => {
              setActiveTab(tab.name);
            }}
          >
            {tab.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Settingstabs;
