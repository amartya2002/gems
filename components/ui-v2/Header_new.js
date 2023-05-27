import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Logo from "../../public/assets/new_logo.svg";
import DropdownAvatar from "./DropdownMenu";
import Sidebar_new from "./Sidebar_new";

function Header_new() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <header className="fixed border top-0 z-20 w-full bg-white bg-opacity-50 backdrop-filter backdrop-blur text-silver">
      <nav className=" px-5 sm:px-8 lg:px-9 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button aria-label="Open Menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? (
            <XMarkIcon className="h-6 mr-2 sm:hidden hover:text-blue-500 active:scale-110 duration-200 " />
             
            ) : (
              <Bars3Icon className="h-6 mr-2 sm:hidden active:scale-110 duration-200 hover:text-blue-500" />
            )}
          </button>

          <Link href="/">
            <Image className=" " src={Logo} alt="logo" width={40} height={40} />
          </Link>
        </div>

        <form>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search..."
            className="border rounded-lg px-3 py-1 hover:shadow-sm"
          />
        </form>

        <div className="flex items-center space-x-2">
          <button aria-label="Search">
            <MagnifyingGlassIcon className="h-6 hover:text-blue-500 active:scale-110 duration-200 " />
          </button>
          <DropdownAvatar />
        </div>
      </nav>

    </header>
    <Sidebar_new sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

    </>
  );
}

export default Header_new;
