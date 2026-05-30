import React, { useState } from 'react'

const TextInput = ({ label, placeholder, value, onChange, width }) => {
    const [inputValue, setInputValue] = useState("")

  return (
    <>
        <div className='w-56 h-16 flex flex-col justify-between'>
        <label className='text-[0.9375rem] font-medium truncate' htmlFor="input">{label}</label>
        <div className="w-full h-8.75 bg-[#F1F1F1] rounded-xl">
            <input className='w-full h-full text-[0.85rem] sm:text-[0.90rem] font-medium pl-3 bg-transparent outline-none truncate' placeholder={placeholder} type="text" name="input" id="input" value={value} onChange={onChange}/>
        </div>
        </div>
    </>
  )
}

export default TextInput