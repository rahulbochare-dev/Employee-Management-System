import React, { useState, useEffect } from "react";
import DateTime from "../components/DateTime.jsx";
import Button from "../components/Button.jsx";
import Seperator from "../components/Seperator.jsx";
import LeaveCardEmployee from "../components/LeaveCardEmployee.jsx";
import ApplyLeaveEmployee from "../components/ApplyLeaveEmployee.jsx";
import LeaveDetailsEmployee from "../components/LeaveDetailsEmployee.jsx";
import { useEmployeeLeaveStore } from "../store/employeeLeaveStore.js";
import { useEmployeeStore } from "../store/employeeStore.js";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import WelcomeText from "../components/WelcomeText.jsx";

const EmployeeSelf = () => {
  const navigate = useNavigate();
  const { myLeaveDetails, myLeaves, getMyLeaves, getLeaveDetails } =
    useEmployeeLeaveStore();
  const { employee, getCurrentEmployee, logout } = useEmployeeStore();
  const [showApplyLeave, setShowApplyLeave] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  const showLeaveDetails = !!id;

  useEffect(() => {
    if (location.pathname == "/employee/apply-leave") {
      setShowApplyLeave(!showApplyLeave);
    }
    if (location.pathname == "/employees") {
      setShowApplyLeave(!showApplyLeave);
    }
  }, [location]);

  const handleGetLeaveDetails = async (e, leaveId) => {
    navigate(`/employee/leave/${leaveId}`);
    try {
      const response = await getLeaveDetails(leaveId);
    } catch (error) {
      throw error;
    }
  };

  const openApplyLeave = () => {
    navigate(`/employee/apply-leave`);
  };

  const closeApplyLeave = () => {
    navigate(`/employee`);
  };

  const closeLeaveDetails = (e) => {
    navigate(`/employee`);
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      console.log(response);
      if (response.success) {
        toast.success(response.message);
        navigate("/login-employee");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    const callApi = async () => {
      const response = await getMyLeaves();
      const responseEmp = await getCurrentEmployee();
    };
    callApi();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] px-3 sm:px-5 relative overflow-x-hidden">
      <Toaster position="bottom-center" />
      {showLeaveDetails && (
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md z-50">
          <LeaveDetailsEmployee
            leaveDetails={myLeaveDetails}
            cb={closeLeaveDetails}/>
        </div>)}
      {showApplyLeave && (
        <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black/25 backdrop-blur-md z-50">
          <ApplyLeaveEmployee cb={closeApplyLeave} />
        </div>)}
      <div className="w-full flex items-center justify-between px-1 sm:px-0 min-h-20">
        <div className="flex items-center gap-4">
          <div className="w-25 h-10 bg-gray-200 shrink-0"></div>
          <WelcomeText />
        </div>
        <div className="hidden lg:block">
          <DateTime />
        </div>
      </div>
      <div className="w-full mt-3 min-h-[calc(100vh-7rem)] bg-white border border-[#b6b6b6] rounded-2xl overflow-hidden">
        <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center px-4 sm:px-10 py-4 gap-4">
          <h1 className="text-2xl sm:text-3xl font-medium">Employee Details</h1>
          <Button
            width="w-68"
            onClick={handleLogout}
            title={"Logout"}
            icon={"/src/assets/logout.svg"}/>
        </div>
        <Seperator width="w-full" />
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 min-w-0 border-b lg:border-b-0 lg:border-r border-[#b6b6b6]">
            <div className="w-full px-4 sm:px-10 py-6 flex flex-col xl:flex-row gap-6">
              <div className="w-full xl:w-auto flex items-center gap-4 min-w-0">
                <img
                  className="size-17 rounded-full object-cover shrink-0"
                  src="/src/assets/businessman.png"/>
                <div className="flex flex-col min-w-0 flex-1 xl:flex-none xl:min-w-70">
                  <h2 className="text-[1.375rem] font-medium text-black leading-none truncate">
                    {employee?.firstName || "N/A"} {employee?.lastName}
                  </h2>
                  <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none truncate">
                    {employee?.jobTitle || "N/A"}
                  </h3>
                  <h3 className="text-[1rem] text-[#7a7a7a] font-medium mt-2 leading-none break-all">
                    {employee?.email || "N/A"}
                  </h3>
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-5 xl:justify-center">
                <div className="min-w-30 h-20 flex flex-col">
                  <h2 className="text-xl sm:text-2xl font-medium">EMP ID</h2>
                  <h3 className="text-[1rem] text-[#7a7a7a] font-medium break-all">
                    {employee?.empID}
                  </h3>
                </div>
                <div className="min-w-30 h-20">
                  <h2 className="text-xl sm:text-2xl font-medium">Work Mode</h2>
                  <h3 className="text-[1rem] text-[#7a7a7a] font-medium">
                    {employee?.workMode}
                  </h3>
                </div>
                <div className="min-w-30 h-20">
                  <h2 className="text-xl sm:text-2xl font-medium">Status</h2>
                  <h3 className="text-[1rem] text-[#7a7a7a] font-medium">
                    {employee?.isActive ? "Active" : "Inactive"}
                  </h3>
                </div>
              </div>
            </div>
            <Seperator width="w-full" />
            <div className="w-full px-4 sm:px-10 lg:px-20 py-8 grid grid-cols-2 min-[480px]:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-16">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">Gender</h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium">
                  {employee?.gender}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">
                  Date of Birth
                </h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium">
                  {new Date(employee?.dateOfBirth).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">Address</h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium wrap-break-word">
                  {employee?.address}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">Postal Code</h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium">
                  {employee?.postalCode}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">Country</h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium">
                  {employee?.country}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">City</h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium">
                  {employee?.city}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">
                  Joining Date
                </h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium">
                  {new Date(employee?.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-medium">Education</h2>
                <h3 className="text-md sm:text-xl text-[#7a7a7a] font-medium wrap-break-word">
                  {employee?.education}
                </h3>
              </div>
            </div>
            <div className="w-full px-4 sm:px-10 lg:px-20 py-6">
              <h2 className="text-2xl sm:text-[2rem] font-medium flex flex-wrap gap-x-2 items-baseline">
                <span className="text-[#7a7a7a]">Salary:</span>
                <span>
                  {employee?.salary} {employee?.salaryCurrency}
                </span>
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2 min-w-0 flex flex-col">
            <div className="w-full min-h-20 flex justify-start items-center px-4 sm:px-10">
              <h2 className="text-[1.4rem] sm:text-[1.75rem] font-medium">
                My Leaves
              </h2>
            </div>
            <div
              className="w-full flex flex-col"
              style={{ height: "clamp(400px, 68vh, 700px)" }}>
              <div className="w-full flex-1 overflow-y-auto p-4 min-h-0">
                <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-5 items-start justify-items-center">
                  {myLeaves?.map((leave) => (
                    <LeaveCardEmployee
                      cb={handleGetLeaveDetails}
                      key={leave?._id}
                      leave={leave}/>))}
                </div>
              </div>
              <div className="w-full min-h-20 flex justify-center items-center p-4 shrink-0">
                <Button
                  width="w-68"
                  onClick={openApplyLeave}
                  icon={"/src/assets/leave-light.svg"}
                  title={"Apply Leave"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSelf;
