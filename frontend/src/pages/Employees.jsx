import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import EmployeeCard from '../components/EmployeeCard.jsx'
import Pagination from '../components/Pagination.jsx'
import Seperator from '../components/Seperator.jsx'
import Search from '../components/Search.jsx'
import Dropdown from '../components/Dropdown.jsx'
import DropdownInputs from '../components/DropdownModal.jsx'
import DropdownModal from '../components/DropdownModal.jsx'
import Button from '../components/Button.jsx'
import AddEmployeeModal from '../components/AddEmployeeModal.jsx'
import Loading from '../components/Loading.jsx'
import EmployeeDetails from '../components/EmployeeDetails.jsx'
import { useAdminEmployeeStore } from '../store/adminEmployeeStore.js'
import { useUserStore } from '../store/userStore.js'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react'
import EmptyState from '../components/Empty.jsx'

const Employees = () => {
  const { isLoggedIn } = useUserStore()
  const [showModal, setShowModal] = useState(false)
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false)
  const navigate = useNavigate()
  const [showSideBar, setShowSideBar] = useState(false)

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login")
  //     return
  //   }
  // }, [isLoggedIn])

  const [searchName, setSearchName] = useState("")
  const [showPagination, setShowPagination] = useState(true)
  
  const [salaryData, setSalaryData] = useState({
    minSalary: null,
    maxSalary: null
  })

  const [filterData, setFilterData] = useState({
    gender: "",
    workMode: "",
    jobTitle: ""
  })

  const [jobTitleValues, setJobTitleValues] = useState([])

  const {employees, singleEmployeeDetails, employeesCount, totalPages, currentPage, limit, loading, getEmployees, searchEmployee, getEmployeeBySalary, getEmployeeByFilter, getEmployeeDetails} = useAdminEmployeeStore()

  useEffect(() => {
    const callAPI = async()=> {
      const response = await getEmployees()
    }
    callAPI()
  }, [])

  useEffect(() => {
    if(employees && jobTitleValues.length === 0){
      const allJobTitles = [
        ...new Set(
          employees?.map((value) => value.jobTitle)
        )
      ]

      setJobTitleValues(allJobTitles)
    }
  }, [employees])
  

  const handleShowModal = (e) => {
    setShowModal(!showModal)
  }

  const handleSalaryChange = (e) => {
    if(e.target.name == "minSalary"){
      setSalaryData({...salaryData, minSalary: Number(e.target.value)})
    } else {
      setSalaryData({...salaryData, maxSalary: Number(e.target.value)})
    }

    if(salaryData.minSalary || salaryData.maxSalary){
      setShowPagination(false)
    } else {
      setShowPagination(true)
    }
  }
  
  useEffect(() => {
    const callAPI = async()=> {
      if(salaryData.minSalary && salaryData.maxSalary !== null){
        const response = await getEmployeeBySalary(salaryData.minSalary, salaryData.maxSalary)
        console.log(response)
      }
    }
    callAPI()
    console.log(salaryData)
  }, [salaryData])
  
  
  const handleFilterChange = async (e) => {
    const updatedFilters = {
      ...filterData,
      [e.target.name]: e.target.value
    }
    setFilterData(updatedFilters)

    if(updatedFilters){
      setShowPagination(false)
    } else {
      setShowPagination(true)
    }
  
    const params = new URLSearchParams()
  
    if(updatedFilters.gender) params.append("gender", updatedFilters.gender)
    if(updatedFilters.workMode) params.append("workMode", updatedFilters.workMode)
    if(updatedFilters.jobTitle) params.append("jobTitle", updatedFilters.jobTitle)

    console.log(params.toString())
  
    try {
      const response = await getEmployeeByFilter(params)
    } catch (error) {
      toast.error("Something went wrong!")
    }
  }

  const handleSearch = async (e) => {
    const searchValue = e.target.value
    setSearchName(searchValue)
    if(searchValue !== ""){
      setShowPagination(false)
    } else {
      setShowPagination(true)
    }
  }

  useEffect(() => {
      const callApi = async () => {
        await searchEmployee(searchName)
      }
      callApi()
    }, [searchName])

  const handleEmployeeDetails = async (e, empID) => {
    const response = await getEmployeeDetails(empID)
    setShowEmployeeDetails(!showEmployeeDetails)
  }

  const closeEmployeeDetails = (e) => {
    setShowEmployeeDetails(!showEmployeeDetails)
  }

  return (
    <>
      <div className="w-screen min-h-screen relative bg-[#fcfcfe]">
<Toaster position="bottom-center" />
<div className="w-full min-h-screen flex flex-col lg:flex-row">
<div className="hidden lg:block w-87.75 h-screen p-4">
  <Sidebar />
</div>
{showSideBar && (
  <div className="lg:hidden w-80 h-screen p-4 absolute top-0 left-0 z-50 ">
    <Sidebar />
  </div>
)}
  <div className="flex-1 w-full px-4 sm:px-6 lg:px-0">
    <div className="w-full h-14 flex justify-between items-center pt-3">
      <h2 className="text-[1.875rem] font-medium">Manage Employees</h2>
      <div className="block lg:hidden">
          {showSideBar ? (
        <X onClick={() => setShowSideBar(!showSideBar)} />
      ) : (
        <Menu onClick={() => setShowSideBar(!showSideBar)} />
      )}
      </div>
    </div>
    <div className="w-full pt-4 mb-3 min-h-screen lg:min-h-0 lg:mb-0 lg:h-[calc(100vh-3.8rem)] flex items-start lg:pt-[1.15rem]">
      {singleEmployeeDetails && showEmployeeDetails? <EmployeeDetails
       onClick={closeEmployeeDetails} empDetails={singleEmployeeDetails}
       cb={setShowEmployeeDetails}
       /> : <div className="w-full lg:w-384 lg:h-[99%] bg-white border border-[#eaeaea] rounded-[0.9375rem] overflow-visible lg:overflow-hidden">
        <div className="w-full h-10 flex gap-3 items-center pl-7 pt-2">
          <img className='w-8' src="/src/assets/employee-dark.svg" alt="" />
          <h2 className="text-xl font-medium">All Employees</h2>
        </div>
          <div className="w-full flex flex-col xl:flex-row gap-4 xl:gap-0 px-4 sm:px-7 py-4">
            <div className="w-full px-1 xl:w-3/4 flex flex-wrap gap-4 sm:gap-6">
              <Search onChange={handleSearch} />
              <Dropdown
                title={"Gender"}
                values={["Male", "Female"]}
                onChange={handleFilterChange}
                name={"gender"}
              />
              <Dropdown
                title={"Workmode"}
                values={["On-site", "Remote", "Hybrid"]}
                onChange={handleFilterChange}
                name={"workMode"}
              />
              <Dropdown
                title={"Job Title"}
                values={jobTitleValues}
                onChange={handleFilterChange}
                name={"jobTitle"}
              />
              <DropdownModal
                onChange={handleSalaryChange}
              />
            </div>
            <div className="w-full xl:w-1/4 flex xl:justify-end">
              <Button
                title={"Onboard Employee"}
                icon={"/src/assets/employeeAdd-Light.svg"}
                onClick={handleShowModal}
              />
            </div>
          </div>
          <Seperator marginY={"my-2"} width="w-369" />
          {loading && <Loading />}
          <div className="w-full min-h-120 justify-items-center lg:h-[calc(100%-13rem)] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-7 overflow-y-visible lg:overflow-y-auto px-4 sm:px-7 py-4">
            {employees?.map((value) => {
              return (
                <EmployeeCard
                  key={value?._id}
                  firstName={value?.firstName}
                  lastName={value?.lastName}
                  email={value?.email}
                  avatar={value?.avatar}
                  gender={value?.gender}
                  empID={value?.empID}
                  jobTitle={value?.jobTitle}
                  salary={value?.salary}
                  salaryCurrency={value?.salaryCurrency}
                  func={handleEmployeeDetails}
                  workMode={value?.workMode}
                />
              );
            })}
            <div className="col-span-full flex items-center justify-center min-h-80 lg:mt-[1.9rem]">
              <EmptyState title='No Employees Available'/>
            </div>
          </div>
          <div className="w-full min-h-15 flex justify-center items-center px-4 py-4 bg-white">
            {showPagination && employees && <Pagination />}
          </div>
        </div>
      }
    </div>
  </div>
</div>
{showModal && (
  <div className="fixed inset-0 z-50 w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md px-4">
    <AddEmployeeModal handleShowModal={handleShowModal} />
  </div>
)}
</div>
    </>
  )
}

export default Employees