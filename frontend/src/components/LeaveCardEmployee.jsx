import React from "react";
import Separator from "./Seperator";
import { User, Info } from "lucide-react";

const LeaveCardEmployee = ({ leave, cb }) => {
  return (
    <div className="w-85 sm:w-85 h-65 bg-white border border-[#eaeaea] rounded-xl px-4 sm:px-5 overflow-hidden">
      <div className="w-full h-17 flex justify-start gap-3 items-center">
        <User size={32}/>
        <div className="w-[78%] h-[75%] flex flex-col">
          <h2 className="text-lg font-semibold">
            {leave?.employee?.firstName} {leave?.employee?.lastName}
          </h2>
          <h2 className="text-sm text-[#929292] font-medium">
            Status:{" "}
            <span
              className={
                leave?.status === "Pending"
                  ? "text-yellow-500"
                  : leave?.status === "Rejected"
                    ? "text-red-500"
                    : leave?.status === "Approved"
                      ? "text-green-500"
                      : "text-[#929292]"}>
              {leave?.status}
            </span>
          </h2>
        </div>
        <button
          onClick={(e) => cb(e, leave?._id)}
          className="w-8.5 h-8.5 rounded-full bg-[#F8F8F8] flex justify-center items-center shrink-0 transition-all hover:bg-[#f0f0f0] active:bg-[#dcdcdc]">
          <Info size={20} color="#bababa"/>
        </button>
      </div>
      <Separator width="w-74" />
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
          <h3 className="text-[14px] text-[#8b8b8b] font-medium">Duration:</h3>
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
            {new Date(leave?.from).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h2>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[13px] text-[#8b8b8b] font-medium leading-none">
            To:
          </h3>
          <h2 className="text-[14px] text-black font-medium mt-2 leading-none">
            {new Date(leave?.to).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-between truncate mt-4">
        <h2 className="text-[1rem] font-medium text-[#7a7a7a]">Reason:</h2>
        <h2 className="text-[1rem] font-medium">{leave?.description}</h2>
      </div>
    </div>
  );
};

export default LeaveCardEmployee;
