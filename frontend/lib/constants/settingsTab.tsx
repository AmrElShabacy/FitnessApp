import GeneralSettings from "@/components/settings/GeneralSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import SecuritySettings from "@/components/settings/SecuritySettings";
interface Tab {
  name: string;
  path: string;
  component: JSX.Element;
}

const tabs = [
  {
    id: 1,
    name: "General",
    path: "/dashboard/settings/general",
    component: <GeneralSettings />,
  },
  {
    id: 2,
    name: "Security",
    path: "/dashboard/settings/security",
    component: <SecuritySettings />,
  },
  {
    id: 3,
    name: "Notifications",
    path: "/dashboard/settings/notifications",
    component: <NotificationSettings />,
  },
];

export default tabs;
