import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import WelcomeText from '../components/WelcomeText.jsx'
import DateTime from '../components/DateTime.jsx'
import KPICard from '../components/KPICard.jsx'
import NewJoiningChart from '../components/NewJoiningChart.jsx'
import LeaveChart from '../components/LeaveChart.jsx'
import InsightCard from '../components/InsightCard.jsx'
import Seperator from '../components/Seperator.jsx'
import { useUserStore } from '../store/userStore.js'
import { useDashboardStore } from '../store/dashboardStore.js'
import { Form, Link, useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react'

const Dashboard = () => {
  const { user } = useUserStore()
  const { totalEmployees, onLeaveToday, newJoines, pendingLeave, lastWeeksLeaves, mostEmployeeCountry, totalPayrollThisMonth, employeeGenderRatioPercent, averageEmployeeAge, newJoinesByMonth, getKPIData } = useDashboardStore()
  const navigate = useNavigate()
  const [showSideBar, setShowSideBar] = useState(false)
  
  const [KPICardFirst, setKPICardFirst] = useState({
    mainCount: null ,
    icon2Count: null,
    icon3Count: null
  })
  const [KPICardSecond, setKPICardSecond] = useState({
    mainCount: null ,
    icon2Count: null,
    icon3Count: null
  })
  const [KPICardThird, setKPICardThird] = useState({
    mainCount: null ,
    icon2Count: null,
    icon3Count: null
  })
  const [KPICardForth, setKPICardForth] = useState({
    mainCount: null ,
    icon2Count: null,
    icon3Count: null
  })
  
  useEffect(() => {
    // if (!user) {
    //   navigate("/login")
    //   return
    // }
    getKPIData()
  }, [user])
  
  useEffect(() => {
    if(!totalEmployees || !onLeaveToday || !newJoines || !pendingLeave) return
    
    setKPICardFirst({
      mainCount: totalEmployees?.data[0]?.totalEmplyees[0]?.totalEmployees,
      icon2Count: totalEmployees?.data[0]?.genderTotal[1]?.total,
      icon3Count: totalEmployees?.data[0]?.genderTotal[0]?.total
    })
    setKPICardSecond({
      mainCount: onLeaveToday?.data[0]?.todayTotalLeaves[0]?.totalLeaves,
      icon2Count: onLeaveToday?.data[0]?.catagoryTotal[1]?.catagoryTotal,
      icon3Count: onLeaveToday?.data[0]?.catagoryTotal[0]?.catagoryTotal
    })
    setKPICardThird({
      mainCount: newJoines?.data[0]?.totalNewJoines[0]?.totalNewJoines,
      icon2Count: newJoines?.data[0]?.genderWiseTotal[1]?.total,
      icon3Count: newJoines?.data[0]?.genderWiseTotal[0]?.total
    })
    setKPICardForth({
      mainCount: pendingLeave?.data[0]?.allCatagoryTotal[0]?.totalLeaves,
      icon2Count: pendingLeave?.data[0]?.catagoryTotal[1]?.total,
      icon3Count: pendingLeave?.data[0]?.catagoryTotal[0]?.total
    })
  }, [totalEmployees, onLeaveToday, newJoines, pendingLeave])

  const totalPayroll = {
    value1: totalPayrollThisMonth?.totalPayrollThisMonth,
    value2: totalPayrollThisMonth?.salaryCurrency
  }

  const employeeCountry = {
    value1: mostEmployeeCountry?.mostEmployeeCountry,
    value2: mostEmployeeCountry?.mostEmployeeCountryPercent
  }

  const genderRatioPercent = {
    value1: employeeGenderRatioPercent?.malePercent,
    value2: employeeGenderRatioPercent?.femalePercent
  }

  const averageAge = {
    value1: "Average age",
    value2: averageEmployeeAge?.averageAge
  }
  console.log(lastWeeksLeaves?.data.lastWeekLeavesformatted)  
  console.log(newJoinesByMonth)  
  return (
    <>
      <div className="w-full min-h-screen mb-3 lg:mb-0 lg:h-svh flex flex-col lg:flex-row bg-[#fcfcfe] lg:overflow-hidden">
      <div className="hidden lg:block w-87.75 h-screen p-4">
  <Sidebar />
</div>

{showSideBar && (
  <div className="lg:hidden w-80 h-screen p-4 absolute top-0 left-0 z-50 ">
    <Sidebar />
  </div>
)}
        <div className='flex-1 min-h-screen lg:h-svh bg-[#fcfcfe] px-3 sm:pr-5 relative overflow-y-visible lg:overflow-y-auto'>
        <div className="w-full min-h-22 flex items-center border-b border-[#eaeaea] sm:flex-row justify-between sm:items-center pr-0 lg:pr-6 py-4 gap-3">
    <div className='w-fit h-fit'>
      <WelcomeText name={user?.firstName}/>
    </div>

    <div className="block lg:hidden">
    {showSideBar ? (
  <X onClick={() => setShowSideBar(!showSideBar)} />
) : (
  <Menu onClick={() => setShowSideBar(!showSideBar)} />
)}
</div>

    <div className="hidden lg:block w-fit h-fit">
      <DateTime/>
    </div>
</div>
          <div className="w-full h-fit pb-4">
            <div className="w-full h-15.25 flex items-center">
              <h2 className="text-[1.875rem] font-medium">Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 pt-1 xl:grid-cols-3 2xl:grid-cols-4 gap-16">
              <KPICard
                title={"Total Employees"}
                mainIcon={"/src/assets/employee-dark.svg"}
                icon2={"/src/assets/male.svg"}
                icon3={"/src/assets/female.svg"}
                icon2Text={"Male"}
                mainCount={KPICardFirst.mainCount}
                icon2Count={KPICardFirst.icon2Count}
                icon3Count={KPICardFirst.icon3Count}
                icon3Text={"Female"}/>
              <KPICard
                title={"On Leave Today"}
                mainIcon={"/src/assets/leave-dark.svg"}
                icon2={"/src/assets/sick.svg"}
                icon3={"/src/assets/casual.svg"}
                icon2Text={"Sick"}
                mainCount={KPICardSecond.mainCount}
                icon2Count={KPICardSecond.icon2Count}
                icon3Count={KPICardSecond.icon3Count}
                icon3Text={"Casual"}/>
              <KPICard
                title={"Hires this Month"}
                mainIcon={"/src/assets/employeeAdd-Dark.svg"}
                icon2={"/src/assets/male.svg"}
                icon3={"/src/assets/female.svg"}
                icon2Text={"Male"}
                mainCount={KPICardThird.mainCount}
                icon2Count={KPICardThird.icon2Count}
                icon3Count={KPICardThird.icon3Count}
                icon3Text={"Female"}/>
              <KPICard
                title={"Leave Requests"}
                mainIcon={"/src/assets/leave-dark.svg"}
                icon2={"/src/assets/sick.svg"}
                icon3={"/src/assets/casual.svg"}
                icon2Text={"Sick"}
                mainCount={KPICardForth.mainCount}
                icon2Count={KPICardForth.icon2Count}
                icon3Count={KPICardForth.icon3Count}
                icon3Text={"Casual"}/>
            </div>
          </div>
          <div className="w-full
                h-fit
                flex 
                flex-col 
                2xl:flex-row 
                justify-between 
                items-center 
                2xl:items-start 
                gap-6 
                lg:gap-8 pt-4
                pr-0
                ">
            <NewJoiningChart data={newJoinesByMonth} thisMonthJoines={newJoines}/>
            <LeaveChart data={lastWeeksLeaves?.data}/>
          </div>
          <div className="mt-6 md:mt-3  lg:mt-[calc(0rem+1.5rem)] w-full min-h-44 flex lg:min-h-36">
            <div className="w-full 
                    2xl:w-384 
                    min-h-[90%] 
                    bg-white 
                    border border-[#eaeaea] 
                    rounded-2xl 
                    flex 
                    flex-wrap 
                    justify-center 
                    sm:justify-center 
                    lg:justify-evenly 
                    items-center 
                    gap-4 
                    sm:gap-5 
                    lg:gap-4 
                    px-3 
                    sm:px-4 
                    lg:px-2 
                    py-4">
              <InsightCard
                title={"Total Payroll this Month"}
                icon={"/src/assets/dollar.svg"}
                iconBgColor={"bg-[#6464FF]/15 "}
                data={totalPayroll}
                cardType={"payroll"}/>
              <InsightCard
                title={"Most employee from country"}
                icon={"/src/assets/globe.svg"}
                iconBgColor={"bg-[#A32AFF]/15 "}
                data={employeeCountry}
                cardType={"employeeCountry"}/>
              <InsightCard
                title={"Gender Ratio (Male/Female)"}
                icon={"/src/assets/home-office.svg"}
                iconBgColor={"bg-[#00B212]/15 "}
                data={genderRatioPercent}
                cardType={"genderRatioPercent"}/>
              <InsightCard
                title={"Average Employee Age"}
                icon={"/src/assets/cake.svg"}
                iconBgColor={"bg-[#FF824B]/15 "}
                data={averageAge}
                cardType={"averageAge"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard