import React, { useState } from 'react'
import Separator from './Seperator.jsx'
import TextInput from './TextInput.jsx'
import DropdownAddEmployee from './DropdownAddEmployee.jsx'
import countries from "../data/contries.json";
import FileSelect from './FileSelect.jsx';
import Button from './Button.jsx';
import DateSelect from './DateSelect.jsx';
import { useAdminEmployeeStore } from '../store/adminEmployeeStore.js'
import { Toaster, toast } from 'react-hot-toast';

const AddEmployeeModal = ({ handleShowModal }) => {
    const {onboardEmployee} = useAdminEmployeeStore()

    const [formData, setFormData] = useState({
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
        avatar: File,
        gender: "",
        country: "",
        workMode: "",
        empType: "",
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const submitData = new FormData()

        submitData.append("empID", formData.empID)
        submitData.append("firstName", formData.firstName)
        submitData.append("middleName", formData.middleName)
        submitData.append("lastName", formData.lastName)
        submitData.append("email", formData.email)
        submitData.append("gender", formData.gender)
        submitData.append("contactNo", formData.contactNo)
        submitData.append("avatar", formData.avatar)
        submitData.append("dateOfBirth", formData.dateOfBirth)
        submitData.append("country", formData.country)
        submitData.append("city", formData.city)
        submitData.append("postalCode", formData.postalCode)
        submitData.append("education", formData.education)
        submitData.append("address", formData.address)
        submitData.append("role", formData.role)
        submitData.append("workMode", formData.workMode)
        submitData.append("empType", formData.empType)
        submitData.append("salary", formData.salary)
        submitData.append("salaryCurrency", formData.salaryCurrency)
        submitData.append("password", formData.password)

        try {
            const response = await onboardEmployee(submitData)
            console.log(response)
            if(response.success){
                toast.success(response.message)
                handleShowModal()
            }
        } catch (error) {
            if(error.statusCode == 500){
                toast.error("Internal server error!")
            }
            toast.error(error.message)
        }
    }

    return (
        <>
            <div className="w-screen h-screen z-10 flex justify-center items-center">
                <Toaster position='bottom-center'/>
                <div className="w-330.5 h-173 bg-white border border-[#b6b6b6] rounded-2xl overflow-clip">
                    <div className="w-full h-15 flex items-center pt-5">
                        <h1 className='text-[1.75rem] font-semibold pl-10'>Onboard Employee</h1>
                    </div>
                    <Separator marginY={"my-4"} width={"w-310"} />
                    <form onSubmit={handleFormSubmit} className='w-full h-full'>
                        <div className="w-full h-128 grid grid-cols-4 grid-rows-5 pl-10">
                            <TextInput label={"Emp ID:"} placeholder={"Emp ID"}
                                onChange={(e) => (setFormData({ ...formData, empId: e.target.value }))} />
                            <TextInput label={"Contact No:"} placeholder={"Contact No"}
                                onChange={(e) => (setFormData({ ...formData, contactNo: e.target.value }))} />
                            <TextInput label={"City:"} placeholder={"City"}
                                onChange={(e) => (setFormData({ ...formData, city: e.target.value }))} />
                            <TextInput label={"Salary:"} placeholder={"Salary"}
                                onChange={(e) => (setFormData({ ...formData, salary: e.target.value }))} />
                            <TextInput label={"First Name:"} placeholder={"First Name"}
                                onChange={(e) => (setFormData({ ...formData, firstName: e.target.value }))} />
                            <TextInput label={"Postal Code:"} placeholder={"Postal Code"}
                                onChange={(e) => (setFormData({ ...formData, postalCode: e.target.value }))} />
                            <TextInput label={"Education:"} placeholder={"Education"}
                                onChange={(e) => (setFormData({ ...formData, education: e.target.value }))} />
                            <TextInput label={"Salary Currency:"} placeholder={"Salary Currency"}
                                onChange={(e) => (setFormData({ ...formData, salaryCurrency: e.target.value }))} />
                            <TextInput label={"Middle Name:"} placeholder={"Middle Name"}
                                onChange={(e) => (setFormData({ ...formData, middleName: e.target.value }))} />
                            <TextInput label={"Email:"} placeholder={"Email"}
                                onChange={(e) => (setFormData({ ...formData, email: e.target.value }))} />
                            <TextInput label={"Address:"} placeholder={"Address"}
                                onChange={(e) => (setFormData({ ...formData, address: e.target.value }))} />
                            <TextInput label={"Password:"} placeholder={"Password"}
                                onChange={(e) => (setFormData({ ...formData, password: e.target.value }))} />
                            <TextInput label={"Last Name:"} placeholder={"Last Name"}
                                onChange={(e) => (setFormData({ ...formData, lastName: e.target.value }))} />
                            <DateSelect label={"Date of Birth:"}
                                onChange={(e) => (setFormData({ ...formData, dateOfBirth: e.target.value }))}/>
                            <TextInput label={"Role:"} placeholder={"Role"}
                                onChange={(e) => (setFormData({ ...formData, role: e.target.value }))} />
                            <FileSelect label={"Avatar:"} placeholder={"Choose Avatar"}
                                onChange={(file) => (setFormData({ ...formData, avatar: file }))} />
                            <DropdownAddEmployee label={"Gender:"} title={"Gender"} values={["Male", "Female"]}
                                onChange={(e) => (setFormData({ ...formData, gender: e.target.value }))} />
                            <DropdownAddEmployee label={"Country:"} title={"Country"} values={countries}
                                onChange={(e) => (setFormData({ ...formData, country: e.target.value }))} />
                            <DropdownAddEmployee label={"Workmode:"} title={"Workmode"} values={["On-Site", "Remote", "Hybrid"]}
                                onChange={(e) => (setFormData({ ...formData, workMode: e.target.value }))} />
                            <DropdownAddEmployee label={"Employement Type:"} title={"Employement Type"} values={["Full Time", "Contract", "Freelance", "Intern"]}
                                onChange={(e) => (setFormData({ ...formData, empType: e.target.value }))} />
                        </div>
                        <div className="w-full h-21 flex">
                            <div className="w-4/6 h-full pt-6 flex flex-col">
                                <Separator width={"w-199"} />
                                <h4 className='ml-11 mt-2 text-[#929292] italic'>Tip: Joining date is generated automatically.</h4>
                            </div>
                            <div className="w-2/6 h-full flex items-center gap-8 justify-end pr-10">
                                <Button title={"Cancel"} type={"button"} width={"w-36"} secondary={true} onClick={handleShowModal} />
                                <Button title={"Add Employee"} type={"submit"} icon={"/src/assets/employeeAdd-Light.svg"} width={"w-48"} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddEmployeeModal