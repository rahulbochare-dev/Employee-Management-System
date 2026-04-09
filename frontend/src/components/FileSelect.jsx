import React, { useState } from 'react'

const FileSelect = ({ label, placeholder }) => {
    const [inputValue, setInputValue] = useState("")

    const handleFileChange = (e) => {
        if(e.target.files.length > 0){
            setInputValue(e.target.files[0].name)
        }
    }

  return (
    <div className="w-56.5 h-16 flex flex-col justify-between">
        <label className='text-[0.9375rem] font-medium' htmlFor="selectFile">{label}</label>
        <div className="w-56.5 h-8.75 bg-[#F1F1F1] rounded-xl flex items-center relative">
            <div className="w-full h-full bg-[#F1F1F1] rounded-xl flex items-center bg pl-3 pr-3 z-3 pointer-events-none">
                <h3 className={`text-[0.90rem] truncate ${inputValue? "text-black" : "text-[#787878]"} font-medium`}>{inputValue || "Choose Avatar File"}</h3>
            </div>
            <input className='absolute w-full h-6 text-[0.90rem] text font-medium pl-3'  placeholder='JD' type="file" name="selectFile" id="selectFile" onChange={handleFileChange}/>
        </div>
    </div>  
  )
}

export default FileSelect