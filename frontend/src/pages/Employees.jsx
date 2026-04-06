import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'

const Employees = () => {
  return (
    <>
      <div className="w-screen h-screen flex bg-[#f5f5f5]">
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
        </div>
      </div>
    </>
  )
}

export default Employees