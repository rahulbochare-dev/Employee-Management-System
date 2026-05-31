import React, { useState, useEffect } from "react";
import Button from '../components/Button.jsx'
import { X } from 'lucide-react'
import { toast, Toaster } from "react-hot-toast";
import { useAdminEmployeeStore } from '../store/adminEmployeeStore.js'

const EmployeeDetails = ({ onClick, empDetails, cb }) => {
    const { terminateEmployee } = useAdminEmployeeStore()

    const [initials, setInitials] = useState({
        first: "",
        last: ""
    })

    useEffect(() => {
        const firstIn = empDetails.firstName ? empDetails.firstName.charAt(0) : ""
        const lastIn = empDetails.lastName ? empDetails.lastName.charAt(0) : ""

        setInitials({
            first: firstIn,
            last: lastIn
        })
    }, [empDetails.firstName, empDetails.lastName])

    const handleTerminateEmployee = async (e) => {
        try {
            const response = await terminateEmployee(empDetails?._id)
            if (response.success) {
                toast.success(response.message)
                cb(false)
            } else {
                toast.success(response.message)
            }
        } catch (error) {
            toast.success(error)
        }
    }

    return (
        <div className="w-[95vw] w-6xl max-h-[90vh] sm:w-384 sm:h-[98%] bg-white border border-[#eaeaea] rounded-3xl overflow-clip">

            {/* Header */}
            {/* Header */}
            <div className="w-full bg-[#f9f9f9] flex flex-col px-5 sm:px-10 py-6 sm:py-0 sm:h-49 sm:flex-row sm:items-center gap-5 sm:gap-0 relative">

            <button
        onClick={onClick}
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex justify-center items-center transition-all hover:bg-[#f1f1f1] active:bg-[#e9e9e9]">
        <X size={22} strokeWidth={2.2} />
    </button>

                {/* Avatar + Name + JobTitle — grows to fill space */}
                <div className="flex items-center gap-5 sm:gap-9 min-w-0 flex-1">
                    <div className="w-15 h-15 sm:w-24 sm:h-24 bg-[#ededed] rounded-[1.125rem] flex items-center justify-center text-2xl sm: shrink-0">
                        {empDetails.avatar ? <img src={empDetails?.avatar} alt="" srcset="" /> :
                            <h1 className="text-[2.5rem] font-bold text-[#898989]">{initials.first}{initials.last}</h1>}
                    </div>
                    <div className="min-w-0">
                        <h1 className="text-xl sm:text-[1.9rem] leading-none font-medium text-black truncate">
                            {empDetails?.firstName} {empDetails?.lastName}
                        </h1>
                        <p className="mt-3 sm:mt-5 text-base sm:text-[1.5rem] leading-none text-[#7d7d7d] font-medium">
                            {empDetails?.jobTitle}
                        </p>
                    </div>
                </div>

                {/* EmpID / WorkMode / Status — compact fixed widths, pushed to right */}
                <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 sm:shrink-0">
                    <div className="w-24 sm:w-52">
                        <h2 className="text-base sm:text-[1.9rem] leading-none font-medium text-black">Employee ID</h2>
                        <p className="mt-2 sm:mt-6 text-sm sm:text-[1.5rem] leading-none text-[#7d7d7d] font-medium break-all">
                            {empDetails?.empID}
                        </p>
                    </div>
                    <div className="w-24 sm:w-52">
                        <h2 className="text-base sm:text-[1.9rem] leading-none font-medium text-black">Work Mode</h2>
                        <p className="mt-2 sm:mt-5 text-sm sm:text-[1.5rem] leading-none text-[#7d7d7d] font-medium">
                            {empDetails?.workMode}
                        </p>
                    </div>
                    <div className="w-16 sm:w-52">
                        <h2 className="text-base sm:text-[1.9rem] leading-none font-medium text-black">Status</h2>
                        <p className="mt-2 sm:mt-5 text-sm sm:text-[1.5rem] leading-none text-[#00a51e] font-medium">
                            {empDetails?.isActive ? "Active" : "Inactive"}
                        </p>
                    </div>
                </div>

            </div>

            {/* Body */}
            <div className="px-5 sm:px-12 lg:px-20 py-8">
                <div className="grid grid-cols-2 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-y-25">
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Email:</p>
                        <p className="mt-3 text-sm sm:text-[1.4375rem] text-black break-all leading-relaxed">
                            {empDetails?.email}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Gender:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {empDetails?.gender}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Contact No:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {empDetails?.contactNo}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Address:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black break-words leading-relaxed">
                            {empDetails?.address}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Postal Code:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {empDetails?.postalCode}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Date of Birth:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {new Date(empDetails?.dateOfBirth).toLocaleDateString("en-GB", {
                                day: "numeric", month: "short", year: "numeric"
                            })}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">City:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {empDetails?.city}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Joining Date:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {new Date(empDetails?.joinedAt).toLocaleDateString("en-GB", {
                                day: "numeric", month: "short", year: "numeric"
                            })}
                        </p>
                    </div>
                    <div className="min-w-0">
                        <p className="text-base sm:text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">Country:</p>
                        <p className="mt-3 sm:mt-6 text-sm sm:text-[1.4375rem] text-black leading-none">
                            {empDetails?.country}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#d3d3d3] mt-8 sm:mt-12"></div>

                {/* Salary + Terminate */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-0 mt-6 sm:mt-8">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="text-xl sm:text-[2rem] text-[#8b8b8b] font-medium">Salary:</span>
                        <span className="text-xl sm:text-[2rem] font-medium text-black">
                            {empDetails?.salary} {empDetails?.salaryCurrency}
                        </span>
                    </div>
                    <Button
                        width="w-full sm:w-68"
                        title={"Terminate Employee"}
                        icon={"/src/assets/terminate.svg"}
                        onClick={handleTerminateEmployee}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails