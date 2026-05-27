import React from 'react'

const Search = ({value, onChange}) => {
  return (
    <>
        <div className="w-full sm:w-79.25 max-w-79.25 h-9 border border-[#b6b6b6] rounded-xl flex justify-center items-center gap-1 pl-2">
            <img className="w-4 sm:w-auto" src="/src/assets/search.svg" alt="" />
            <input className='w-full h-9 rounded-xl font-medium text-sm sm:text-base outline-none' placeholder='Search Employee' type="search" name="search-employee" id="" value={value} onChange={onChange}/>
        </div>
    </>
  )
}

export default Search