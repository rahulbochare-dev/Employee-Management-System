import React from 'react'
import Separator from './Seperator.jsx'
import TextInput from './TextInput.jsx'
import DropdownAddEmployee from './DropdownAddEmployee.jsx'
import countries from "../data/contries.json";

const AddEmployeeModal = () => {
  return (
    <>
        <div className="w-screen h-screen z-10 flex justify-center items-center">
            <div className="w-330.5 h-173 bg-white border border-[#b6b6b6] rounded-2xl">
                <div className="w-full h-12 flex items-center pt-3">
                    <h1 className='text-[1.75rem] font-semibold pl-10'>Onboard Employee</h1>
                </div>
                <Separator marginY={"my-4"} width={"w-310"}/>
                <div className='w-full h-132 grid grid-cols-4 grid-rows-5 pl-10 pt-5'>
                    <TextInput label={"Emp ID:"} placeholder={"Emp ID"}/>
                    <TextInput label={"Contact No:"} placeholder={"Contact No"}/>
                    <TextInput label={"City:"} placeholder={"City"}/>
                    <TextInput label={"Salary:"} placeholder={"Salary"}/>
                    <TextInput label={"First Name:"} placeholder={"First Name"}/>
                    <TextInput label={"Other Field:"} placeholder={"Other Field"}/>
                    <TextInput label={"Postal Code:"} placeholder={"Postal Code"}/>
                    <TextInput label={"Education:"} placeholder={"Education"}/>
                    <TextInput label={"Last Name:"} placeholder={"Last Name"}/>
                    <TextInput label={"Other Field:"} placeholder={"Other Field"}/>
                    <TextInput label={"Address:"} placeholder={"Address"}/>
                    <TextInput label={"Years of Experience:"} placeholder={"Years of Experience"}/>
                    <TextInput label={"Email:"} placeholder={"Email"}/>
                    <TextInput label={"Date of Birth:"} placeholder={"Date of Birth"}/>
                    <TextInput label={"Role:"} placeholder={"Role"}/>
                    <TextInput label={"Avatar:"} placeholder={"Avatar"}/>
                    <DropdownAddEmployee label={"Gender:"} title={"Gender"} values={["Male", "Female"]}/>
                    <DropdownAddEmployee label={"Country:"} title={"Country"} values={countries}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddEmployeeModal