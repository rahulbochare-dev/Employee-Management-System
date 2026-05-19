import React from "react";

const EmployeeCard = ({onClick, empDetails }) => {
    return (
        <div className="w-384 h-[98%] bg-[#f5f5f5] border border-[#d9d9d9] rounded-3xl overflow-hidden font-sans">
            <div className="w-full h-49 bg-[#efefef] flex items-center px-10">
                <div className="w-32.5 h-32.5 bg-[#d9d9d9] rounded-[1.125rem] flex items-center justify-center text-[3.5rem] font-medium text-black shrink-0">
                    AA
                </div>
                <div className="ml-9 w-md">
                    <h1 className="text-[2rem] leading-none font-medium text-black">
                        {empDetails?.firstName} {empDetails?.lastName}
                    </h1>
                    <p className="mt-5 text-[1.625rem] leading-none text-[#7d7d7d] font-medium">
                    {empDetails?.jobTitle}
                    </p>
                </div>
                <div className="flex flex-1 justify-between ml-8 pr-10">
                    <div>
                        <h2 className="text-[2rem] leading-none font-medium text-black">
                            Employee ID
                        </h2>
                        <p className="mt-5 text-[1.625rem] leading-none text-[#7d7d7d] font-medium">
                        {empDetails?.empID}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[2rem] leading-none font-medium text-black">
                            Work Mode
                        </h2>
                        <p className="mt-5 text-[1.625rem] leading-none text-[#7d7d7d] font-medium">
                        {empDetails?.workMode}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[2rem] leading-none font-medium text-black">
                            Status
                        </h2>
                        <p className="mt-5 text-[1.625rem] leading-none text-[#00a51e] font-medium">
                        {empDetails?.status? true : "Active"}
                        </p>
                    </div>
                    <img onClick={onClick} className='size-8 cursor-pointer' src="/src/assets/close.svg" alt="" />
                </div>
            </div>
            <div className="px-20 py-10">
                <div className="grid grid-cols-3 gap-y-20">
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Email:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-[2.6rem]">
                        {empDetails?.email}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Gender:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.gender}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Contact No:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.contactNo}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Address:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-[2.6rem] max-w-[24rem]">
                        {empDetails?.address}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Postal Code:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.postalCode}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Date of Birth:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.dateOfBirth}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            City:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.city}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Joining Date:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.joinedAt}
                        </p>
                    </div>
                    <div>
                        <p className="text-[1.5625rem] text-[#8b8b8b] font-medium leading-none">
                            Country:
                        </p>
                        <p className="mt-6 text-[1.4375rem] text-black leading-none">
                        {empDetails?.country}
                        </p>
                    </div>
                </div>
                <div className="w-full h-px bg-[#d3d3d3] mt-12"></div>
                <div className="flex items-center mt-8">
                    <span className="text-[2rem] text-[#8b8b8b] font-medium">
                        Salary:
                    </span>
                    <span className="ml-10 text-[2rem] font-medium text-black">
                    {empDetails?.salary} {empDetails?.salaryCurrency}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default EmployeeCard