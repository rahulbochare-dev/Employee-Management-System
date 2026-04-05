import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Button = ({name, icon}) => {

  return (
    <div className={"w-63.5 h-10 rounded-lg flex items-center justify-center gap-3 mt-5 cursor-pointer transition-all duration-200 bg-black"}>
        
            <img className='w-5' src={icon} alt="" srcset="" />
            <h3 className={"font-medium text-white"}>{name}</h3>
        
    </div>
  )
}

export default Button