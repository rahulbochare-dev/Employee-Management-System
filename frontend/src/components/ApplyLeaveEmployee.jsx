import React, { useState, useEffect } from 'react'
import Separator from './Seperator.jsx'
import DateSelectApplyLeave from './DateSelectApplyLeave.jsx'
import DropdownAddEmployee from './DropdownAddEmployee.jsx'
import DropdownLeaveType from './DropdownLeaveType.jsx'
import { useAdminLeaveStore } from '../store/adminLeaveStore.js'
import toast from 'react-hot-toast'

const LeaveDetails = ({ leaveDetails, cb }) => {
    const [leaveData, setLeaveData] = useState({
        leaveType: "",
        from: "",
        to: "",
        description: ""
    })
    const handleChangeLeaveData = async (e) => {
        const updatedData = {
            ...leaveData,
            [e.target.name]: e.target.value
        }
        setLeaveData(updatedData)

        try {
            const response = await 
        } catch (error) {
            
        }
    }
    
    return (
        <div className="w-304.5 h-155.5 bg-white rounded-2xl px-8.5 pt-6 overflow-hidden transition-all">
            <h1 className="text-[1.75rem]  font-medium text-black leading-none">
                Leave Application
            </h1>
            <Separator marginY={"my-5"} width={"w-310"} />
            <div className="w-full h-127.5 flex">
                <div className="w-107.5 h-full pr-8 border-r border-[#dddddd]">
                    <h2 className="text-[1.5rem] font-medium text-black">
                        Employee
                    </h2>
                    <div className="w-full h-28 flex items-center gap-5">
                        <img className="size-17 rounded-full object-cover shrink-0" src="/src/assets/businessman.png" alt="" />
                        <div className="flex flex-col">
                            <h2 className="text-[1.375rem] font-medium text-black leading-none">
                                Peter Parker
                            </h2>
                            <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
                                Senior Backend Engineer
                            </h3>
                            <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
                                ID: EMP-36485 • peterparker@gmail.com
                            </h3>
                        </div>
                    </div>
                    <Separator marginY={"my-5"} width={"w-full"} />
                    <div className="w-full grid grid-cols-2 gap-y-5 gap-x-20 mt-3 pl-10">
                        <div className="flex flex-col">
                            <h3 className="text-[1.25rem] text-[#666666] font-medium ">
                                Leave Type:
                            </h3>
                            <div className="w-fit h-10 flex justify-center items-center mt-2">
                                <DropdownLeaveType name={"leaveType"} onChange={handleChangeLeaveData} title={"Leave Type"} values={["Casual", "Sick"]} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[1.25rem] text-[#666666] font-medium">
                                Status:
                            </h3>
                            <div className="w-fit px-4 h-8 rounded-xl bg-[#efe6a8] flex justify-center items-center mt-2">
                                <h2 className="text-[0.875rem] text-[#a68500] font-medium">
                                    Pending
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[1.25rem] text-[#666666] font-medium">
                                From:
                            </h3>
                            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
                            <DateSelectApplyLeave name={"from"} onChange={handleChangeLeaveData}/>
                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[1.25rem] text-[#666666] font-medium">
                                To:
                            </h3>
                            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
                                <DateSelectApplyLeave name={"to"} onChange={handleChangeLeaveData}/>
                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[1.25rem] text-[#666666] font-medium">
                                Duration:
                            </h3>
                            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
                                Added Automatically
                            </h2>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[1.25rem] text-[#666666] font-medium">
                                Applied On:
                            </h3>
                            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
                                12 Oct, 2026        
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex-1 pl-9 flex flex-col">
                    <h2 className="text-[1.5rem] font-medium text-black">
                        Description:
                    </h2>
                    <div className="w-full h-91 bg-[#f1f1f1] rounded-[1.25rem] mt-3 p-3 overflow-y-auto">
                        <textarea
                            className="w-full h-full resize-none outline-none bg-transparent align-top"
                            name="description"
                            id="description"
                            onChange={handleChangeLeaveData}
                        />
                    </div>
                    <div className="w-full flex justify-end items-center gap-6 mt-8">
                        <button value={"Rejected"} name='status' className="w-33.25 h-10.25 rounded-[0.875rem] bg-slate-800 text-[1rem] font-medium text-white transition-all hover:bg-slate-950 active:bg-slate-900">
                            Submit
                        </button>
                        <button onClick={cb} className="w-33.25 h-10.25 rounded-[0.875rem] border border-[#d3d3d3] bg-[#fafafa] text-[1rem] font-medium text-black transition-all hover:bg-[#f2f2f2] active:bg-[#ebebeb]">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveDetails