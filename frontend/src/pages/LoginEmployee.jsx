import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import TextInput from '../components/TextInput.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import { useEmployeeStore } from '../store/employeeStore.js'
import Button from '../components/Button.jsx'
import toast, { Toaster } from 'react-hot-toast';

const LoginAdmin = () => {
    const navigate = useNavigate()
    const {login} = useEmployeeStore()
    
    const [formData, setFromData] = useState({
        email: "",
        password: ""
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await login(formData)
            console.log(response)
            if(response.success){
                toast.success(response.message)
                navigate("/employee")
            } else {
                toast.error(response.message)
            }
            
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#f9f9f9]'>
            <Toaster position='bottom-center'/>
            <div className="bg-white w-1/5 h-106 rounded-3xl">
                <div className='w-full h-20 flex justify-center items-center'>
                    <h1 className="text-4xl">Login as Employee</h1>
                </div>
                <form onSubmit={handleFormSubmit} className="w-full h-123 flex flex-col gap-8 items-center pt-8">
                    <TextInput onChange={(e) => (setFromData({ ...formData, email: e.target.value }))} label={"Email:"} placeholder={"Email"} />
                    <PasswordInput onChange={(e) => (setFromData({ ...formData, password: e.target.value }))} label={"Enter Password:"} placeholder={"Password"} />
                    <div className="w-full h-26 flex justify-center items-center flex-col gap-5">
                        <Button width='w-64' title={"Login"} icon={"/src/assets/login.svg"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin