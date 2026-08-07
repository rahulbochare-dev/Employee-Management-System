import React from "react";
import { ChevronDown } from "lucide-react";

const DropdownLeaveType = ({ title, values, value, onChange, name }) => {
  return (
    <div className="w-full sm:w-36 h-8.75 flex items-center bg-white border border-[#b6b6b6] rounded-xl pl-3 pr-3">
      <select
        className="w-full h-full text-[0.8125rem] sm:text-[0.875rem] font-medium appearance-none bg-transparent outline-none truncate cursor-pointer"
        defaultValue=""
        name={name}
        id="select"
        value={value}
        onChange={onChange}>
        <option disabled hidden value="">
          {title}
        </option>
        {values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>))}
      </select>
      <ChevronDown size={20} color="black" />
    </div>
  );
};

export default DropdownLeaveType;
