import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <div
      className="  border border-slate-150
         flex  items-center rounded-full bg-white p-2 h-11 hover:shadow-lg w-72 sm:ml-2  "
    >
      <div className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
        <MagnifyingGlassIcon className="h-5   text-white " />
      </div>

      <input
        className="outline-none ml-2 items-center  bg-transparent  placeholder-slate-500 flex-shrink overflow-auto"
        type="text"
        placeholder="Search Gems..."
      />
    </div>
  );
}

export default SearchBar;
