import React, { useState } from "react";
import Separator from "./Seperator.jsx";
import TextInput from "./TextInput.jsx";
import DropdownAddEmployee from "./DropdownAddEmployee.jsx";
import FileSelect from "./FileSelect.jsx";
import Button from "./Button.jsx";
import DateSelect from "./DateSelect.jsx";
import countries from "../data/contries.json";
import { useAdminEmployeeStore } from "../store/adminEmployeeStore.js";
import { Toaster, toast } from "react-hot-toast";

const AddEmployeeModal = ({ handleShowModal }) => {
  const { onboardEmployee } = useAdminEmployeeStore();

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
    jobTitle: "",
    avatar: File,
    gender: "",
    country: "",
    workMode: "",
    empType: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();

    submitData.append("empID", formData.empID);
    submitData.append("firstName", formData.firstName);
    submitData.append("middleName", formData.middleName);
    submitData.append("lastName", formData.lastName);
    submitData.append("email", formData.email);
    submitData.append("gender", formData.gender);
    submitData.append("contactNo", formData.contactNo);
    submitData.append("avatar", formData.avatar);
    submitData.append("dateOfBirth", formData.dateOfBirth);
    submitData.append("country", formData.country);
    submitData.append("city", formData.city);
    submitData.append("postalCode", formData.postalCode);
    submitData.append("education", formData.education);
    submitData.append("address", formData.address);
    submitData.append("jobTitle", formData.jobTitle);
    submitData.append("workMode", formData.workMode);
    submitData.append("empType", formData.empType);
    submitData.append("salary", formData.salary);
    submitData.append("salaryCurrency", formData.salaryCurrency);
    submitData.append("password", formData.password);

    try {
      const response = await onboardEmployee(submitData);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-10 flex justify-center items-start sm:items-center px-3 sm:px-4 py-4 overflow-y-auto">
        <Toaster position="bottom-center" />
        <div className="w-full max-w-330.5 bg-white border border-[#eaeaea] rounded-2xl overflow-hidden my-auto">
          <div className="w-full min-h-15 flex items-center pt-5 px-5 sm:px-10">
            <h1 className="text-2xl sm:text-[1.75rem] font-semibold">Onboard Employee</h1>
          </div>
          <Separator marginY={"my-4"} width={"w-full"} />
          <form onSubmit={handleFormSubmit} className="w-full h-full">
            <div className="w-full grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 px-5 sm:px-10 pb-6">
              <TextInput
                label={"Emp ID:"}
                placeholder={"Emp ID"}
                onChange={(e) =>
                  setFormData({ ...formData, empId: e.target.value })
                }/>
              <TextInput
                label={"Contact No:"}
                placeholder={"Contact No"}
                onChange={(e) =>
                  setFormData({ ...formData, contactNo: e.target.value })
                }/>
              <TextInput
                label={"City:"}
                placeholder={"City"}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }/>
              <TextInput
                label={"Salary:"}
                placeholder={"Salary"}
                onChange={(e) =>
                  setFormData({ ...formData, salary: e.target.value })
                }/>
              <TextInput
                label={"First Name:"}
                placeholder={"First Name"}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }/>
              <TextInput
                label={"Postal Code:"}
                placeholder={"Postal Code"}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }/>
              <TextInput
                label={"Education:"}
                placeholder={"Education"}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }/>
              <TextInput
                label={"Salary Currency:"}
                placeholder={"Salary Currency"}
                onChange={(e) =>
                  setFormData({ ...formData, salaryCurrency: e.target.value })
                }/>
              <TextInput
                label={"Middle Name:"}
                placeholder={"Middle Name"}
                onChange={(e) =>
                  setFormData({ ...formData, middleName: e.target.value })
                }/>
              <TextInput
                label={"Email:"}
                placeholder={"Email"}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }/>
              <TextInput
                label={"Address:"}
                placeholder={"Address"}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }/>
              <TextInput
                label={"Password:"}
                placeholder={"Password"}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }/>
              <TextInput
                label={"Last Name:"}
                placeholder={"Last Name"}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }/>
              <DateSelect
                label={"Date of Birth:"}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }/>
              <TextInput
                label={"Job Title:"}
                placeholder={"Job Title"}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }/>
              <FileSelect
                label={"Avatar:"}
                placeholder={"Choose Avatar"}
                onChange={(file) => setFormData({ ...formData, avatar: file })}/>
              <DropdownAddEmployee
                label={"Gender:"}
                title={"Gender"}
                values={["Male", "Female"]}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }/>
              <DropdownAddEmployee
                label={"Country:"}
                title={"Country"}
                values={countries}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }/>
              <DropdownAddEmployee
                label={"Workmode:"}
                title={"Workmode"}
                values={["On-Site", "Remote", "Hybrid"]}
                onChange={(e) =>
                  setFormData({ ...formData, workMode: e.target.value })
                }/>
              <DropdownAddEmployee
                label={"Employement Type:"}
                title={"Employement Type"}
                values={["Full Time", "Contract", "Freelance", "Intern"]}
                onChange={(e) =>
                  setFormData({ ...formData, empType: e.target.value })
                }/>
            </div>
            <div className="w-full flex flex-col xl:flex-row border-t border-[#eaeaea]">
              <div className="w-full xl:w-4/6 py-4 sm:py-6 flex flex-col justify-center">
                <h4 className="px-5 sm:px-11 text-sm sm:text-base text-[#929292] italic">
                  Tip: Joining date is generated automatically.
                </h4>
              </div>
              <div className="w-full xl:w-2/6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 xl:gap-8 justify-end px-5 sm:px-10 py-5">
                <Button
                  title={"Cancel"}
                  type={"button"}
                  width={"w-full sm:w-36"}
                  secondary={true}
                  onClick={handleShowModal}/>
                <Button
                  title={"Add Employee"}
                  type={"submit"}
                  icon={"/src/assets/employeeAdd-Light.svg"}
                  width={"w-full sm:w-48"}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmployeeModal;
