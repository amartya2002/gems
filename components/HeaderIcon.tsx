import React from 'react'

function HeaderIcon({Icon}) {
  return (
    <div className='flex items-center cursor-pointer md:px-4  sm:h-6  rounded-sm  group transition duration-75 hover:scale-110 focus:scale-125  ease-in'>
        <Icon className="h-6 text-center sm:h-6 mx-auto group-hover:text-blue-600 text-black " />
        </div>
  )
}

export default HeaderIcon;