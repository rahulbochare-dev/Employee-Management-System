import React from 'react'

const DropdownLeaveType = ({  title, values, value, onChange, name }) => {
  return (
    <div className="w-[48%] sm:w-fit h-10 flex flex-col justify-between">
        <div className="w-full sm:w-36 h-8.75 flex bg-white border border-[#b6b6b6] rounded-xl pl-3 pr-3">
          <select className='w-full h-full text-[0.8125rem] sm:text-[0.875rem] font-medium appearance-none bg-transparent outline-none truncate' defaultValue="" name={name} id="select" value={value} onChange={onChange}>
            <option disabled hidden value="">{title}</option>
            {values.map((value, index) => {
              return <option key={index} value={value}>{value}</option>
            })}
          </select>
            <img className='w-4 sm:w-5 shrink-0' src="/src/assets/arrowDown.svg" alt="" srcset="" />
        </div>
    </div>
  )
}

export default DropdownLeaveType