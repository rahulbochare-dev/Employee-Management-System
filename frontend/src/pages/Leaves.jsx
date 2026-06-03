import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Search from "../components/Search.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Seperator from "../components/Seperator.jsx";
import LeaveCard from "../components/LeaveCard.jsx";
import EmptyState from "../components/Empty.jsx";
import LeaveDetails from "../components/LeaveDetails.jsx";
import { useAdminLeaveStore } from "../store/adminLeaveStore.js";
import { useUserStore } from "../store/userStore.js";
import toast from "react-hot-toast";
import { Menu, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading.jsx";

const Leaves = () => {
  const { user, isLoggedIn } = useUserStore();
  const {
    getLeavesDetails,
    updateLeaveStatus,
    getLeaves,
    leaves,
    leavesDetails,
    loading,
  } = useAdminLeaveStore();
  const [status, setStatus] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const showLeaveDetails = !!id;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
      return
    }
  }, [isLoggedIn])

  useEffect(() => {
    const callApi = async () => {
      const response = await getLeaves();
    };
    callApi();
  }, []);

  const handleStatusChange = async (e) => {
    const updatedStatus = {
      ...status,
      [e.target.name]: e.target.value,
    };
    setStatus(updatedStatus);

    try {
      const response = await getLeaves(updatedStatus.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowLeaveDetails = async (e, id) => {
    navigate(`/admin/leaves/${id}`);
    try {
      const response = await getLeavesDetails(id);
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  const closeLeaveDetails = (e) => {
    navigate(`/admin/leaves`);
  };

  const handleUpdateLeaveStatus = async (e, id) => {
    const updatedStatus = {
      ...status,
      [e.target.name]: e.target.value,
    };
    setStatus(updatedStatus);

    try {
      const response = await updateLeaveStatus(id, updatedStatus.status);
      if (response.success) {
        toast.success(`Leave application ${response.data.leave.status}`);
        await getLeaves();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="w-screen h-screen relative bg-[#fcfcfe]">
        {showLeaveDetails && (
          <div className="fixed inset-0 z-50 bg-black/25 backdrop-blur-md overflow-y-auto">
            <div className="min-h-full flex justify-center items-center px-3 sm:px-5 py-5">
              <div className="w-full max-w-380 flex justify-center items-center">
                <LeaveDetails
                  leaveDetails={leavesDetails}
                  cb={closeLeaveDetails} />
              </div>
            </div>
          </div>)}
        <div className="w-full min-h-screen flex flex-col lg:flex-row">
          <div className="hidden lg:block w-87.75 h-screen p-4 shrink-0">
            <Sidebar />
          </div>
          {showSideBar && (
            <div className="lg:hidden w-80 h-screen p-4 absolute top-0 left-0 z-50 ">
              <Sidebar />
            </div>)}
          <div className="flex-1 w-full px-4 sm:px-6 lg:px-0">
            <div className="w-full pt-3 lg:h-14 flex justify-between items-center pr-0 lg:pr-10">
              <h2 className="text-[1.875rem] font-medium">Manage Leaves</h2>
              <div className="block lg:hidden">
                {showSideBar ? (
                  <X onClick={() => setShowSideBar(!showSideBar)} />
                ) : (
                  <Menu onClick={() => setShowSideBar(!showSideBar)} />
                )}
              </div>
            </div>
            <div className="w-full h-fit mb-3 pt-4 lg:mb-0 lg:pt-0 lg:h-[calc(100vh-4.4rem)] flex items-baseline-last">
              <div className="w-full lg:w-384 lg:h-[98%] bg-white border border-[#eaeaea] rounded-[0.9375rem] overflow-visible lg:overflow-hidden">
                <div className="w-full h-10 flex gap-3 items-center pl-7 pt-1">
                  <img
                    className="w-8"
                    src="/src/assets/leave-dark.svg"
                    alt="" />
                  <h2 className="text-xl font-medium">All Leaves</h2>
                </div>
                <div className="w-full flex flex-col xl:flex-row gap-4 xl:gap-0 px-4 sm:px-7 py-4">
                  <div className="w-full px-1 xl:w-3/4 flex flex-wrap gap-4 sm:gap-6">
                    <Search />
                    <Dropdown
                      title={"Status"}
                      values={["Pending", "Rejected", "Approved"]}
                      onChange={handleStatusChange}
                      name={"status"} />
                  </div>
                </div>
                <Seperator marginY={"my-2"} width="w-369" />
                {loading && <Loading />}
                <div className="w-full min-h-120 justify-items-center lg:h-full lg:pb-36 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-7 overflow-y-visible lg:overflow-y-auto px-4 sm:px-7 py-4">
                  {leaves?.map((value) => {
                    return (
                      <LeaveCard
                        cb={handleShowLeaveDetails}
                        cb2={handleUpdateLeaveStatus}
                        key={value._id}
                        leave={value} />)
                  })}
                  {leaves ? null : (
                    <div className="col-span-full flex items-center justify-center min-h-80 lg:mb-42">
                      <EmptyState title="No Leaves Available" />
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaves;
