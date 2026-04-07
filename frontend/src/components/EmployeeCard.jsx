import React from 'react'
import Separator from './Seperator'

const EmployeeCard = () => {
    return (
        <div className='w-70 h-65 bg-white border border-[#b6b6b6] rounded-xl'>
            <div className="w-full h-17 flex justify-between items-center pl-5">
                <img className='w-11 h-11' src="/src/assets/businessman.png" alt="" />
                <div className="w-[78%] h-[75%] flex flex-col">
                    <h2 className="text-lg font-semibold">Eren Yeager</h2>
                    <h2 className="text-sm text-[#929292] font-medium">erenyeager45@gmail.com</h2>
                </div>
            </div>
            <Separator width='w-60' />
            <div className="w-full h-[45%] flex flex-col gap-2 pt-2">
                <div className='w-full h-[20%] flex pl-5 justify-between pr-10'>
                    <h3 className="text-sm text-[#929292] font-medium">Role:</h3>
                    <h3 className="text-sm text-black font-medium">UI/UX Designer</h3>
                </div>
                <div className='w-full h-[20%] flex pl-5 justify-between pr-10'>
                    <h3 className="text-sm text-[#929292] font-medium">Address:</h3>
                    <h3 className="text-sm text-black font-medium">New Delhi, India</h3>
                </div>
                <div className='w-full h-[20%] flex pl-5 justify-between pr-10'>
                    <h3 className="text-sm text-[#929292] font-medium">Birthday:</h3>
                    <h3 className="text-sm text-black font-medium ">Mar 06, 1988</h3>
                </div>
                <div className='w-full h-[20%] flex pl-5 justify-between pr-10'>
                    <h3 className="text-sm text-[#929292] font-medium">Workmode:</h3>
                    <h3 className="text-sm text-black font-medium">On - Site</h3>
                </div>
            </div>
            <div className="w-full h-[28%]  flex items-center">
                <div className="w-2/4 h-[70%] flex flex-col pl-5">
                    <h2 className="text-lg font-semibold">$10,32,398</h2>
                    <h3 className="text-sm text-[#929292] font-medium">Salary</h3>
                </div>
                <button className='w-[45%] h-[45%] text-white bg-blue-400 rounded-xl'>View Details</button>
            </div>
        </div>
    )
}

export default EmployeeCard