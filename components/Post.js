import React from "react";
import Image from "next/image";
import {ChatBubbleBottomCenterTextIcon, ShareIcon, HandThumbUpIcon} from "@heroicons/react/24/outline"

function Post({ name, profilepic, image, date, text }) {
  return (
    <div className="flex flex-col max-w-md mx-auto sm:max-w-lg ">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-md border">
        <div className=" flex items-center space-x-2">
          <img
            className="rounded-full w-8 h-8"
            src={profilepic}
            width={40}
            height={40}
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-slate-400">{date}</p>
          </div>
        </div>

        <p className="pt-4 ">{text}</p>
        {image && (
          <div className=" object-cover relative h-56 md:h-96 my-3">
            <Image
              className="rounded"
              src={image}
              objectFit="cover"
              layout="fill"
            />
          </div>
        )}
        <div className="flex justify-between items-center bg-white text-slate-400 border-t -mb-3">
          <div className="inputIcon"> <HandThumbUpIcon className="h-4"/> <p className="text-xs sm:text-base">Like</p> </div>
          <div className="inputIcon"> <ChatBubbleBottomCenterTextIcon className="h-4"/> <p className="text-xs sm:text-base">Comment</p> </div>
          <div className="inputIcon"> <ShareIcon className="h-4"/> <p className="text-xs sm:text-base">Share</p> </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
