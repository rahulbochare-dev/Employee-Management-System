import React from 'react'

const LeaveChart = () => {
    return (
        <div className='w-128.5 h-103.5 border border-[#707070] rounded-[0.9375rem]'>
            <div className="w-full h-12 flex justify-between pl-6.25 pr-6.25 pt-3.5">
                <h2 className='text-[1.375rem] font-semibold'>Past Leaves</h2>
                <h2 className='text-[1.3rem] text-[#707070]'>Last 7 Days</h2>
            </div>
            <div className='w-full h-fit'>
                <h1 className="text-[2.8125rem] font-medium pl-6.25">39
                    <span className='text-[1.25rem] text-[#707070] font-normal'> Leaves</span>
                    <span className='font-light'> / </span>5.57
                    <span className='text-[1.25rem] text-[#707070] font-normal'> Avg/day</span>
                </h1>
            </div>
        </div>
    )
}

export default LeaveChart