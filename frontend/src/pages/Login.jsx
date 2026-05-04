import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import TextInput from '../components/TextInput.jsx'
import PasswordInput from '../components/PasswordInput.jsx'
import Button from '../components/Button.jsx'

const Login = () => {
    const navigate = useNavigate()

    const [formData, setFromData] = useState({
        email: "",
        password: ""
    })

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#f9f9f9]'>
            <div className="bg-white w-1/5 h-106 rounded-3xl">
                <div className='w-full h-20 flex justify-center items-center'>
                    <h1 className="text-4xl">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="w-full h-123 flex flex-col gap-8 items-center pt-8">
                    <TextInput onChange={(e) => (setFromData({ ...formData, email: e.target.value }))} label={"Email:"} placeholder={"Email"} />
                    <PasswordInput onChange={(e) => (setFromData({ ...formData, password: e.target.value }))} label={"Enter Password:"} placeholder={"Password"} />
                    <div className="w-full h-26 flex justify-center items-center flex-col gap-5">
                        <Button width='w-64' title={"Login"} icon={"/src/assets/login.svg"} />
                        <h3>Don't have an account <Link to={"/signup"} className='text-blue-500 cursor-pointer underline'>signup</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login