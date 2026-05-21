import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Search from '../components/Search.jsx'
import Dropdown from '../components/Dropdown.jsx'
import Seperator from '../components/Seperator.jsx'
import LeaveCard from '../components/LeaveCard.jsx'
import { useAdminLeaveStore } from '../store/adminLeaveStore.js'

const Leaves = () => {
  const {getLeaves, leaves} = useAdminLeaveStore()
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const callApi = async () => {
      const response = await getLeaves()
    }

    callApi()
  }, [])

  const handleStatusChange = async (e) => {
    const updatedStatus = {
      ...status,
      [e.target.name]: e.target.value
    }
    setStatus(updatedStatus)
    
    try {
      const response = await getLeaves(status)
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
       <div className="w-screen h-screen relative">
        <div className="w-screen h-screen flex bg-[#f9f9f9]">
          <div className="w-87.75 h-screen p-4">
            <Sidebar />
          </div>
          <div className="w-392.75 h-screen">
            <div className="w-full h-15.25 flex justify-between items-center pr-10 pt-3">
              <h2 className="text-[1.875rem] font-semibold">Manage Leaves</h2>
            </div>
            <div className="w-full h-219 flex items-baseline-last">
              <div className="w-384 h-[98%] bg-white border border-[#b6b6b6] rounded-[0.9375rem] overflow-clip">
                <div className="w-full h-10 flex gap-3 items-center pl-7 pt-2">
                  <img className='w-8' src="/src/assets/leave-dark.svg" alt="" />
                  <h2 className="text-xl font-semibold">All Leaves</h2>
                </div>
                <div className="w-full h-15 flex gap-3 items-center pl-7">
                  <div className="h-full w-3/4 flex justify-start items-center gap-6">
                    <Search />
                    <Dropdown title={"status"} values={["Pending", "Rejected", "Approved"]} onChange={handleStatusChange} name={"status"}/>
                  </div>
                </div>
                <Seperator marginY={"my-2"} width='w-369' />
                <div className="w-full h-170 grid grid-cols-4 gap-y-7 justify-center overflow-y-scroll pl-7 pt-3">
                  {leaves?.map((value) => {
                    return <LeaveCard key={value._id} leave={value}/>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leaves