import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import {
  UsersIcon,
  ComputerDesktopIcon,
  ClockIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

function Sidebar() {
  return (
    <div className="p-2 mt-16 max-w-[600px] xl:min-w-[300px]   ">
      {/* <SidebarRow src={sessionStorage.user.image} title={sessionStorage.user.name} /> */}
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
    </div>
  );
}

export default Sidebar;
