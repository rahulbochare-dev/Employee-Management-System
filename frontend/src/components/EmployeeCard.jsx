import React from 'react'
import Separator from './Seperator'

const EmployeeCard = ({firstName, lastName, jobTitle, gender, empID, workMode, salary, salaryCurrency, email, func}) => {
    return (
        <div className='w-85 sm:w-85 w-full h-65 bg-white border border-[#eaeaea] rounded-xl'>
    <div className="w-full h-17 flex justify-start gap-3 items-center pl-4 sm:pl-5">
        <img className='w-10 h-10 sm:w-11 sm:h-11' src="/src/assets/businessman.png" alt="" />

        <div className="w-[78%] h-[75%] flex flex-col overflow-hidden">
            <h2 className="text-base font-medium sm:text-lg truncate">
                {firstName} {lastName}
            </h2>

            <h2 className="text-xs font-medium sm:text-sm text-[#9c9c9c] truncate">
                {email}
            </h2>
        </div>
    </div>

    <Separator width='w-74' />

    <div className="w-full h-[45%] flex flex-col gap-2 pt-2">
        <div className='w-full h-[20%] flex pl-4 sm:pl-5 justify-between pr-6 sm:pr-10'>
            <h3 className="text-xs sm:text-sm text-[#9c9c9c] font-medium">
                Job Title:
            </h3>

            <h3 className="text-xs sm:text-sm text-black font-medium">
                {jobTitle}
            </h3>
        </div>

        <div className='w-full h-[20%] flex pl-4 sm:pl-5 justify-between pr-6 sm:pr-10'>
            <h3 className="text-xs sm:text-sm text-[#9c9c9c] font-medium">
                Gender:
            </h3>

            <h3 className="text-xs sm:text-sm text-black font-medium">
                {gender}
            </h3>
        </div>

        <div className='w-full h-[20%] flex pl-4 sm:pl-5 justify-between pr-6 sm:pr-10'>
            <h3 className="text-xs sm:text-sm text-[#9c9c9c] font-medium">
                Birthday:
            </h3>

            <h3 className="text-xs sm:text-sm text-black font-medium">
                {empID}
            </h3>
        </div>

        <div className='w-full h-[20%] flex pl-4 sm:pl-5 justify-between pr-6 sm:pr-10'>
            <h3 className="text-xs sm:text-sm text-[#9c9c9c] font-medium">
                Workmode:
            </h3>

            <h3 className="text-xs sm:text-sm text-black font-medium">
                {workMode}
            </h3>
        </div>
    </div>

    <div className="w-full h-[28%] flex items-center">
        <div className="w-2/4 h-[70%] flex flex-col pl-4 sm:pl-5">
            <h2 className="text-base font-medium sm:text-lg">
                {salary} {salaryCurrency}
            </h2>

            <h3 className="text-xs sm:text-sm text-[#9c9c9c] font-medium">
                Salary
            </h3>
        </div>

        <button
            onClick={(e) => (func(e, empID))}
            className='w-[45%] h-[45%] text-sm sm:text-base text-white bg-blue-400 rounded-xl transition-all hover:bg-blue-500 active:bg-blue-600'
        >
            View Details
        </button>
    </div>
</div>
    )
}

export default EmployeeCard