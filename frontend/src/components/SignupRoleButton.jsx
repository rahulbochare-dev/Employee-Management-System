import React from "react";
import { ChevronRight } from "lucide-react";

const SignupRoleButton = ({ name, onclick }) => {
  return (
    <div
      onClick={onclick}
      className="w-[80%] h-13 bg-[#f1f1f1] rounded-2xl flex justify-between items-center px-5 mt-5 transition-all hover:bg-[#e0e0e0] active:bg-[#c8c8c8]">
      <h3 className="text-xl font-medium">{name}</h3>
      <ChevronRight />
    </div>
  );
};

export default SignupRoleButton;
