import React, { useState } from 'react'
import Separator from './Seperator.jsx'
import TextInput from './TextInput.jsx'
import DropdownAddEmployee from './DropdownAddEmployee.jsx'
import countries from "../data/contries.json";
import FileSelect from './FileSelect.jsx';
import Button from './Button.jsx';

const AddEmployeeModal = ({ handleShowModal }) => {
  const [showModal, setShowModal] = useState(true)

  return (
    <>
        {showModal && <div className="w-screen h-screen z-10 flex justify-center items-center">
            <div className="w-330.5 h-173 bg-white border border-[#b6b6b6] rounded-2xl overflow-clip">
                <div className="w-full h-15 flex items-center pt-5">
                    <h1 className='text-[1.75rem] font-semibold pl-10'>Onboard Employee</h1>
                </div>
                <Separator marginY={"my-4"} width={"w-310"}/>
                <div className='w-full h-128 grid grid-cols-4 grid-rows-5 pl-10 '>
                    <TextInput label={"Emp ID:"} placeholder={"Emp ID"}/>
                    <TextInput label={"Contact No:"} placeholder={"Contact No"}/>
                    <TextInput label={"City:"} placeholder={"City"}/>
                    <TextInput label={"Salary:"} placeholder={"Salary"}/>
                    <TextInput label={"First Name:"} placeholder={"First Name"}/>
                    <TextInput label={"Postal Code:"} placeholder={"Postal Code"}/>
                    <TextInput label={"Education:"} placeholder={"Education"}/>
                    <TextInput label={"Other Field:"} placeholder={"Other Field"}/>
                    <TextInput label={"Middle Name:"} placeholder={"Middle Name"}/>
                    <TextInput label={"Email:"} placeholder={"Email"}/>
                    <TextInput label={"Address:"} placeholder={"Address"}/>
                    <TextInput label={"Years of Experience:"} placeholder={"Years of Experience"}/>
                    <TextInput label={"Last Name:"} placeholder={"Last Name"}/>
                    <TextInput label={"Date of Birth:"} placeholder={"Date of Birth"}/>
                    <TextInput label={"Role:"} placeholder={"Role"}/>
                    <FileSelect label={"Avatar:"} placeholder={"Choose Avatar"}/>
                    <DropdownAddEmployee label={"Gender:"} title={"Gender"} values={["Male", "Female"]}/>
                    <DropdownAddEmployee label={"Country:"} title={"Country"} values={countries}/>
                    <DropdownAddEmployee label={"Workmode:"} title={"Workmode"} values={["On-Site", "Remote", "Hybrid"]}/>
                    <DropdownAddEmployee label={"Employement Type:"} title={"Employement Type"} values={["Full Time", "Contract", "Freelance", "Intern"]}/>
                </div>
                <div className="w-full h-21 flex">
                    <div className="w-4/6 h-full pt-6 flex flex-col">
                        <Separator width={"w-199"}/>
                        <h4 className='ml-11 mt-2 text-[#929292] italic'>Tip: Joining date is generated automatically.</h4>
                    </div>
                    <div className="w-2/6 h-full flex items-center gap-8 justify-end pr-10">
                        <Button title={"Cancel"} width={"w-36"} secondary={true} onClick={handleShowModal}/>
                        <Button title={"Add Employee"} icon={"/src/assets/employeeAdd-Light.svg"} width={"w-48"} onClick={handleShowModal}/>
                    </div>
                </div>
            </div>
        </div>}
    </>
  )
}

export default AddEmployeeModal