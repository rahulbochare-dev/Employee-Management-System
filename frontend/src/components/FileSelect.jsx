import React, { useState } from 'react'

const FileSelect = ({ label, placeholder, value, onChange }) => {
    const [inputValue, setInputValue] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            setInputValue(file.name)
            onChange(file)
        }
    }

  return (
    <div className='w-56 h-16 flex flex-col justify-between'>
        <label className='text-[0.9375rem] font-medium truncate' htmlFor="selectFile">{label}</label>

        <div className="w-full h-8.75 bg-[#F1F1F1] rounded-xl flex items-center relative">

            <div className="w-full h-full bg-[#F1F1F1] rounded-xl flex items-center pl-3 pr-3 z-3 pointer-events-none">
                <h3 className={`text-[0.85rem] sm:text-[0.90rem] truncate ${inputValue? "text-black" : "text-[#787878]"} font-medium`}>
                    {inputValue || "Choose Avatar File"}
                </h3>
            </div>

            <input
                className='absolute w-full h-6 text-[0.85rem] sm:text-[0.90rem] font-medium pl-3 opacity-0 cursor-pointer'
                placeholder={placeholder}
                type="file"
                name="avatar"
                id="selectFile"
                onInput={handleFileChange}
            />

        </div>
    </div>
  )
}

export default FileSelect