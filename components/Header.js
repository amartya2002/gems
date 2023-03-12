import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import HeaderIcon from "./HeaderIcon";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="fixed top-0 z-20 w-full flex items-center bg-white p-2 lg:px-5 backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-200">
      {/* left */}
      <div className="flex ">
        <Image src="/assets/logo2.svg" width={60} height={60}></Image>

        <SearchBar/>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow bord">
        <div className=" space-x-3 sm:space-x-5 md:space-x-0 lg:mr-[355px]  md:mr-16  hidden md:flex  ">
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
        <Image
          className="absolute w-10 h-10 rounded-full  "
          src="/assets/profilepic3.jpg"
          height={40}
          width={40}
        />
        <p className="hidden whitespace-nowrap  pr-3 ">
          Amartya Sinha
        </p>
      </div>
    </div>
  );
}

export default Header;
