import React from 'react'
import SidebarButton from "./SidebarButton";
import Seperator from '../components/Seperator.jsx'
import Profile from '../components/Profile.jsx'
import Button from './Button.jsx';
import { useUserStore } from '../store/userStore.js'
import { Form, Link, useNavigate } from "react-router-dom";
import toast , { Toaster } from 'react-hot-toast';

const Sidebar = () => {
  const { user, logout } = useUserStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await logout()
    if(response.success){
      navigate("/login")
      toast.success(response.message)
    }
  }

  return (
    <div className='p-6 w-78 h-230 bg-white border border-[#b6b6b6] rounded-[0.9375rem] flex flex-col justify-between'>
      <Toaster position='bottom-center'/>
      <div>
        <div className='w-full h-10 mb-6 bg-gray-200'></div>
        <Seperator width={'w-66'} />
        <h3 className='text-[0.80rem] text-[#707070] font-medium mb-3 mt-5'>Manage</h3>
        <SidebarButton
          name={"Dashboard"}
          to={"/admin/dashboard"}
          iconDark={"/src/assets/dashboard-dark.svg"}
          iconLight={"/src/assets/dashboard-light.svg"}/>
        <SidebarButton
          name={"Employees"}
          to={"/admin/employees"}
          iconDark={"/src/assets/employee-dark.svg"}
          iconLight={"/src/assets/employee-light.svg"}/>
        <SidebarButton
          name={"Leaves"}
          to={"/admin/leaves"}
          iconDark={"/src/assets/leave-dark.svg"}
          iconLight={"/src/assets/leave-light.svg"}/>
      </div>
      <div className="w-full h-30 flex flex-col">
        <Seperator/>
        <Profile
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
        <Button onClick={handleLogout} marginY={"mt-5"} title={"Log Out"} icon={"/src/assets/logout.svg"}/>
      </div>
    </div>
  )
}

export default Sidebar