import React from 'react'

const Profile = () => {
  return (
    <div className='w-fit h-10 flex mt-5'>
        <div className=' w-[18%] h-full'>
            <img className='w-full h-full' src="/src/assets/account.svg" alt="" srcset="" />
        </div>
        <div className='w-[82%] h-full pl-2'>
            <h3 className='text-[0.9375rem] font-medium'>Eren Moorehead</h3>
            <h4 className='text-[0.80rem] mt-[-1%] text-[#707070] '>erenmoorhead15@gmail.com</h4>
        </div>
    </div>
  )
}

export default Profile