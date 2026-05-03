import React from 'react'
import TextInput from '../components/TextInput.jsx'
import FileSelect from '../components/FileSelect.jsx'
import DateSelect from '../components/DateSelect.jsx'
import DropdownAddEmployee from '../components/DropdownAddEmployee.jsx'
import PasswordInput from '../components/PasswordInput.jsx'

const Signup = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#f9f9f9]'>
        <div className="bg-white w-2/5 h-4/5 rounded-3xl">
        <div className='w-full h-20 flex justify-center items-center'>
            <h1 className="text-4xl">Signup</h1>
        </div>
        <div className="w-full h-123 bg-red-200 grid grid-cols-3 items-center justify-items-center">
            <TextInput label={"First Name:"} placeholder={"First Name"}/>
            <TextInput label={"Last Name:"} placeholder={"Last Name"}/>
            <TextInput label={"Email:"} placeholder={"Email"}/>
            <FileSelect label={"Choose Avatar:"} placeholder={"Choose Avatar"}/>
            <DateSelect label={"Date of Birth:"}/>
            <TextInput label={"Country:"} placeholder={"Country"}/>
            <TextInput label={"City:"} placeholder={"City"}/>
            <DropdownAddEmployee label={"Select Role:"} values={["admin", "employee"]}/>
            <PasswordInput placeholder={"Password"} label={"Enter Password"}/>
            <PasswordInput label={"Enter Admin Secret:"} placeholder={"Admin Secret"}/>
        </div>
        </div>
    </div>
  )
}

export default Signup