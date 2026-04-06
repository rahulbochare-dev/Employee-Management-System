import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import KPICard from '../components/KPICard.jsx'
import NewJoiningChart from '../components/NewJoiningChart.jsx'
import LeaveChart from '../components/LeaveChart.jsx'

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen flex bg-[#f5f5f5]">
        <div className="w-87.75 h-screen p-4">
          <Sidebar />
        </div>
        <div className="w-392.75 h-screen">
          <div className="w-full h-22 flex justify-between items-center pr-6 border-b border-[#b6b6b6]">
            <WelcomeText/>
            <DateTime/>
          </div>
          <div className="w-full h-64 ">
            <div className="w-full h-15.25  flex items-baseline-last">
              <h2 className="text-[1.875rem] font-semibold">Dashboard</h2>
            </div>
            <div className="w-full h-48.25 flex items-center gap-12">
              <KPICard
                title={"Total Employees"}
                mainIcon={"/src/assets/employee-dark.svg"}
                icon2={"/src/assets/male.svg"}
                icon3={"/src/assets/female.svg"}
                icon2Text={"Male"}
                icon3Text={"Female"}/>
              <KPICard
                title={"On Leave Today"}
                mainIcon={"/src/assets/leave-dark.svg"}
                icon2={"/src/assets/sick.svg"}
                icon3={"/src/assets/casual.svg"}
                icon2Text={"Sick"}
                icon3Text={"Casual"}/>
              <KPICard
                title={"Hires this Month"}
                mainIcon={"/src/assets/employeeAdd.svg"}
                icon2={"/src/assets/male.svg"}
                icon3={"/src/assets/female.svg"}
                icon2Text={"Male"}
                icon3Text={"Female"}/>
              <KPICard
                title={"Leave Requests"}
                mainIcon={"/src/assets/leave-dark.svg"}
                icon2={"/src/assets/sick.svg"}
                icon3={"/src/assets/casual.svg"}
                icon2Text={"Sick"}
                icon3Text={"Casual"}/>
            </div>
          </div>
          <div className="w-full h-112 flex justify-between pr-8 pt-5">
            <NewJoiningChart/>
            <LeaveChart/>
          </div>
          <div className="w-full h-36 bg-red-200"></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard