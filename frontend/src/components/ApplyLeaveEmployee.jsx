import React, { useState, useEffect } from 'react'
import Separator from './Seperator.jsx'
import DateSelectApplyLeave from './DateSelectApplyLeave.jsx'
import DropdownAddEmployee from './DropdownAddEmployee.jsx'
import DropdownLeaveType from './DropdownLeaveType.jsx'
import { useEmployeeLeaveStore } from '../store/employeeLeaveStore.js'
import toast, { Toaster } from 'react-hot-toast'

const LeaveDetails = ({ leaveDetails, cb }) => {
    const {getMyLeaves, applyLeave} = useEmployeeLeaveStore()

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
    }

    const handleSubmitLeave = async () => {
        try {
            const response = await applyLeave(leaveData)
            if(response.success){
                cb()
                await getMyLeaves()
            }
        } catch (error) {
            throw error
        }
    }
    
    return (
        <div className="w-[95vw] max-w-5xl max-h-[90vh] bg-white rounded-2xl px-5 sm:px-8 pt-6 pb-6 overflow-y-auto transition-all flex flex-col">
    <Toaster position='bottom-center'/>
    <h1 className="text-2xl sm:text-[1.75rem] font-medium text-black leading-none shrink-0">
        Leave Application
    </h1>
    <Separator marginY={"my-5"} width={"w-full"} />

    <div className="w-full flex flex-col lg:flex-row gap-6 flex-1 min-h-0">

        {/* Left panel */}
        <div className="w-full lg:w-[420px] shrink-0 lg:pr-8 lg:border-r border-[#dddddd]">
            <h2 className="text-2xl font-medium text-black">Employee</h2>

            <div className="w-full flex items-center gap-5 py-5">
                <img className="size-14 sm:size-17 rounded-full object-cover shrink-0" src="/src/assets/businessman.png" alt="" />
                <div className="flex flex-col min-w-0">
                    <h2 className="text-[1.375rem] font-medium text-black leading-none truncate">
                        Peter Parker
                    </h2>
                    <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
                        Senior Backend Engineer
                    </h3>
                    <h3 className="text-[0.875rem] text-[#7a7a7a] font-medium mt-2 leading-none break-all">
                        ID: EMP-36485 • peterparker@gmail.com
                    </h3>
                </div>
            </div>

            <Separator marginY={"my-0 mb-5"} width={"w-full"} />

            <div className="w-full grid grid-cols-2 gap-y-5 gap-x-6 sm:gap-x-10 pl-0 sm:pl-6">
                <div className="flex flex-col">
                    <h3 className="text-[1rem] sm:text-[1.125rem] text-[#666666] font-medium">Leave Type:</h3>
                    <div className="w-fit h-10 flex justify-center items-center mt-2">
                        <DropdownLeaveType name={"leaveType"} onChange={handleChangeLeaveData} title={"Leave Type"} values={["Casual", "Sick"]} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[1rem] sm:text-[1.125rem] text-[#666666] font-medium">Status:</h3>
                    <div className="w-fit px-4 h-8 rounded-xl bg-[#efe6a8] flex justify-center items-center mt-2">
                        <h2 className="text-[0.875rem] text-[#a68500] font-medium">Pending</h2>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[1rem] sm:text-[1.125rem] text-[#666666] font-medium">From:</h3>
                    <div className="mt-1.5">
                        <DateSelectApplyLeave name={"from"} onChange={handleChangeLeaveData}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[1rem] sm:text-[1.125rem] text-[#666666] font-medium">To:</h3>
                    <div className="mt-1.5">
                        <DateSelectApplyLeave name={"to"} onChange={handleChangeLeaveData}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[1rem] sm:text-[1.125rem] text-[#666666] font-medium">Duration:</h3>
                    <h2 className="text-[1rem] text-black font-medium mt-1.5">Added Automatically</h2>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[1rem] sm:text-[1.125rem] text-[#666666] font-medium">Applied On:</h3>
                    <h2 className="text-[1rem] text-black font-medium mt-1.5">12 Oct, 2026</h2>
                </div>
            </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0">
            <h2 className="text-2xl font-medium text-black shrink-0">Description:</h2>
            <div className="w-full flex-1 min-h-[200px] lg:min-h-0 bg-[#f1f1f1] rounded-[1.25rem] mt-3 p-3 overflow-y-auto">
                <textarea
                    className="w-full h-full min-h-[180px] lg:min-h-0 resize-none outline-none bg-transparent align-top"
                    name="description"
                    id="description"
                    onChange={handleChangeLeaveData}
                />
            </div>
            <div className="w-full flex justify-end items-center gap-4 mt-6 shrink-0">
                <button
                    onClick={handleSubmitLeave}
                    name='status'
                    className="h-10 px-6 rounded-[0.875rem] bg-slate-800 text-[1rem] font-medium text-white transition-all hover:bg-slate-950 active:bg-slate-900"
                >
                    Submit
                </button>
                <button
                    onClick={cb}
                    className="h-10 px-6 rounded-[0.875rem] border border-[#d3d3d3] bg-white text-[1rem] font-medium text-black transition-all hover:bg-[#f2f2f2] active:bg-[#ebebeb]"
                >
                    Close
                </button>
            </div>
        </div>

    </div>
</div>
    )
}

export default LeaveDetails