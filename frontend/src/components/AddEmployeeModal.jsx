import React, { useState } from 'react'
import Separator from './Seperator.jsx'
import TextInput from './TextInput.jsx'
import DropdownAddEmployee from './DropdownAddEmployee.jsx'
import countries from "../data/contries.json";
import FileSelect from './FileSelect.jsx';
import Button from './Button.jsx';

const AddEmployeeModal = ({ handleShowModal }) => {
  const [showModal, setShowModal] = useState(true)

  const [formData, setFromData] = useState([{
          empId: "",
          contactNo: "",
          city: "",
          salary: "",
          firstName: "",
          postalCode: "",
          education: "",
          salaryCurrency: "",
          middleName: "",
          email: "",
          address: "",
          password: "",
          lastName: "",
          dateOfBirth: "",
          role: "",
          avatar: "",
          gender: "",
          country: "",
          workMode: "",
          empType: "",
      }])

      const handleFormSubmit = async(e) => {
          e.preventDefault()

          const submitData = new FormData()
          for (const values of formData) {
              console.log(values)
        }
        
    }
    
  return (
    <>
        {showModal && <div className="w-screen h-screen z-10 flex justify-center items-center">
            <div className="w-330.5 h-173 bg-white border border-[#b6b6b6] rounded-2xl overflow-clip">
                <div className="w-full h-15 flex items-center pt-5">
                    <h1 className='text-[1.75rem] font-semibold pl-10'>Onboard Employee</h1>
                </div>
                <Separator marginY={"my-4"} width={"w-310"}/>
                <form onSubmit={handleFormSubmit} className='w-full h-full'>
                    <div className="w-full h-128 grid grid-cols-4 grid-rows-5 pl-10">
                    <TextInput label={"Emp ID:"} placeholder={"Emp ID"}
                        onChange={(e) => (setFromData({ ...formData, empId: e.target.value }))}/>
                    <TextInput label={"Contact No:"} placeholder={"Contact No"}
                        onChange={(e) => (setFromData({ ...formData, contactNo: e.target.value }))}/>
                    <TextInput label={"City:"} placeholder={"City"}
                        onChange={(e) => (setFromData({ ...formData, city: e.target.value }))}/>
                    <TextInput label={"Salary:"} placeholder={"Salary"}
                        onChange={(e) => (setFromData({ ...formData, salary: e.target.value }))}/>
                    <TextInput label={"First Name:"} placeholder={"First Name"}
                        onChange={(e) => (setFromData({ ...formData, firstName: e.target.value }))}/>
                    <TextInput label={"Postal Code:"} placeholder={"Postal Code"}
                        onChange={(e) => (setFromData({ ...formData, postalCode: e.target.value }))}/>
                    <TextInput label={"Education:"} placeholder={"Education"}
                        onChange={(e) => (setFromData({ ...formData, education: e.target.value }))}/>
                    <TextInput label={"Salary Currency:"} placeholder={"Salary Currency"}
                        onChange={(e) => (setFromData({ ...formData, salaryCurrency: e.target.value }))}/>
                    <TextInput label={"Middle Name:"} placeholder={"Middle Name"}
                        onChange={(e) => (setFromData({ ...formData, middleName: e.target.value }))}/>
                    <TextInput label={"Email:"} placeholder={"Email"}
                        onChange={(e) => (setFromData({ ...formData, email: e.target.value }))}/>
                    <TextInput label={"Address:"} placeholder={"Address"}
                        onChange={(e) => (setFromData({ ...formData, address: e.target.value }))}/>
                    <TextInput label={"Password:"} placeholder={"Password"}
                        onChange={(e) => (setFromData({ ...formData, password: e.target.value }))}/>
                    <TextInput label={"Last Name:"} placeholder={"Last Name"}
                        onChange={(e) => (setFromData({ ...formData, lastName: e.target.value }))}/>
                    <TextInput label={"Date of Birth:"} placeholder={"Date of Birth"}
                        onChange={(e) => (setFromData({ ...formData, dob: e.target.value }))}/>
                    <TextInput label={"Role:"} placeholder={"Role"}
                        onChange={(e) => (setFromData({ ...formData, role: e.target.value }))}/>
                    <FileSelect label={"Avatar:"} placeholder={"Choose Avatar"}
                        onChange={(e) => (setFromData({ ...formData, avatar: e.target.value }))}/>
                    <DropdownAddEmployee label={"Gender:"} title={"Gender"} values={["Male", "Female"]}
                        onChange={(e) => (setFromData({ ...formData, gender: e.target.value }))}/>
                    <DropdownAddEmployee label={"Country:"} title={"Country"} values={countries}
                        onChange={(e) => (setFromData({ ...formData, country: e.target.value }))}/>
                    <DropdownAddEmployee label={"Workmode:"} title={"Workmode"} values={["On-Site", "Remote", "Hybrid"]}
                        onChange={(e) => (setFromData({ ...formData, workMode: e.target.value }))}/>
                    <DropdownAddEmployee label={"Employement Type:"} title={"Employement Type"} values={["Full Time", "Contract", "Freelance", "Intern"]}
                        onChange={(e) => (setFromData({ ...formData, empType: e.target.value }))}/> 
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
                </form>
            </div>
        </div>}
    </>
  )
}

export default AddEmployeeModal