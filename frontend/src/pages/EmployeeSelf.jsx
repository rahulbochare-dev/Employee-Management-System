import React, { useState, useEffect } from 'react'
import DateTime from "../components/DateTime.jsx";
import Button from "../components/Button.jsx";
import Seperator from "../components/Seperator.jsx";
import LeaveCardEmployee from "../components/LeaveCardEmployee.jsx";
import ApplyLeaveEmployee from "../components/ApplyLeaveEmployee.jsx";
import LeaveDetailsEmployee from "../components/LeaveDetailsEmployee.jsx";
import { useEmployeeLeaveStore } from "../store/employeeLeaveStore.js";
import { useEmployeeStore } from "../store/employeeStore.js";

const EmployeeSelf = () => {
    const {myLeaveDetails, myLeaves, getMyLeaves, getLeaveDetails} = useEmployeeLeaveStore()
    const {employee, getCurrentEmployee} = useEmployeeStore()
    const [showApplyLeave, setShowApplyLeave] = useState(false)
    const [showLeaveDetails, setShowLeaveDetails] = useState(false)

    const handleShowApplyLeave = () => {
        setShowApplyLeave(!showApplyLeave)
    }

    const handleGetLeaveDetails = async (e, leaveId) => {
        setShowLeaveDetails(!showLeaveDetails)
        try {
            const response = await getLeaveDetails(leaveId)
        } catch (error) {
            throw error
        }
    }
    
    useEffect(() => {
        const callApi = async () => {
            const response = await getMyLeaves()
            const responseEmp = await getCurrentEmployee()
        }
        callApi()
    }, [])

    return (
        <div className='w-screen h-screen bg-[#f9f9f9] px-5 relative'>
            {showLeaveDetails &&<div className="w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md fixed inset-0">
                {showLeaveDetails && <LeaveDetailsEmployee leaveDetails={myLeaveDetails} cb={handleGetLeaveDetails}/>}
            </div>}
            {showApplyLeave &&<div className="w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md fixed inset-0">
                {showApplyLeave && <ApplyLeaveEmployee cb={handleShowApplyLeave}/>}
            </div>}
            <div className="w-full h-20 flex justify-between items-center">
                <div className='w-25 h-10 bg-gray-200'></div>
                <DateTime />
            </div>
            <div className="w-full h-[90%] bg-white border border-[#b6b6b6] rounded-2xl">
                <div className="w-full h-22 flex justify-between items-center px-10">
                    <h1 className='text-3xl font-medium'>Employee Details</h1>
                    <Button title={"Logout"} icon={"/src/assets/logout.svg"} />
                </div>
                <Seperator width='w-450' />
                <div className="w-full h-[89.6%] flex">
                <div className="w-1/2 h-[89.7%] border-r border-[#b6b6b6]">
                    <div className="w-full h-30 pl-10 flex">
                        <div className="w-98 h-30 flex items-center gap-5">
                            <img className="size-17 rounded-full object-cover shrink-0" src="/src/assets/businessman.png" alt="" />
                            <div className="flex flex-col">
                                <h2 className="text-[1.375rem] font-medium text-black leading-none">
                                    {employee?.firstName} {employee?.lastName}
                                </h2>
                                <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
                                {employee?.jobTitle}
                                </h3>
                                <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
                                {employee?.email}
                                </h3>
                            </div>
                        </div>
                        <div className="w-127 h-full flex justify-center items-center gap-5">
                            <div className="w-35 h-20 flex flex-col">
                                <h2 className='text-[1.375rem] font-medium'>EMP ID</h2>
                                <h3 className='text-[1rem] text-[#7a7a7a] font-medium'>{employee?.empID}</h3>
                            </div>
                            <div className="w-35 h-20">
                                <h2 className='text-[1.375rem] font-medium'>Work Mode</h2>
                                <h3 className='text-[1rem] text-[#7a7a7a] font-medium'>{employee?.workMode}</h3>
                            </div>
                            <div className="w-35 h-20">
                                <h2 className='text-[1.375rem] font-medium'>Status</h2>
                                <h3 className='text-[1rem] text-[#7a7a7a] font-medium'>{employee?.isActive? true: "Active"}</h3>
                            </div>
                        </div>
                    </div>
                    <Seperator width='w-216' />
                    <div className="w-full h-138 px-31 py-10 items-center gap-x-98 grid grid-cols-2 grid-rows-3 ">
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Gender</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{employee?.gender}</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Date of Birth</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{
              new Date(employee?.dateOfBirth).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Address</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{employee?.address}</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Postal Code</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{employee?.postalCode}</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Country</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{employee?.country}</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>City</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{employee?.city}</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Joining Date</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{
              new Date(employee?.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }</h3>
                        </div>
                        <div className="w-fit h-20">
                            <h2 className='text-[1.5625rem] font-medium'>Education</h2>
                            <h3 className='text-[1.2rem] text-[#7a7a7a] font-medium'>{employee?.education}</h3>
                        </div>
                    </div>
                    <div className="w-full h-22 px-31 flex justify-start pt-3">
                        <h2 className='text-[2rem] font-medium'><span className='text-[#7a7a7a]'>Salary: </span>{employee?.salary} {employee?.salaryCurrency}</h2>
                    </div>
                </div>
                <div className='w-1/2 h-[89.7%]'>
                    <div className='w-full h-20 flex justify-start items-center px-10'>
                        <h2 className='text-[1.75rem] font-medium'>My Leaves</h2>
                    </div>
                    <div className="w-full h-172">
                        <div className="w-full h-148 grid grid-cols-2 gap-5 items-center justify-items-center overflow-y-scroll">
                            {myLeaves?.map((leave) => {
                                return <LeaveCardEmployee cb={handleGetLeaveDetails} key={leave?._id} leave={leave}/>
                            })}
                        </div>
                        <div className="w-full h-20 flex justify-center items-center">
                            <Button onClick={handleShowApplyLeave} icon={"/src/assets/leave-light.svg"} title={"Apply Leave"}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeSelf