import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

const DateTime = () => {
    const date = dayjs().format(`ddd MMM DD YYYY hh:mm:ss A`)
    
  return (
    <div className='w-fit h-fit'>
        <h2 className='text-[2.5rem] text-black'>{date}</h2>
    </div>
  )
}

export default DateTime