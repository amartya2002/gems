import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="fixed top-0 z-20 w-full flex items-center bg-white p-2 lg:px-5 backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-200">
      {/* left */}
      <div className="flex">
        <Image src="/assets/logo2.svg" width={60} height={60}></Image>

        <div className=" flex ml-2 items-center rounded-full md:rounded-xl bg-slate-100 p-2 h-11 ">
          <MagnifyingGlassIcon className="h-5 md:ml-1 lg:ml-2 text-slate-500" />
          <input
            className="inputCustom hidden md:inline-flex items-center  bg-transparent  placeholder-slate-500 flex-shrink"
            type="text"
            placeholder="Search Gems"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow ">
        <div className="flex space-x-3 sm:space-x-5 md:space-x-0 lg:mr-40  md:mr-7  ">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={BellIcon} />
          <HeaderIcon Icon={UserIcon} />
          <HeaderIcon Icon={NewspaperIcon} />
          {/* <HeaderIcon Icon={HomeIcon}/> */}
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profilepic */}
        <Image src="/assets/testImg2.png" width={40} height={40}></Image>
        <p className="hidden whitespace-nowrap font-semibold pr-3">
          Amartya Sinha
        </p>
      </div>
    </div>
  );
}

export default Header;
