import React, { useState, useEffect } from "react";
import SidebarButton from "./SidebarButton";
import Seperator from "../components/Seperator.jsx";
import Profile from "../components/Profile.jsx";
import Button from "./Button.jsx";
import { useUserStore } from "../store/userStore.js";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Sidebar = () => {
  const [showExportButton, setShowExportButton] = useState(false);
  const { user, getCurrentUser, logout } = useUserStore();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/admin/dashboard") {
      setShowExportButton(false);
    } else {
      setShowExportButton(true);
    }
  }, []);

  useEffect(() => {
    const callApi = async () => {
      const response = await getCurrentUser();
    };
    callApi();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await logout();
    if (response.success) {
      navigate("/login");
      toast.success(response.message);
    }
  };

  return (
    <div className="p-4 h-[calc(100vh-5rem)] sm:p-5 lg:p-6 w-full sm:w-80 md:w-72 lg:min-h-[97vh] lg:w-78 bg-white border border-[#eaeaea] rounded-[0.9375rem] flex flex-col justify-between overflow-hidden">
      <Toaster position="bottom-center" />
      <div className="flex flex-col items-center lg:items-start">
        <div className="w-full h-10 mb-6 bg-gray-200 rounded-md"></div>
        <Seperator width={"w-64"} />
        <h3 className="text-[0.80rem] text-[#707070] font-medium mb-3 mt-5 self-start">
          Manage
        </h3>
        <div className="w-full flex flex-col items-center lg:items-start">
          <SidebarButton
            name={"Dashboard"}
            to={"/admin/dashboard"}
            icon={"LayoutDashboard"}/>
          <SidebarButton
            name={"Employees"}
            to={"/admin/employees"}
            icon={"Users"}/>
          <SidebarButton
            name={"Leaves"}
            to={"/admin/leaves"}
            icon={"LandPlot"}/>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:items-start mt-4">
        <Seperator />
        {showExportButton && (
          <Button title={"Export CSV"} secondary marginY={"my-6"} />
        )}
        <Seperator width="w-64" />
        <Profile
          firstName={user?.firstName}
          lastName={user?.lastName}
          email={user?.email}/>
        <Button
          onClick={handleLogout}
          marginY={"mt-5"}
          title={"Log Out"}
          icon={"LogOut"}/>
      </div>
    </div>
  );
};

export default Sidebar;
