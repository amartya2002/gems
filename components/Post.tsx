import React from "react";
import Image from "next/image";
import {
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";

function Post({ id, name, message, postImage, image, timestamp}) {
console.log(id)
  return (
    <div className="flex flex-col max-w-md mx-auto sm:max-w-lg   ">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-md border ">
        {/* <div className=" flex items-center  border  ">
          <img
            className="rounded-full w-8 h-8 "
            src={image}
            width={40}
            height={40}
          />

          <div>
            <p className="font-medium text-slate-800 tracking-wide ">{name}</p>
            <p className="text-xs text-slate-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>

          <div>
            <Dropdown />
          </div>
        </div> */}
        {/* //////////////////////// */}
        <div className=" flex justify-between ">
          <div className="flex  items-center  space-x-2 ">
            <Image
              className="rounded-full w-8 h-8 text-xs text-slate-300 tracking-tighter "
              src={image}
              width={40}
              height={40}
              alt="Author Image"
              // I want to display random anime/cartoon image if user image is not present there, instead of showing just plain text
            />
            

            <div>
              <p className="font-medium text-slate-800 tracking-wide ">
                {name}
              </p>
              <p className="text-xs  text-slate-400 tracking-tight">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="z-10">
            <Dropdown postId={id} />
          </div>
        </div>

        {/* /////////////////////////////////// */}
        <p className="pt-2 text-slate-650   text-[15px] antialiased font ">
          {message}
        </p>
        {postImage && (
          <div className=" z-0 rounded relative mb-2 h-0 overflow-hidden pt-[60%] ">
            <Image
              src={postImage}
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0 w-full h-full object-contain rounded-xl"
              alt="Post Image"
            />
          </div>
        )}

        <div className=" flex justify-between items-center bg-white text-slate-400 border-t -mb-4">
          <div className="inputIcon ">
            {" "}
            <HandThumbUpIcon className="h-4" />{" "}
            <p className="text-xs sm:text-base">Like</p>{" "}
          </div>
          <div className="inputIcon">
            {" "}
            <ChatBubbleBottomCenterTextIcon className="h-4" />{" "}
            <p className="text-xs sm:text-base">Comment</p>{" "}
          </div>
          <div className="inputIcon">
            {" "}
            <ShareIcon className="h-4" />{" "}
            <p className="text-xs sm:text-base">Share</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
