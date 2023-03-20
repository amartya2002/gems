import React, { useRef } from "react";
import Image from "next/image";
import {
  VideoCameraIcon,
  EllipsisHorizontalCircleIcon,
  CameraIcon,
} from "@heroicons/react/24/solid";


function InputBox() {
  
  const sendPost = (e) => {
    e.preventDefault();

 
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-50 text-grey-500 font-medium mt-6  max-w-sm mx-auto">
      <div className="flex space-x-4 p-4 items-center ">
        <Image
          className=" w-9 h-9 rounded-full -ml-1 "
          src="/assets/profilepic3.jpg"
          height={40}
          width={40}
        />
        <form className="flex flex-1">
          <input
            className="rounded-2xl h-12 bg-slate-100 flex-grow px-4  focus:outline-none "
            type="text"
     
            placeholder="Whats on your mind"
          />
          <button hidden type="submit" onClick={sendPost}></button>
        </form>
      </div>
      <div className="flex justify-evenly p-1 border-t">
        <div className="inputIcon">
          <CameraIcon className="h-6 text-black" />
          <p className="text-xs sm:text-sm xl:text-base">Photo</p>
        </div>
        <div className="inputIcon">
          <EllipsisHorizontalCircleIcon
            className="h-6 text-black
          
          "
          />
          <p className="text-xs sm:text-sm xl:text-base">More</p>
        </div>
        <div className="inputIcon">
          <VideoCameraIcon className="h-6 text-black" />
          <p className="text-xs sm:text-sm xl:text-base">Video</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
