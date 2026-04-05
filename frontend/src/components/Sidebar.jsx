import React from 'react'
import SidebarButton from "./SidebarButton";
import Seperator from '../components/Seperator.jsx'

const Sidebar = () => {
  return (
    <div className='p-6 w-78 h-230 border border-[#b6b6b6] rounded-[0.9375rem]'>
        <div className='w-[12.93rem] h-10 mb-6 bg-black'></div>
        <Seperator width={'w-66'}/>
        <h3 className='text-[0.75rem] text-[#707070] font-medium mb-3'>Manage</h3>
        <SidebarButton name={"Dashboard"} to={"/admin/dashboard"}/>
        <SidebarButton name={"Employees"} to={"/admin/employees"}/>
        <SidebarButton name={"Leaves"} to={"/admin/leaves"}/>
    </div>
  )
}

export default Sidebar