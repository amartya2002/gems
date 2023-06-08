import React, { useState } from "react";
import Image from "next/image";

function SidebarRow({ src, Icon, title, colour }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`flex items-center space-x-2 mb-1 p-4 rounded-xl sticky cursor-pointer text-sm  ${
        isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white transition duration-100 ease-in-out   "
      }`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {src && (
        <Image
          className="rounded-full "
          src={src}
          width={30}
          height={30}
          alt="Icons"
          layout="fixed"
        />
      )}

      {Icon && <Icon className={`h-7 w-6   ${isActive ? "text-white " : colour}`} />}

      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  );
}

export default SidebarRow;
