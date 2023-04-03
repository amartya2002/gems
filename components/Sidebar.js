import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
  ComputerDesktopIcon,
  ClockIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";


function Sidebar() {
  return (
    <div className="hidden sm:block p-2 mt-16 max-w-[600px] xl:min-w-[300px] text-slate-700 bg-white  ">
      {/* <SidebarRow src={sessionStorage.user.image} title={sessionStorage.user.name} /> */}
      <SidebarRow Icon={UsersIcon} title="Friends" colour="text-red-400" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" colour="text-green-400" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" colour="text-blue-400"  />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" colour="text-orange-400" />
      <SidebarRow Icon={CalendarIcon} title="Events" colour="text-violet-500" />
     
    </div>
  );
}

export default Sidebar;
