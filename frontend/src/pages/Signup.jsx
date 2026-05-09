import React, { useState } from 'react'
import { Form, Link, useNavigate } from "react-router-dom";
import TextInput from '../components/TextInput.jsx'
import FileSelect from '../components/FileSelect.jsx'
import DateSelect from '../components/DateSelect.jsx'
import DropdownAddEmployee from '../components/DropdownAddEmployee.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import Button from '../components/Button.jsx'
import { useUserStore } from '../store/userStore.js'
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate()

    const [formData, setFromData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        userName: "",
        email: "",
        avatar: File,
        dateOfBirth: "",
        country: "",
        city: "",
        role: "",
        password: "",
        adminSecret: "",
    })
    
    const { user, signup } = useUserStore()

    const handleFormSubmit = async (e) => {
        e.preventDefault()
    
        const submitData = new FormData()
    
        submitData.append("firstName", formData.firstName)
        submitData.append("middleName", formData.middleName)
        submitData.append("lastName", formData.lastName)
        submitData.append("userName", formData.userName)
        submitData.append("email", formData.email)
        submitData.append("dateOfBirth", formData.dateOfBirth)
        submitData.append("country", formData.country)
        submitData.append("city", formData.city)
        submitData.append("role", formData.role)
        submitData.append("password", formData.password)
        submitData.append("adminSecret", formData.adminSecret)
        
        submitData.append("avatar", formData.avatar)
        
        try {
            const response = await signup(submitData)
            if(response.success){
                toast.success(response.message)
                navigate("/admin/dashboard")
            } else {
                toast.error(response.message)
            }
            
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-[#f9f9f9]'>
        <Toaster position='bottom-center'/>
        <div className="bg-white w-2/5 h-4/5 rounded-3xl">
        <div className='w-full h-20 flex justify-center items-center'>
            <h1 className="text-4xl">Signup</h1>
        </div>
        <form onSubmit={handleFormSubmit} className="w-full h-64 items-center justify-items-center">
            <div className='w-full h-126 pt-5 grid grid-cols-3 justify-items-center items-center'>
            <TextInput label={"First Name:"} placeholder={"First Name"}
                onChange={(e) => (setFromData({ ...formData, firstName: e.target.value }))}/>
            <TextInput label={"Middle Name:"} placeholder={"Middle Name"}
                onChange={(e) => (setFromData({ ...formData, middleName: e.target.value }))}/>
            <TextInput label={"Last Name:"} placeholder={"Last Name"}
                onChange={(e) => (setFromData({ ...formData, lastName: e.target.value }))}/>
            <TextInput label={"Username:"} placeholder={"Username"}
                onChange={(e) => (setFromData({ ...formData, userName: e.target.value }))}/>
            <TextInput label={"Email:"} placeholder={"Email"}
                onChange={(e) => (setFromData({ ...formData, email: e.target.value }))}/>
            <FileSelect label={"Choose Avatar:"} placeholder={"Choose Avatar"}
                onChange={(file) => (setFromData({ ...formData, avatar: file }))}/>
            <DateSelect label={"Date of Birth:"}
                onChange={(e) => (setFromData({ ...formData, dateOfBirth: e.target.value }))}/>
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
            </div>
            <div className="w-full h-36 flex justify-center items-center flex-col gap-5">
                <Button width='w-64' title={"Signup"} icon={"/src/assets/login.svg"}/>
                <h3>Already have an account? <Link to={"/login"} className='text-blue-500 cursor-pointer underline'>login</Link></h3>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default Signup