import React, { useEffect, useRef } from 'react';
import SidebarContent from './SidebarContent';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef, setSidebarOpen]);

  return (
    <aside
      
      className={`fixed inset-y-0 left-0 z-20 w-full mt-14 backdrop-filter backdrop-blur-lg bg-opacity-30 border-r border-gray-200 transform ${
        sidebarOpen ? 'translate-x-0 ease-in-out duration-75 ' : '-translate-x-full ease-in duration-150 '
      } overflow-y-auto`}
    >
      <div className='w-64  bg-white fixed inset-y-0 border  rounded-xl border-lightSilver' ref={sidebarRef}>
        <div> 
          <SidebarContent/>
          
          </div>
        
      </div>
    </aside>
  );
}

export default Sidebar;
