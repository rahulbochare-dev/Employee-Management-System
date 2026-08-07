import React from "react";
import { ChevronDown } from "lucide-react";

const DropdownAddEmployee = ({ title, label, values, value, onChange }) => {
  return (
    <div className="w-56 h-16 flex flex-col justify-between">
      <label className="text-[0.9375rem] font-medium truncate" htmlFor="select">
        {label}
      </label>
      <div className="w-full h-8.75 flex bg-white border border-[#eaeaea] rounded-xl pl-3 pr-3 items-center">
        <select
          className="w-full h-full text-[0.8125rem] sm:text-[0.875rem] font-medium appearance-none bg-transparent outline-none truncate"
          defaultValue=""
          name="select"
          id="select"
          value={value}
          onChange={onChange}>
          <option disabled hidden value="">
            {title}
          </option>
          {values.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>);})}
        </select>
        <ChevronDown size={20} color="black"/>
      </div>
    </div>
  );
};

export default DropdownAddEmployee;
