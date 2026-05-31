import React from 'react'

const WelcomeText = ({name}) => {
  return (
    <div className='w-fit h-fit'>
      <h2 className='text-[1.9rem] wrap-break-word sm:text-[1.8rem] lg:text-[2.5rem] text-[#9c9c9c]'>
        Welcome, <span className='text-black'>{name || "User"}</span>
      </h2>
    </div>
  )
}

export default WelcomeText