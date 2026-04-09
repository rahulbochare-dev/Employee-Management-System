import React, { useState } from 'react'
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

const Employees = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = (e) => {
    setShowModal(!showModal)
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
                    <Search />
                    <Dropdown title={"Gender"} values={["Male", "Female"]} />
                    <Dropdown title={"Workmode"} values={["On-Site", "Remote", "Hybrid"]} />
                    <DropdownModal />
                  </div>
                  <div className='h-full w-1/4 pr-7 flex justify-end items-center'>
                    <Button title={"Onboard Employee"} icon={"/src/assets/employeeAdd-Light.svg"} onClick={handleShowModal} />
                  </div>
                </div>
                <Seperator marginY={"my-2"} width='w-369' />
                <div className="w-full h-170 grid grid-cols-4 gap-y-7 justify-center items-center overflow-y-scroll pl-7 pt-3">
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                  <EmployeeCard/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && <div className="w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md fixed inset-0">
          <AddEmployeeModal handleShowModal={handleShowModal} />
        </div>}
      </div>
    </>
  )
}

export default Employees