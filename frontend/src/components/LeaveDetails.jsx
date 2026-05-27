import React, { useState } from 'react'
import Separator from './Seperator.jsx'
import { useAdminLeaveStore } from '../store/adminLeaveStore.js'
import toast from 'react-hot-toast'
import { X } from "lucide-react";

const LeaveDetails = ({leaveDetails, cb}) => {
  const {getLeaves, updateLeaveStatus} = useAdminLeaveStore()
  const [status, setStatus] = useState(null)

  const handleUpdateLeaveStatus = async (e) => {
    const updatedStatus = {
      ...status,
      [e.target.name]: e.target.value
    }
    setStatus(updatedStatus)
    
    try {
      const response = await updateLeaveStatus(leaveDetails?._id, updatedStatus.status)
      if(response.success){
        toast.success(`Leave application ${response.data.leave.status}`)
        cb()
        await getLeaves()
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error("Something went wrong!")
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
    <div className="w-full flex justify-between items-center">
  <h1 className="text-2xl sm:text-2xl lg:text-[1.75rem] font-medium text-black">
    Leave Application
  </h1>

  <button
    onClick={cb}
    className="w-9 h-9 rounded-full flex justify-center items-center transition-all hover:bg-[#f1f1f1] active:bg-[#e9e9e9]"
  >
    <X size={22} strokeWidth={2.2} />
  </button>
</div>
    <Separator marginY={"my-4 sm:my-5"} width={"w-full"} />
    <div className="w-full flex flex-col lg:flex-row gap-6">     
    <div className="w-full lg:w-[40%] pr-0 lg:pr-8 lg:border-r border-[#dddddd]">      
    <h2 className="text-xl mb-6 sm:text-xl lg:text-[1.5rem] font-medium">
          Employee Details
        </h2>
        <div className="w-full flex items-center gap-4 sm:gap-5">       
        <img className="w-16 h-16 sm:w-16 sm:h-16 lg:size-17 rounded-full object-cover" src='frontend\src\assets\businessman.png' />
          <div className="flex flex-col">           
            <h2 className="text-[1.375rem] font-medium text-black leading-none">
              {leaveDetails?.employee.firstName || "N/A"} {leaveDetails?.employee.lastName}
            </h2>
            <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
            {leaveDetails?.employee.jobTitle || "N/A"}
            </h3>
            <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
              ID: {leaveDetails?.employee.empID || "N/A"}
            </h3>
          </div>
        </div>
        <Separator marginY={"my-5"} width={"w-full"} />
        <div className="w-full grid grid-cols-2 items-center gap-y-8 sm:gap-y-10 sm:gap-x-20 mt-3 pl-0 sm:pl-5 lg:pl-10">      
          <div className="flex flex-col">
          <h3 className="text-[1.25rem] sm:text-lg lg:text-[1.25rem] text-[#666666] font-medium">
              Leave Type:
            </h3>
            <div className={`w-fit px-4 h-8 rounded-xl flex justify-center items-center mt-2
              ${leaveDetails?.leaveType === "Casual"
              ? "bg-indigo-200"
              : leaveDetails?.leaveType === "Sick"
              ? "bg-orange-200"
              : "bg-[#929292]"}`}>
              <h2 className={
                leaveDetails?.leaveType === "Casual"
                ? "text-indigo-500 font-medium"
                : leaveDetails?.leaveType === "Sick"
                ? "text-orange-500 font-medium"
                : "text-[#929292] font-medium"}>
              {leaveDetails?.leaveType}
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.25rem] text-[#666666] font-medium">
              Status:
            </h3>
            <div className={`w-fit px-4 h-8 rounded-xl flex justify-center items-center mt-2
              ${leaveDetails?.status === "Pending"
              ? "bg-yellow-200"
              : leaveDetails?.status === "Rejected"
              ? "bg-red-200"
              : leaveDetails?.status === "Approved"
              ? "bg-green-200"
              : "bg-[#929292]"}`}>
              <h2 className={
                  leaveDetails?.status === "Pending"
                  ? "text-yellow-500 font-medium"
                  : leaveDetails?.status === "Rejected"
                  ? "text-red-500 font-medium"
                  : leaveDetails?.status === "Approved"
                  ? "text-green-500 font-medium"
                  : "text-[#929292] font-medium"}>
              {leaveDetails?.status}
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.25rem] text-[#666666] font-medium">
              From:
            </h3>
            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
            {
              new Date(leaveDetails?.from).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.25rem] text-[#666666] font-medium">
              To:
            </h3>
            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
            {
              new Date(leaveDetails?.to).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.25rem] text-[#666666] font-medium">
              Duration:
            </h3>
            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
            {leaveDetails?.duration || "N/A"}
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.25rem] text-[#666666] font-medium">
              Applied On:
            </h3>
            <h2 className="text-[1.25rem] text-black font-medium mt-1.5">
            {
              new Date(leaveDetails?.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex-1 pl-0 lg:pl-9 flex flex-col">    
        <h2 className="text-[1.5rem] font-medium text-black">
          Description:
        </h2>
        <div className="w-full h-64 sm:h-80 lg:h-91 bg-[#f1f1f1] rounded-xl sm:rounded-[1.25rem] mt-3 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-y-auto">
          <p className="text-[1.05rem] leading-8 text-black font-normal">
          {leaveDetails?.description || "Not available"}
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-end gap-3 sm:gap-6 mt-6">
          <button onClick={handleUpdateLeaveStatus} value={"Rejected"} name='status' className="w-full sm:w-33.25 h-10.25 rounded-[0.875rem] bg-[#f58484] text-[1rem] font-medium text-black transition-all hover:bg-[#ef7575] active:bg-[#e76767]">
            Reject
          </button>
          <button onClick={handleUpdateLeaveStatus} value={"Approved"} name='status' className="w-full sm:w-33.25 h-10.25 rounded-[0.875rem] bg-[#7ee2a0] text-[1rem] font-medium text-black transition-all hover:bg-[#71d493] active:bg-[#64c786]">
            Approve
          </button>
          <button onClick={cb} className="w-full sm:w-33.25 h-10.25 rounded-[0.875rem] border border-[#d3d3d3] bg-[#fafafa] text-[1rem] font-medium text-black transition-all hover:bg-[#f2f2f2] active:bg-[#ebebeb]">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeaveDetails