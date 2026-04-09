import React from 'react'

const DropdownAddEmployee = ({  title, label, values }) => {
  return (
    <div className="w-56.5 h-16 flex flex-col justify-between">
        <label className='text-[0.9375rem] font-medium' htmlFor="select">{label}</label>
        <div className="w-56.5 h-8.75 flex bg-white border border-[#b6b6b6] rounded-xl pl-3 pr-3">
          <select className='w-full h-full text-[0.8125rem] font-medium appearance-none' defaultValue="" name="select" id="select">
            <option disabled hidden value="">{title}</option>
            {values.map((value, index) => {
              return <option key={index} value={value}>{value}</option>
            })}
          </select>
            <img className='w-5' src="/src/assets/arrowDown.svg" alt="" srcset="" />
        </div>
    </div>
  )
}

export default DropdownAddEmployee