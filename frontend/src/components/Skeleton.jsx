import React from 'react'

const Skeleton = ({width, height}) => {
  return (
    <div className={`w-${width} h-${height} bg-[#ebebeb] rounded-lg`}></div>
  )
}

export default Skeleton