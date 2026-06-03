import React from "react";
import { useNavigate } from "react-router-dom";
import SignupRoleButton from "../components/SignupRoleButton.jsx";

const SignupRoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-[#fcfcfe] px-4 py-6 overflow-x-hidden">
      <div className="bg-white w-full sm:w-[85%] md:w-[60%] lg:w-[40%] xl:w-98 rounded-3xl flex flex-col items-center py-6">
        <div className="w-full h-20 flex justify-center items-center mb-3 px-4">
          <h1 className="text-4xl text-center">Continue as</h1>
        </div>
        <SignupRoleButton
          onclick={() => {navigate("/signup")}}
          name={"Admin"}/>
        <SignupRoleButton
          onclick={() => {navigate("/login-employee")}}
          name={"Employee"}/>
      </div>
    </div>
  );
};

export default SignupRoleSelect;
