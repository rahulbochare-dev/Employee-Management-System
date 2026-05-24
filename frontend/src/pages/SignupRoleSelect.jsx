import React from 'react'
import { Form, Link, useNavigate } from "react-router-dom";
import SignupRoleButton from "../components/SignupRoleButton.jsx";

const SignupRoleSelect = () => {
    const navigate = useNavigate()

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#f9f9f9]'>
        <div className="bg-white w-98 h-68 rounded-3xl flex flex-col items-center">
        <div className='w-full h-20 flex justify-center items-center mb-3'>
            <h1 className="text-4xl">Signup as</h1>
        </div>
            <SignupRoleButton onclick={() => {navigate("/signup")}} name={"Admin"}/>
            <SignupRoleButton onclick={() => {navigate("/login-employee")}} name={"Employee"}/>
        </div>
    </div>
  )
}

export default SignupRoleSelect