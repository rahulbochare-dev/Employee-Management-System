import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import EmployeeCard from '../components/EmployeeCard.jsx'
import Seperator from '../components/Seperator.jsx'
import Search from '../components/Search.jsx'
import Dropdown from '../components/Dropdown.jsx'
import DropdownInputs from '../components/DropdownModal.jsx'
import DropdownModal from '../components/DropdownModal.jsx'
import Button from '../components/Button.jsx'
import AddEmployeeModal from '../components/AddEmployeeModal.jsx'
import Loading from '../components/Loading.jsx'
import { useAdminEmployeeStore } from '../store/adminEmployeeStore.js'

const Employees = () => {
  const [showModal, setShowModal] = useState(false)

  const [searchData, setSearchData] = useState({
    firstName: "",
    lastName: ""
  })
  
  const [salaryData, setSalaryData] = useState({
    minSalary: null,
    maxSalary: null
  })

  const {employees, employeesCount, totalPages, currentPage, limit, loading, getEmployees, searchEmployee, getEmployeeBySalary, getEmployeeByFilter} = useAdminEmployeeStore()

  useEffect(() => {
    const callAPI = async()=> {
      const response = await getEmployees()
    }
    callAPI()
  }, [])

  const handleShowModal = (e) => {
    setShowModal(!showModal)
  }

  const handleSalaryChange = (e) => {
    if(e.target.name == "minSalary"){
      setSalaryData({...salaryData, minSalary: e.target.value})
    } else {
      setSalaryData({...salaryData, maxSalary: e.target.value})
    }
    
    const callAPI = async()=> {
      const response = await getEmployeeBySalary(salaryData.minSalary, salaryData.maxSalary)
      console.log(response)
    }
    callAPI()
  }
  
  const handleGenderChange = (e) => {
    const params = new URLSearchParams()

    const genderValue = e.target.value
    const workMode = e.target.value
    const role = e.target.value

    if(genderValue) params.genderValue = genderValue
    if(workMode) params.workMode = workMode
    if(role) params.role = role

    const callAPI = async()=> {
      const response = await getEmployeeByFilter(params)
      console.log(response)
    }
    callAPI()
  }

  return (
    <>
      <div className="w-screen h-screen relative">
        <div className="w-screen h-screen flex bg-[#f9f9f9]">
          <div className="w-87.75 h-screen p-4">
            <Sidebar />
          </div>
          <div className="w-392.75 h-screen">
            <div className="w-full h-15.25 flex items-baseline-last">
              <h2 className="text-[1.875rem] font-semibold">Manage Employees</h2>
            </div>
            <div className="w-full h-219 flex items-baseline-last">
              <div className="w-384 h-[98%] bg-white border border-[#b6b6b6] rounded-[0.9375rem] overflow-clip">
                <div className="w-full h-10 flex gap-3 items-center pl-7 pt-2">
                  <img className='w-8' src="/src/assets/employee-dark.svg" alt="" />
                  <h2 className="text-xl font-semibold">All Employees</h2>
                </div>
                <div className="w-full h-15 flex gap-3 items-center pl-7">
                  <div className="h-full w-3/4 flex justify-start items-center gap-6">
                    <Search 
                      onChange={(e) => (setSearchData({ ...searchData, firstName: e.target.value, lastName: e.target.value }))}
                      />
                    <Dropdown title={"Gender"} values={["Male", "Female"]} onChange={handleGenderChange}/>
                    <Dropdown title={"Workmode"} values={["On-Site", "Remote", "Hybrid"]} />
                    <DropdownModal
                      onChange={handleSalaryChange}
                    />
                  </div>
                  <div className='h-full w-1/4 pr-7 flex justify-end items-center'>
                    <Button title={"Onboard Employee"} icon={"/src/assets/employeeAdd-Light.svg"} onClick={handleShowModal} />
                  </div>
                </div>
                <Seperator marginY={"my-2"} width='w-369' />
                {loading && <Loading/>}
                <div className="w-full h-170 grid grid-cols-4 gap-y-7 justify-center items-center overflow-y-scroll pl-7 pt-3">
                  {employees?.map((value) => {
                   return <EmployeeCard
                      key={value._id}
                      firstName={value.firstName}
                      lastName={value.lastName}
                      email={value.email}
                      address={value.address}
                      dateOfBirth={value.dateOfBirth}
                      role={value.role}
                      salary={value.salary}
                      workMode={value.workMode}
                    />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && <div className="w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md fixed inset-0">
          {showModal && <AddEmployeeModal handleShowModal={handleShowModal} />}
        </div>}
      </div>
    </>
  )
}

export default Employees