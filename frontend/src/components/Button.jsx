import React from 'react'

const Button = ({ title, icon, marginY, width = "w-63.5", onClick, secondary = false, type }) => {

  return (
    <button
  type={type}
  onClick={onClick}
  className={`${width} h-10 rounded-lg flex items-center justify-center gap-3 ${marginY} cursor-pointer transition-all duration-200 ${
    secondary
      ? "bg-white border border-[#eaeaea] hover:bg-gray-200"
      : "bg-black hover:bg-gray-900"
  }`}>

  {secondary || <img className='w-5 sm:w-6 shrink-0' src={icon} alt=""/>}

  <h3 className={`text-sm sm:text-base font-medium truncate ${secondary ? "text-black" : "text-white"}`}>
    {title}
  </h3>

</button>
  )
}

export default Button