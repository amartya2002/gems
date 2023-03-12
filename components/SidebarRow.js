import React from "react";
import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-slate-200 rounded-xl cursor-pointer sticky  ">
      {src && (
        <Image
          className="rounded-full "
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}

      {Icon && <Icon className="h-7 w-6  text-black" />}

      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  );
}

export default SidebarRow;
