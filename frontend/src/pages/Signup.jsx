import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import TextInput from '../components/TextInput.jsx'
import FileSelect from '../components/FileSelect.jsx'
import DateSelect from '../components/DateSelect.jsx'
import DropdownAddEmployee from '../components/DropdownAddEmployee.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import Button from '../components/Button.jsx'

const Signup = () => {
    const navigate = useNavigate()

    const [formData, setFromData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        dob: "",
        country: "",
        city: "",
        role: "",
        password: "",
        adminSecret: "",
    })
    
    const handleSignup = (e) => {
        e.preventDefault()
        console.log(formData)
    }


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#f9f9f9]'>
        <div className="bg-white w-2/5 h-4/5 rounded-3xl">
        <div className='w-full h-20 flex justify-center items-center'>
            <h1 className="text-4xl">Signup</h1>
        </div>
        <form onSubmit={handleSignup} className="w-full h-123 grid grid-cols-3 items-center justify-items-center">
            <TextInput label={"First Name:"} placeholder={"First Name"}
                onChange={(e) => (setFromData({ ...formData, firstName: e.target.value }))}/>
            <TextInput label={"Last Name:"} placeholder={"Last Name"}
                onChange={(e) => (setFromData({ ...formData, lastName: e.target.value }))}/>
            <TextInput label={"Email:"} placeholder={"Email"}
                onChange={(e) => (setFromData({ ...formData, email: e.target.value }))}/>
            <FileSelect label={"Choose Avatar:"} placeholder={"Choose Avatar"}
                onChange={(e) => (setFromData({ ...formData, avatar: e.target.value }))}/>
            <DateSelect label={"Date of Birth:"}
                onChange={(e) => (setFromData({ ...formData, dob: e.target.value }))}/>
            <TextInput label={"Country:"} placeholder={"Country"}
                onChange={(e) => (setFromData({ ...formData, country: e.target.value }))}/>
            <TextInput label={"City:"} placeholder={"City"}
                onChange={(e) => (setFromData({ ...formData, city: e.target.value }))}/>
            <DropdownAddEmployee label={"Select Role:"} values={["admin", "employee"]}
                onChange={(e) => (setFromData({ ...formData, role: e.target.value }))}/>
            <PasswordInput placeholder={"Password"} label={"Enter Password"}
                onChange={(e) => (setFromData({ ...formData, password: e.target.value }))}/>
            <PasswordInput label={"Enter Admin Secret:"} placeholder={"Admin Secret"}
                onChange={(e) => (setFromData({ ...formData, adminSecret: e.target.value }))}/>
        </form>
        <div className="w-full h-47 flex justify-center items-center flex-col gap-5">
            <Button width='w-64' title={"Signup"} icon={"/src/assets/login.svg"}/>
            <h3>Already have an account <Link to={"/login"} className='text-blue-500 cursor-pointer underline'>login</Link></h3>
        </div>
        </div>
    </div>
  )
}

export default Signup