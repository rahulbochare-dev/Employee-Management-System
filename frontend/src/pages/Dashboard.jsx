import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'

const Dashboard = () => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-87.75 h-screen bg-red-300 p-4">
          <Sidebar />
        </div>
        <div className="w-392.75 h-screen bg-red-200">
          <div className="w-full h-25.25 bg-blue-300">
            <WelcomeText/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard