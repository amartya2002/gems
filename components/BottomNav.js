import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";

function BottomNav() {
  return (
    <div className="  fixed  z-20  flex items-center  justify-center bottom-[2rem]   m-auto  left-0 right-0 ">
      <div className="  border absolute px-3 mb-2 bg-white shadow-lg rounded-2xl ">
        <div className="flex">
          <div className="flex-1 group">
            <a
              href="#"
              className="flex  justify-center items-center text-center mx-auto px-4 pt-2 w-full text-gray-600 group-hover:text-blue-500 border-b-2 border-transparent group-hover:border-blue-500"
            >
              <div className="flex flex-col   ">
                <i className="far fa-home text-2xl pt-1 mb-1 block"></i>
                <HomeIcon className="h-6  sm:h-6 mx-auto group-hover:text-blue-600 text-black" />
                <span className="block text-xs pb-1">Home</span>
              </div>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 group-hover:text-blue-500 border-b-2 border-transparent group-hover:border-blue-500"
            >
              <div className="flex flex-col   ">
                <i className="far fa-compass text-2xl pt-1 mb-1 block"></i>
                <BellIcon className="h-6 " />
                <span className="block text-xs pb-1">Explore</span>
              </div>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 group-hover:text-blue-500 border-b-2 border-transparent group-hover:border-blue-500"
            >
              <div className="flex flex-col   ">
                <i className="far fa-search text-2xl pt-1 mb-1 block"></i>
                <NewspaperIcon className="h-6" />
                <span className="block text-xs pb-1">Search</span>
              </div>
            </a>
          </div>
          <div className="flex-1 group">
            <a
              href="#"
              className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-600 group-hover:text-blue-500 border-b-2 border-transparent group-hover:border-blue-500"
            >
              <div className="flex flex-col   ">
                <i className="far fa-cog text-2xl pt-1 mb-1 block"></i>
                <UserIcon className="h-6" />
                <span className="block text-xs pb-1">Settings</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
