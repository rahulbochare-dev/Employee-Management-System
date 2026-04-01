import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import KPICard from '../components/KPICard.jsx'

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
          <div className="w-full h-63.5 ">
            <div className="w-full h-15.25  flex items-baseline-last">
              <h2 className="text-[1.875rem] font-semibold">Dashboard</h2>
            </div>
            <div className="w-full h-48.25  flex items-center gap-12">
              <KPICard/>
              <KPICard/>
              <KPICard/>
              <KPICard/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard