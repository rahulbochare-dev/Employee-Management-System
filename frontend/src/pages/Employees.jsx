import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import EmployeeCard from '../components/EmployeeCard.jsx'
import Seperator from '../components/Seperator.jsx'
import Search from '../components/Search.jsx'
import Dropdown from '../components/Dropdown.jsx'
import DropdownInputs from '../components/DropdownInputs.jsx'

const Employees = () => {
  return (
    <>
      <div className="w-screen h-screen flex bg-[#f9f9f9]">
        <div className="w-87.75 h-screen p-4">
          <Sidebar />
        </div>
        <div className="w-392.75 h-screen">
          <div className="w-full h-22 flex justify-between items-center pr-6 border-b border-[#b6b6b6]">
            <WelcomeText />
            <DateTime />
          </div>
          <div className="w-full h-15.25  flex items-baseline-last">
              <h2 className="text-[1.875rem] font-semibold">Manage Employees</h2>
            </div>
          <div className="w-full h-196 flex items-baseline-last">
            <div className="w-384 h-[98%] bg-white border border-[#b6b6b6] rounded-[0.9375rem]">
              <div className="w-full h-10 flex gap-3 items-center pl-7 pt-2">
                <img className='w-8' src="/src/assets/employee-dark.svg" alt="" />
                <h2 className="text-xl font-semibold">All Employees</h2>
              </div>
              <div className="w-full h-15 flex gap-3 items-center pl-7">
                <Search/>
                <Dropdown title={"Gender"} values={["Male", "Female"]}/>
                <Dropdown title={"Workmode"} values={["On-Site", "Remote", "Hybrid"]}/>
              </div>
              <Seperator marginY={"my-2"} width='w-369'/>
              <DropdownInputs/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Employees