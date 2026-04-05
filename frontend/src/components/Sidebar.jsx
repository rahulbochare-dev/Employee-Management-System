import React from 'react'
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className='p-6 w-78 h-230 border border-[#b6b6b6] rounded-[0.9375rem]'>
        <div className='w-[12.93rem] h-10 mb-6 bg-black'></div>
        <h3 className='text-[0.75rem] text-[#707070] font-medium mb-3'>Manage</h3>
        <SidebarButton name={"Dashboard"}/>
        <SidebarButton name={"Employees"}/>
        <SidebarButton name={"Leaves"}/>
    </div>
  )
}

export default Sidebar