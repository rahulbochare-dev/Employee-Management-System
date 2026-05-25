import React, { useState } from 'react'
import Separator from './Seperator.jsx'
import toast, { Toaster } from 'react-hot-toast'
import { useEmployeeLeaveStore } from '../store/employeeLeaveStore.js'

const LeaveDetailsEmployee = ({leaveDetails, cb}) => {
  const {getMyLeaves, deleteLeave} = useEmployeeLeaveStore()

  const handleLeaveDelete = async (e) => {
    try {
      const response = await deleteLeave(leaveDetails?._id)
      if(response.success){
        cb()
        await getMyLeaves()
      }
    } catch (error) {
      throw error
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
          <img className="size-17 rounded-full object-cover shrink-0" src="/src/assets/businessman.png" alt=""/>
          <div className="flex flex-col">           
            <h2 className="text-[1.375rem] font-medium text-black leading-none">
              {leaveDetails?.employee.firstName} {leaveDetails?.employee.lastName}
            </h2>
            <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
            {leaveDetails?.employee.jobTitle}
            </h3>
            <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none">
              ID: {leaveDetails?.employee.empID} • {leaveDetails?.employee.email}
            </h3>
          </div>
        </div>
        <Separator marginY={"my-5"} width={"w-full"} />
        <div className="w-full grid grid-cols-2 gap-y-10 gap-x-20 mt-3 pl-10">        
          <div className="flex flex-col">
            <h3 className="text-[1.25rem] text-[#666666] font-medium">
              Leave Type:
            </h3>
            <div 
            className={`w-fit px-4 h-8 rounded-xl flex justify-center items-center mt-2
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
            <div
            className={`w-fit px-4 h-8 rounded-xl flex justify-center items-center mt-2
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
      <div className="flex-1 pl-9 flex flex-col">    
        <h2 className="text-[1.5rem] font-medium text-black">
          Description:
        </h2>
        <div className="w-178 h-91 bg-[#f1f1f1] rounded-[1.25rem] mt-3 px-8 py-6 overflow-y-auto">
          <p className="text-[1.05rem] wrap-break-word leading-8 text-black font-normal">
          {leaveDetails?.description}
          </p>
        </div>
        <div className="w-full flex justify-end items-center gap-6 mt-8">
          <button onClick={handleLeaveDelete} value={"Rejected"} name='status' className="w-33.25 h-10.25 rounded-[0.875rem] bg-[#f58484] text-[1rem] font-medium text-black transition-all hover:bg-[#ef7575] active:bg-[#e76767]">
            Delete
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

export default LeaveDetailsEmployee