import React from 'react'
import Separator from './Seperator'

const LeaveCard = ({ leave, cb, cb2 }) => {
  return (
    <div className="w-85 h-65 bg-white border border-[#b6b6b6] rounded-xl px-5 overflow-hidden">
      <div className="w-full h-17 flex justify-start gap-3 items-center">
        <img className='w-11 h-11' src="/src/assets/businessman.png" alt="" />
        <div className="w-[78%] h-[75%] flex flex-col">
          <h2 className="text-lg font-semibold">{leave?.employee.firstName} {leave?.employee.lastName}</h2>
          <h2 className="text-sm text-[#929292] font-medium">Status: <span 
          className={
            leave?.status === "Pending"
              ? "text-yellow-500"
              : leave?.status === "Rejected"
              ? "text-red-500"
              : leave?.status === "Approved"
              ? "text-green-500"
              : "text-[#929292]"
          }>{leave?.status}</span></h2>
        </div>
      </div>
      <Separator width='w-74' />
      <div className="w-full flex justify-between mt-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-[#8b8b8b] font-medium">
            Leave Type:
          </h3>
          <h2 className="text-[16px] leading-none font-medium text-black">
            {leave?.leaveType}
          </h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h3 className="text-[14px] text-[#8b8b8b] font-medium">
            Duration:
          </h3>
          <h2 className="text-[16px] leading-none font-medium text-black">
            {leave?.duration || "N/A"}
          </h2>
        </div>
      </div>
      <div className="w-full h-13 bg-[#F8F8F8] rounded-2xl mt-3 flex items-center justify-between px-4">
        <div className="flex flex-col">
          <h3 className="text-[13px] text-[#8b8b8b] font-medium leading-none">
            From:
          </h3>
          <h2 className="text-[14px] text-black font-medium mt-2 leading-none">
            {
              new Date(leave?.from).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }
          </h2>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[13px] text-[#8b8b8b] font-medium leading-none">
            To:
          </h3>
          <h2 className="text-[14px] text-black font-medium mt-2 leading-none">
          {
              new Date(leave?.to).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })
            }
          </h2>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-4">
        <button onClick={(e) => (cb2(e, leave?._id))} name='status' value={"Approved"} className="w-26 h-8.5 bg-[#7ee3a3] rounded-[20px] text-[14px] font-medium text-black transition-all hover:bg-[#70d896] active:bg-[#62cb89]">
          Approve
        </button>
        <button onClick={(e) => (cb2(e, leave?._id))} name='status' value={"Rejected"} className="w-26 h-8.5 bg-[#f58a8a] rounded-[20px] text-[14px] font-medium text-black transition-all hover:bg-[#ea7e7e] active:bg-[#df7070]">
          Reject
        </button>
        <button onClick={(e) => (cb(e, leave?._id))} className="w-8.5 h-8.5 rounded-full bg-[#F8F8F8] flex justify-center items-center shrink-0 transition-all hover:bg-[#f0f0f0] active:bg-[#dcdcdc]">
          <img
            className="w-5.5"
            src="/src/assets/info.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}

export default LeaveCard