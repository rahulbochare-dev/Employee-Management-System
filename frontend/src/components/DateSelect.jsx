import React, { useState } from 'react'

const DateSelect = ({ label, placeholder, value, onChange }) => {
    const [inputValue, setInputValue] = useState("")

    const handleDateChange = (e) => {
        setInputValue(e.target.value)
    }
    
  return (
    <div className="w-56.5 h-16 flex flex-col justify-between">
        <label className='text-[0.9375rem] font-medium' htmlFor="selectFile">{label}</label>
        <div className="w-56.5 h-8.75 rounded-xl flex items-center relative bg-transparent">
            <div className="w-full h-full bg-[#F1F1F1] rounded-xl flex items-center justify-between bg pl-5 pr-3 z-3 pointer-events-none">
                <h3 className={`text-[0.90rem] truncate ${inputValue? "text-black" : "text-[#787878]"} font-medium`}>{inputValue || "Select Date"}</h3>
                <img className='w-5 pointer-events-none' src="/src/assets/calender.svg" alt="" srcset="" />
            </div>
            <input className='absolute w-full h-6 text-[0.90rem] text font-medium pl-3'  placeholder={placeholder} type="date" name="selectFile" id="selectFile" value={value} onInput={handleDateChange} onChange={onChange}/>
        </div>
    </div>  
  )
}

export default DateSelect