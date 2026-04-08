import React, { useState } from 'react'

const DropdownModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div>
            <div onClick={()=>{setShowModal(!showModal)}} className="w-37.5 h-9 border border-[#b6b6b6] rounded-xl pr-2 pl-3 flex justify-between items-center relative">
                <h3>Salary</h3>
                <img className='w-5' src="/src/assets/arrowDown.svg" alt="" srcset="" />
            </div>
            { showModal && <div className='w-50 h-60 border bg-white mt-2 z-10 absolute border-[#b6b6b6] rounded-xl flex flex-col items-center pt-2'>
                <h2 className="text-[1rem] font-semibold mb-3">Select Salary Range</h2>
                <div className="w-full h-15 flex flex-col justify-center pl-3 mb-1">
                    <h3 className='text-sm font-medium'>Min:</h3>
                    <div className="w-[92%] h-8 bg-[#F1F1F1] rounded-lg flex justify-center items-center pl-5">
                        <input className='text-sm font-medium' placeholder='Enter Min Salary' type="text" name="" id="" />
                    </div>
                </div>
                <div className="w-full h-15 flex flex-col justify-center pl-3">
                    <h3 className='text-sm font-medium'>Max:</h3>
                    <div className="w-[92%] h-8 bg-[#F1F1F1] rounded-lg flex justify-center items-center pl-5">
                        <input className='text-sm font-medium' placeholder='Enter Max Salary' type="text" name="" id="" />
                    </div>
                </div>
                <button onClick={()=>{setShowModal(!showModal)}} className='w-[85%] h-8 bg-[#CE78FF] rounded-xl mt-5 text-white font-medium hover:bg-[#C257FF] active:bg-[#B739FF]'>Done</button>
            </div>}
        </div>
        </>
    )
}

export default DropdownModal