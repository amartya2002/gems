import React from 'react'

function HeaderIcon({Icon}) {
  return (
    <div className='flex items-center cursor-pointer md:px-4 md: sm:h-4  rounded-sm active:border-b-2 active:border-red-300 group '>
        <Icon className="h-7 text-center sm:h-7 mx-auto group-hover:text-red-300 text-slate-500 " />
        </div>
  )
}

export default HeaderIcon;