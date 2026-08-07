import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput.jsx";
import PasswordInput from "../components/PasswordInput.jsx";
import { useEmployeeStore } from "../store/employeeStore.js";
import Button from "../components/Button.jsx";
import toast, { Toaster } from "react-hot-toast";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const { login } = useEmployeeStore();

  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);
      if (response.success) {
        toast.success(response.message);
        navigate("/employee");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-[#fcfcfe] px-4 py-6 overflow-x-hidden">
      <div className="bg-white w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-1/5 rounded-3xl py-4">
        <div className="w-full h-20 flex justify-center items-center px-4">
          <h1 className="text-4xl text-center">Login as Employee</h1>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col gap-8 items-center pt-8 px-4">
          <TextInput
            onChange={(e) =>
            setFromData({ ...formData, email: e.target.value })}
            label={"Email:"}
            placeholder={"Email"}/>
          <PasswordInput
            onChange={(e) =>
            setFromData({ ...formData, password: e.target.value })}
            label={"Enter Password:"}
            placeholder={"Password"}/>
          <div className="w-full flex justify-center items-center flex-col gap-5 py-4">
            <Button
              title={"Login"}
              icon={"LogIn"}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
