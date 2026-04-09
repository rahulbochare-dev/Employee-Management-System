import React, { useState } from 'react'

const TextInput = ({ label, placeholder }) => {
    const [inputValue, setInputValue] = useState("")

  return (
    <>
        <div className='w-56.5 h-16 flex flex-col justify-between'>
        <label className='text-[0.9375rem] font-medium' htmlFor="input">{label}</label>
        <div className="w-56.5 h-8.75 bg-[#F1F1F1] rounded-xl">
            <input className='w-full h-full text-[0.90rem] font-medium pl-3' placeholder={placeholder} type="text" name="input" id="input" onChange={(e)=>{setInputValue(e.target.value)}}/>
        </div>
        </div>
    </>
  )
}

export default TextInput