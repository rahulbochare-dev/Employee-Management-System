import React from 'react'
import Separator from './Seperator'

const KPICard = ({title, mainIcon, icon2, icon3, icon2Text, icon3Text}) => {
  return (
    <>
    <div className='w-87 h-41.5 bg-white border border-[#b6b6b6] rounded-2xl overflow-clip'>
        <div className='w-full h-[6.688rem] rounded-t-2xl flex'>
          <div className='w-1/2 h-[6.688rem]'>
              <h3 className='text-lg font-medium text-[#7D7D7D] pl-[1.313rem] pt-[0.938rem]'>{title}</h3>
              <h1 className='text-5xl font-semibold pl-[1.313rem] pt-1'>133</h1>
          </div>
          <div className='w-1/2 h-[6.688rem] flex justify-end'>
              <img className='pt-8 mr-7' src={mainIcon} alt="" />
          </div>
        </div>
        <Separator width={'w-76'}/>
        <div className='w-full h-[3.610rem] rounded-b-2xl overflow-clip flex'>
          <div className='w-4/8 h-full flex pl-4 justify-start items-center'>
            <img className='w-7 mr-2' src={icon2} alt=""/>
            <h3 className='text-md font-semibold border-r border-[#b6b6b6] w-22 text-[#7D7D7D]'>70 {icon2Text}</h3>
          </div>
          <div className='w-2/3 h-full flex pl-4 justify-start items-center'>
            <img className='w-7 mr-2' src={icon3} alt=""/>
            <h3 className='text-md font-semibold text-[#7D7D7D]'>61 {icon3Text}</h3>
          </div>
        </div>
    </div>
    </>
  )
}

export default KPICard