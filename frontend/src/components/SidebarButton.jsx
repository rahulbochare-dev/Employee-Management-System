import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const SidebarButton = ({name, iconDark, iconLight, to}) => {
  const navigate = useNavigate()
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <div onClick={() => navigate(to)}
    className={`w-63.5 h-10 rounded-lg flex items-center justify-center mb-5 cursor-pointer transition-all duration-200 
      ${isActive ? 'bg-black' : 'hover:bg-gray-100'}`}>
        <div className='w-56 h-6 flex gap-3'>
            <img className='w-5' src={isActive? iconLight : iconDark} alt=""/>
            <h3 className={`font-medium ${isActive? "text-white" : "text-black"}`}>{name}</h3>
        </div>
    </div>
  )
}

export default SidebarButton