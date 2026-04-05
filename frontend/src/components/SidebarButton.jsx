import React from 'react'

const SidebarButton = ({name}) => {
  return (
    <div className='w-63.5 h-10 bg-black rounded-lg flex items-center justify-center mb-5'>
        <div className='w-56 h-6 flex gap-3'>
            <img className='w-5' src="src/assets/dashboard.svg" alt="" srcset="" />
            <h3 className='text-white font-medium'>{name}</h3>
        </div>
    </div>
  )
}

export default SidebarButton