import React from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ value, onChange }) => {
  return (
    <>
      <div className="w-full sm:w-79.25 max-w-79.25 h-9 border border-[#eaeaea] rounded-xl flex justify-center items-center gap-3 px-2">
      <SearchIcon size={20} color="#bababa"/>
        <input
          className="w-full h-9 rounded-xl font-medium text-sm sm:text-base outline-none"
          placeholder="Search Employee"
          type="search"
          name="search-employee"
          id=""
          value={value}
          onChange={onChange}/>
      </div>
    </>
  );
};

export default Search;
