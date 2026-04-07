import React from 'react'

const InsightCard = ({ title, icon, iconBgColor, data }) => {
    return (
        <div className='w-84.25 h-22 bg-white border border-[#b6b6b6] rounded-2xl flex items-center'>
            <div className="w-full h-[60%] flex items-center pl-5">
                <div className={`rounded-full ${iconBgColor} w-13.5 h-13.5 flex justify-center items-center`}>
                    <img className='w-10 h-10' src={icon} alt="" />
                </div>
                <div className='w-[75%] ml-2 h-full flex flex-col justify-evenly justify-center'>
                    <h3 className="text-sm font-medium text-[#979797]">{title}</h3>
                    <h1 className='text-2xl font-semibold'>{data}</h1>
                </div>
            </div>
        </div>
    )
}

export default InsightCard