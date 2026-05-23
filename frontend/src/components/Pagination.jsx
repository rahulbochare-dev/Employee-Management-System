import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown
} from "lucide-react";
import { useAdminEmployeeStore } from "../store/adminEmployeeStore";

export default function Pagination() {
  const {totalPages, getEmployees} = useAdminEmployeeStore()
//   const totalPages = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(20);

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
        const response = await getEmployees(currentPage, limit)
        console.log(response)
    }
    callApi()
  }, [currentPage, limit])

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
    <>
    <div className="w-78 h-12 flex items-center gap-1.5">

    {/* Prev */}
    <button
      onClick={handlePrev}
      className="w-[42px] h-[42px] rounded-[0.75rem] border border-[#dddddd]  flex justify-center items-center transition-all hover:bg-[#f2f2f2]"
    >
      <ChevronLeft size={18} />
    </button>

    {/* Numbers */}
    <div className="flex items-center gap-1.5">

      {visiblePages.map((page, index) => (

        <button
          key={page}
          onClick={() => handlePageClick(page, index)}
          className={`w-[42px] h-[42px] rounded-[0.75rem] border text-[0.95rem] font-medium transition-all
            
            ${
              currentPage === page
                ? "bg-[#3b82f6] text-white border-[#3b82f6]"
                : "text-[#2f2f2f] border-[#dddddd] hover:bg-[#f2f2f2]"
            }
          `}
        >
          {page}
        </button>
      ))}
    </div>

    {/* Next */}
    <button
      onClick={handleNext}
      className="w-[42px] h-[42px] rounded-[0.75rem] border border-[#dddddd]  flex justify-center items-center transition-all hover:bg-[#f2f2f2]"
    >
      <ChevronRight size={18} />
    </button>
  </div>

  <div className="flex items-center gap-3 text-[0.95rem] font-medium text-[#2f2f2f]">
  <span>Page</span>

  <div className="relative">
    <select
      value={currentPage}
      onChange={(e) => {
        const page = Number(e.target.value);

        setCurrentPage(page);

        // Keep visible buttons synced
        if (page <= totalPages - 2) {
          setStartPage(page);
        } else {
          setStartPage(totalPages - 2);
        }
      }}
      className="
        appearance-none
        w-14
        h-[42px]
        rounded-[0.75rem]
        border border-[#dddddd]
        bg-white
        text-[0.95rem]
        font-medium
        text-[#2f2f2f]
        pl-3
        pr-7
        cursor-pointer
        outline-none
        transition-all
        hover:bg-[#f2f2f2]
      "
    >
      {Array.from({ length: totalPages }, (_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>

    <ChevronDown
      size={14}
      className="
        pointer-events-none
        absolute right-2 top-1/2
        -translate-y-1/2
        text-[#2f2f2f]
      "
    />
  </div>

  <span>of {totalPages}</span>
</div>

<div className="flex items-center gap-3 text-[0.95rem] font-medium text-[#2f2f2f]">
  <span>Limit</span>

  <div className="relative">
    <select
      value={limit}
      onChange={(e) => setLimit(e.target.value)}
      className="
        appearance-none
        w-[70px]
        h-[42px]
        rounded-[0.75rem]
        border border-[#dddddd]
        bg-white
        text-[0.95rem]
        font-medium
        text-[#2f2f2f]
        pl-3
        pr-7
        cursor-pointer
        outline-none
        transition-all
        hover:bg-[#f2f2f2]
      "
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </select>

    <ChevronDown
      size={14}
      className="
        pointer-events-none
        absolute right-2 top-1/2
        -translate-y-1/2
        text-[#2f2f2f]
      "
    />
  </div>
</div>
  </>
  );
}