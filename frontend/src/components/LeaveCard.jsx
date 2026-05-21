import React from 'react'

const LeaveCard = () => {
  return (
    <div className="w-85 h-65 bg-white border border-[#b6b6b6] rounded-xl px-5 overflow-hidden">
      <div className="w-full h-18.75 flex items-center gap-5 ">
        <img
          className="w-11 h-11 rounded-full object-cover shrink-0"
          src="/src/assets/businessman.png"
          alt=""
        />
        <div className="flex flex-col justify-center min-w-0 gap-1">
          <h2 className="text-[18px] leading-none font-medium text-black truncate">
            Eren Yeager
          </h2>
          <div className="flex items-center gap-2">
            <h3 className="text-[14px] text-[#8b8b8b] font-medium">
              Status:
            </h3>
            <h3 className="text-[14px] text-[#d1ab17] font-medium">
              Pending
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[#d3d3d3]"></div>
      <div className="w-full flex justify-between mt-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-[#8b8b8b] font-medium">
            Leave Type:
          </h3>
          <h2 className="text-[16px] leading-none font-medium text-black">
            Casual
          </h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <h3 className="text-[14px] text-[#8b8b8b] font-medium">
            Duration:
          </h3>
          <h2 className="text-[16px] leading-none font-medium text-black">
            3 Days
          </h2>
        </div>
      </div>
      <div className="w-full h-13 bg-[#F8F8F8] rounded-2xl mt-3 flex items-center justify-between px-4">
        <div className="flex flex-col">
          <h3 className="text-[13px] text-[#8b8b8b] font-medium leading-none">
            From:
          </h3>
          <h2 className="text-[14px] text-black font-medium mt-2 leading-none">
            Dec 31, 2023
          </h2>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[13px] text-[#8b8b8b] font-medium leading-none">
            To:
          </h3>
          <h2 className="text-[14px] text-black font-medium mt-2 leading-none">
            Dec 31, 2023
          </h2>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-4">
        <button className="w-26 h-8.5 bg-[#7ee3a3] rounded-[20px] text-[14px] font-medium text-black transition-all hover:bg-[#70d896] active:bg-[#62cb89]">
          Approve
        </button>
        <button className="w-26 h-8.5 bg-[#f58a8a] rounded-[20px] text-[14px] font-medium text-black transition-all hover:bg-[#ea7e7e] active:bg-[#df7070]">
          Reject
        </button>
        <button className="w-8.5 h-8.5 rounded-full bg-[#F8F8F8] flex justify-center items-center shrink-0">
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