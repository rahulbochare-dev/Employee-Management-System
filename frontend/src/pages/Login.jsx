import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextInput from "../components/TextInput.jsx";
import PasswordInput from "../components/PasswordInput.jsx";
import Button from "../components/Button.jsx";
import { useUserStore } from "../store/userStore.js";
import toast, { Toaster } from "react-hot-toast";

const LoginAdmin = () => {
  const navigate = useNavigate();

  const [formData, setFromData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  let [inputValue, setInputValue] = useState("");

  if (inputValue.includes("@")) {
    formData.email = inputValue;
  } else {
    formData.userName = inputValue;
  }

  const { login } = useUserStore();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);
      console.log(response);
      if (response.success) {
        toast.success(response.message);
        navigate("/admin/dashboard");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-[#fcfcfe] px-4 py-6 overflow-x-hidden">
      <Toaster position="bottom-center" />
      <div className="bg-white w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-1/5 rounded-3xl py-4">
        <div className="w-full h-20 flex justify-center items-center">
          <h1 className="text-4xl">Login</h1>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col gap-8 items-center pt-8 px-4">
          <TextInput
            onChange={(e) => setInputValue(e.target.value)}
            label={"Email or Username:"}
            placeholder={"Email"}/>
          <PasswordInput
            onChange={(e) =>
              setFromData({ ...formData, password: e.target.value })}
            label={"Enter Password:"}
            placeholder={"Password"}/>
          <div className="w-full flex justify-center items-center flex-col gap-5 py-4">
            <Button
              width="w-64"
              title={"Login"}
              icon={"/src/assets/login.svg"}/>
            <h3 className="text-center">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 cursor-pointer underline">
                signup
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
