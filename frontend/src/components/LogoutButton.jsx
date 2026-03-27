import React from 'react'

const LogoutButton = () => {
  return (
    <div className='w-63.5 h-10 bg-black rounded-lg flex items-center justify-center mb-5 gap-2'>
        <img className='w-6.5' src="src/assets/logout.svg" alt="" srcset="" />
        <h3 className='text-white font-medium'>Log out</h3>
    </div>
  )
}

export default LogoutButton