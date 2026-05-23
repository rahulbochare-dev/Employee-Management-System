import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { useAdminEmployeeStore } from "../store/adminEmployeeStore";

export default function Pagination() {
  const {getEmployees} = useAdminEmployeeStore()
  const totalPages = 10;

  const [currentPage, setCurrentPage] = useState(1);

  // First visible number
  const [startPage, setStartPage] = useState(1);

  const visiblePages = [
    startPage,
    startPage + 1,
    startPage + 2
  ].filter((page) => page <= totalPages);

  const handlePageClick = (page, index) => {

    setCurrentPage(page);
    
  
    // Shift forward when
    // middle OR third clicked
  
    if (
      index > 0 &&
      startPage + 2 < totalPages
    ) {
      setStartPage((prev) => prev + 1);
    }
  };

  const handleNext = () => {

    if (currentPage < totalPages) {

      const nextPage = currentPage + 1;

      setCurrentPage(nextPage);

      // Shift pages only when current page becomes middle
      if (
        nextPage === startPage + 1 &&
        startPage + 2 < totalPages
      ) {
        setStartPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const callApi = async () => {
        const response = getEmployees(currentPage)
        console.log(response)
    }
    callApi()
  }, [currentPage])

  const handlePrev = () => {

    if (currentPage > 1) {

        const prevPage = currentPage - 1;
  
        setCurrentPage(prevPage);
  
        // Shift backward
        if (
          prevPage < startPage + 1 &&
          startPage > 1
        ) {
          setStartPage((prev) => prev - 1);
        }
      }
  };

  const handleFirst = () => {
    setCurrentPage(1);
    setStartPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
    setStartPage(totalPages - 2);
  };

  

  return (
    <div className="w-full h-32 flex items-center gap-4">

      {/* First */}
      <button
        onClick={handleFirst}
        className="w-[100px] h-[100px] rounded-[1.75rem] border border-[#dddddd] bg-[#fafafa] flex justify-center items-center"
      >
        <ChevronsLeft size={42} />
      </button>

      {/* Prev */}
      <button
        onClick={handlePrev}
        className="w-[100px] h-[100px] rounded-[1.75rem] border border-[#dddddd] bg-[#fafafa] flex justify-center items-center"
      >
        <ChevronLeft size={42} />
      </button>

      {/* Numbers */}
      <div className="flex items-center gap-4">

        {visiblePages.map((page, index) => (
          <button
            key={page}
            onClick={() => handlePageClick(page, index)}
            className={`w-[100px] h-[100px] rounded-[1.75rem] border text-[2.5rem] font-medium transition-all
              
              ${
                currentPage === page
                  ? "bg-[#3b82f6] text-white border-[#3b82f6]"
                  : "bg-[#fafafa] text-[#2f2f2f] border-[#dddddd]"
              }
            `}
          >
            {page}
          </button>
        ))}
        {startPage + 2 < totalPages && (
          <div className="w-[70px] h-[100px] flex justify-center items-center text-[3rem]">
            ...
          </div>
        )}

        {/* Last Page */}
        {startPage + 2 < totalPages && (
          <button
            onClick={() => handleLast()}
            className={`w-[100px] h-[100px] rounded-[1.75rem] border text-[2.5rem] font-medium
              
              ${
                currentPage === totalPages
                  ? "bg-[#3b82f6] text-white border-[#3b82f6]"
                  : "bg-[#fafafa] text-[#2f2f2f] border-[#dddddd]"
              }
            `}
          >
            {totalPages}
          </button>
        )}
      </div>

      {/* Next */}
      <button
        onClick={handleNext}
        className="w-[100px] h-[100px] rounded-[1.75rem] border border-[#dddddd] bg-[#fafafa] flex justify-center items-center"
      >
        <ChevronRight size={42} />
      </button>

      {/* Last */}
      <button
        onClick={handleLast}
        className="w-[100px] h-[100px] rounded-[1.75rem] border border-[#dddddd] bg-[#fafafa] flex justify-center items-center"
      >
        <ChevronsRight size={42} />
      </button>
    </div>
  );
}