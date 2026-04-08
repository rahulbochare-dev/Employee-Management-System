import React from 'react'

const Search = () => {
  return (
    <>
        <div className="w-79.25 h-9 border border-[#b6b6b6] rounded-xl flex justify-center items-center gap-1 pl-2">
            <img src="/src/assets/search.svg" alt="" />
            <input className='w-79.25 h-9 rounded-xl font-medium' placeholder='Search Employee' type="search" name="search-employee" id="" />
        </div>
    </>
  )
}

export default Search