import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import SidebarButton from '../components/SidebarButton.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import KPICard from '../components/KPICard.jsx'
import NewJoiningChart from '../components/NewJoiningChart.jsx'
import LeaveChart from '../components/LeaveChart.jsx'

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-87.75 h-screen p-4">
          <Sidebar />
        </div>
        <div className="w-392.75 h-screen">
          <div className="w-full h-25.25 flex justify-between p-5 border-b border-[#b6b6b6]">
            <WelcomeText/>
            <DateTime/>
          </div>
          <div className="w-full h-64 ">
            <div className="w-full h-15.25  flex items-baseline-last">
              <h2 className="text-[1.875rem] font-semibold">Dashboard</h2>
            </div>
            <div className="w-full h-48.25 flex items-center gap-12">
              <KPICard/>
              <KPICard/>
              <KPICard/>
              <KPICard/>
            </div>
          </div>
          <div className="w-full h-[36.2rem] flex justify-between pr-8">
            <NewJoiningChart/>
            <LeaveChart/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard