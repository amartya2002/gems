import React from 'react'

function HeaderIcon({Icon}) {
  return (
    <div className='flex items-center cursor-pointer md:px-4  sm:h-6  rounded-sm active:border-b-2 active:border-blue-600 group '>
        <Icon className="h-6 text-center sm:h-6 mx-auto group-hover:text-blue-600 text-black " />
        </div>
  )
}

export default HeaderIcon;