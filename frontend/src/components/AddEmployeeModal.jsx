import React from 'react'
import Separator from './Seperator'
import TextInput from './TextInput'

const AddEmployeeModal = () => {
  return (
    <>
        <div className="w-screen h-screen z-10 flex justify-center items-center">
            <div className="w-330.5 h-173 bg-white border border-[#b6b6b6] rounded-2xl">
                <div className="w-full h-12 flex items-center pt-3">
                    <h1 className='text-[1.75rem] font-semibold pl-10'>Onboard Employee</h1>
                </div>
                <Separator marginY={"my-4"} width={"w-310"}/>
                <div className='w-full h-132 grid grid-cols-4 grid-rows-5 pl-10 pt-5'>
                    <TextInput label={"Emp ID:"} placeholder={"Emp ID"}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddEmployeeModal