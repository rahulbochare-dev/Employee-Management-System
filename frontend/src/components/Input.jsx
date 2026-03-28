import React, { useState } from 'react'

const Input = ({ type, placeholder }) => {
    const [inputValue, setinputValue] = useState("")

    return (
        <input
            type={type}
            placeholder={placeholder}
            id=""
            onChange={(e) => { setinputValue(e.target.value) }}
            className='border p-2 rounded-xl w-66 border-[#a6a6a6] focus:border-2'
        />
    )
}

export default Input