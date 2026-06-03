import React from "react";

const Separator = ({ width = "w-full", color = "bg-[#eaeaea]", marginY }) => {
  return (
    <div className={`flex justify-center`}>
      <div
        className={`h-px ${width} ${color} ${marginY} transition-all duration-300`}></div>
    </div>
  );
};

export default Separator;
