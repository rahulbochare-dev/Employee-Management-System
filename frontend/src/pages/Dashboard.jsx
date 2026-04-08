import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import KPICard from '../components/KPICard.jsx'
import NewJoiningChart from '../components/NewJoiningChart.jsx'
import LeaveChart from '../components/LeaveChart.jsx'
import InsightCard from '../components/InsightCard.jsx'

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen flex bg-[#f9f9f9]">
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
                mainIcon={"/src/assets/employeeAdd-Dark.svg"}
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
          <div className="w-full h-36 flex items-baseline-last">
            <div className="w-384 h-[90%] bg-white border border-[#b6b6b6] rounded-2xl flex justify-evenly items-center">
              <InsightCard
                title={"Total Payroll this Month"}
                icon={"/src/assets/dollar.svg"}
                iconBgColor={"bg-[#6464FF]/15 "}
                data={"$10,32,398"}/>
              <InsightCard
                title={"Total Payroll this Month"}
                icon={"/src/assets/globe.svg"}
                iconBgColor={"bg-[#A32AFF]/15 "}
                data={"India - 48%"}/>
              <InsightCard
                title={"Total Payroll this Month"}
                icon={"/src/assets/home-office.svg"}
                iconBgColor={"bg-[#00B212]/15 "}
                data={"35% / 65%"}/>
              <InsightCard
                title={"Total Payroll this Month"}
                icon={"/src/assets/dollar.svg"}
                iconBgColor={"bg-[#FF824B]/15 "}
                data={"$10,32,398"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard