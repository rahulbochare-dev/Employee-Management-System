import React, { useState } from "react";
import { motion } from "motion/react"

const DropdownModal = ({ value, onChange }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{
          duration: 0.18,
          ease: [0.16, 1, 0.3, 1],
        }} 
        className="w-[54%] sm:w-fit relative">
        <div
          onClick={() => {
            setShowModal(!showModal)
          }}
          className="w-full sm:w-37.5 h-9 border border-[#eaeaea] rounded-xl pr-2 pl-3 flex justify-between items-center relative">
          <h3 className="text-sm sm:text-base truncate">Salary</h3>
          <img
            className="w-4 sm:w-5 shrink-0"
            src="/src/assets/arrowDown.svg"
            alt="" />
        </div>
        {showModal && (
          <div className="w-full sm:w-50 min-h-60 border bg-white mt-2 z-10 absolute border-[#eaeaea] rounded-xl flex flex-col items-center pt-2 px-2 shadow-md">
            <h2 className="text-[0.95rem] sm:text-[1rem] font-semibold mb-3 text-center">
              Select Salary Range
            </h2>
            <div className="w-full h-15 flex flex-col justify-center pl-1 sm:pl-3 mb-1">
              <h3 className="text-sm font-medium">Min:</h3>
              <div className="w-full h-8 bg-[#F1F1F1] rounded-lg flex justify-center items-center px-3">
                <input
                  className="w-full text-sm font-medium tracking-wider bg-transparent outline-none"
                  placeholder="Enter Min Salary"
                  type="text"
                  name="minSalary"
                  id=""
                  value={value}
                  onChange={onChange} />
              </div>
            </div>
            <div className="w-full h-15 flex flex-col justify-center pl-1 sm:pl-3">
              <h3 className="text-sm font-medium">Max:</h3>
              <div className="w-full h-8 bg-[#F1F1F1] rounded-lg flex justify-center items-center px-3">
                <input
                  className="w-full text-sm font-medium tracking-wider bg-transparent outline-none"
                  placeholder="Enter Max Salary"
                  type="text"
                  name="maxSalary"
                  id=""
                  value={value}
                  onChange={onChange} />
              </div>
            </div>
            <button
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="w-full sm:w-[85%] h-8 bg-[#CE78FF] rounded-xl mt-5 text-white font-medium hover:bg-[#C257FF] active:bg-[#B739FF]">
              Done
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default DropdownModal;
