import React from 'react'

const DropdownAddEmployee = ({  title, label, values, value, onChange }) => {
  return (
    <div className="w-full sm:w-56.5 sm:max-w-56.5 h-16 flex flex-col justify-between">
        <label className='text-[0.9375rem] font-medium truncate' htmlFor="select">{label}</label>

        <div className="w-full h-8.75 flex bg-white border border-[#b6b6b6] rounded-xl pl-3 pr-3 items-center">
          
          <select
            className='w-full h-full text-[0.8125rem] sm:text-[0.875rem] font-medium appearance-none bg-transparent outline-none truncate'
            defaultValue=""
            name="select"
            id="select"
            value={value}
            onChange={onChange}
          >
            <option disabled hidden value="">{title}</option>

            {values.map((value, index) => {
              return <option key={index} value={value}>{value}</option>
            })}

          </select>

          <img
            className='w-4 sm:w-5 shrink-0'
            src="/src/assets/arrowDown.svg"
            alt=""
            srcset=""
          />

        </div>
    </div>
  )
}

export default DropdownAddEmployee