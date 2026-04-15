import React from 'react'

const Button = ({ title, icon, marginY, width = "w-63.5", onClick, secondary = false }) => {

  return (
    <button
      onClick={onClick}
      className={`${secondary ? `${width} h-10 rounded-lg flex items-center justify-center bg-white border border-[#b6b6b6] ${marginY} cursor-pointer transition-all duration-200 hover:bg-gray-200` : `${width} h-10 rounded-lg flex items-center justify-center gap-3 ${marginY} cursor-pointer transition-all duration-200 bg-black hover:bg-gray-900`}`}>
      {secondary || <img className='w-6' src={icon} alt=""/>}
      <h3 className={`font-medium ${secondary ? "text-black" : "text-white"} `}>{title}</h3>
    </button>
  )
}

export default Button