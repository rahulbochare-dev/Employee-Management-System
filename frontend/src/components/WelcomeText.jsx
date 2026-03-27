import React from 'react'

const WelcomeText = ({name}) => {
  return (
    <div className='w-fit h-fit'>
        <h2 className='text-[2.5rem] text-[#919191]'>Welcome, <span className='text-black'>{name || "User"}</span></h2>
    </div>
  )
}

export default WelcomeText