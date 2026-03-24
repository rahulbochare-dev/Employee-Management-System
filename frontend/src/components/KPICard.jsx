import React from 'react'

const KPICard = ({title, mainIcon, icon2, icon3}) => {
  return (
    <>
    <div className='w-87 h-41.5 border border-[#8f8f8f] rounded-2xl overflow-clip'>
        <div className='w-full h-[6.688rem] rounded-t-2xl border-b border-[#8f8f8f] flex'>
          <div className='w-1/2 h-[6.688rem]'>
              <h3 className='text-lg font-medium text-[#7D7D7D] pl-[1.313rem] pt-[0.938rem]'>{title}</h3>
              <h1 className='text-5xl font-semibold pl-[1.313rem] pt-1'>133</h1>
          </div>
          <div className='w-1/2 h-[6.688rem] flex justify-end'>
              <img className='pt-8 mr-7' src="\src\assets\group.svg" alt="" />
          </div>
        </div>
        <div className='w-full h-[3.610rem] rounded-b-2xl overflow-clip flex'>
          <div className='w-1/3 h-full flex pl-4 justify-start items-center borr'>
            <img className='w-8 mr-2' src="\src\assets\male.svg" alt="" srcset="" />
            <h3 className='text-md font-semibold text-[#7D7D7D]'>70 Male</h3>
          </div>
          <div className='w-2/3 h-full flex pl-4 justify-start items-center'>
            <img className='w-8 mr-2' src="\src\assets\female.svg" alt="" srcset="" />
            <h3 className='text-md font-semibold text-[#7D7D7D]'>61 Female</h3>
          </div>
        </div>
    </div>
    </>
  )
}

export default KPICard