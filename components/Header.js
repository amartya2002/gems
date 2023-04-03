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
import Dropdown from "./DropdownAvatar";
import DropdownAvatar from "./DropdownAvatar";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 z-20 w-full flex items-center bg-white p-2 lg:px-5 backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-200">
      {/* left */}
      <div className="flex ">
        <Link href="/">
          <Image
            className="mt-2"
            src="/assets/logo2.svg"
            width={60}
            height={60}
            alt="Company Logo"
          />
        </Link>

        <SearchBar />
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow bord">
        <div className=" space-x-3 sm:space-x-5 md:space-x-0 lg:mr-[355px]  md:mr-16  hidden md:flex  ">
          <Link href="/">
            <HeaderIcon Icon={HomeIcon} />{" "}
          </Link>
          <Link href="/">
            <HeaderIcon Icon={BellIcon} />{" "}
          </Link>
          <Link href="/">
            <HeaderIcon Icon={UserIcon} />{" "}
          </Link>
          <Link href="/">
            <HeaderIcon Icon={NewspaperIcon} />{" "}
          </Link>

          {/* <HeaderIcon Icon={HomeIcon}/> */}
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end  ">
        <DropdownAvatar />
      


        {/* profilepic */}
        {/* <Image
          className="absolute w-10 h-10 rounded-full  "
          src="/assets/profilepic3.jpg"
          height={40}
          width={40}
        /> */}
      </div>
    </div>
  );
}

export default Header;
