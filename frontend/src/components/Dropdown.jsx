import React from 'react'

const Dropdown = ({title, values, onChange, name}) => {
  return (
    <div className="w-37.5 h-9 border border-[#b6b6b6] rounded-xl pr-2 pl-2">
        <select className='w-full h-full' defaultValue="" name={name} id="" onChange={onChange}>
            <option disabled hidden value="">{title}</option>
            {values.map((value, index) => {
                return <option key={index} value={value}>{value}</option>
            })}
        </select>
    </div>
  )
}

export default Dropdown