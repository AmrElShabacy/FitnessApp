"use client";

import React, { useState } from "react";
import Settingstabs from "./settings/Settingstabs";
import GeneralSettings from "./settings/GeneralSettings";
import SecuritySettings from "./settings/SecuritySettings";
import NotificationSettings from "./settings/NotificationSettings";

const Settingspage = () => {
  const [activeTab, setActiveTab] = useState("General");
  return (
    <section
      className="
flex
flex-col

h-screen
py-20
px-5


w-full
overflow-y-auto

"
    >
      <div
        className="
    flex
    flex-col
    justify-center
    items-center
    w-full
    py-5
    
    gap-5
    "
      >
        <Settingstabs setActiveTab={setActiveTab} activeTab={activeTab} />
        {
          {
            General: <GeneralSettings />,
            Security: <SecuritySettings />,
            Notifications: <NotificationSettings />,
          }[activeTab]
        }
      </div>
    </section>
  );
};

export default Settingspage;
