import React from 'react'
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Bar, Tooltip } from 'recharts'

const LeaveChart = ({data}) => {
    return (
        <div className='w-full lg:w-128.5 h-104 bg-white border border-[#b6b6b6] rounded-[0.9375rem] overflow-hidden'>
            <div className="w-full min-h-12 flex flex-col sm:flex-row justify-between sm:items-center px-4 sm:px-6.25 pt-3.5 gap-2">
                <h2 className='text-lg sm:text-xl lg:text-[1.375rem] font-semibold'>Past Leaves</h2>
                <h2 className='text-sm sm:text-base lg:text-[1.3rem] text-[#707070]'>Last 7 Days</h2>
            </div>

            <div className='w-full h-fit px-4 sm:px-6.25 mt-2'>
                <h1 className="text-3xl sm:text-[2.8125rem] font-medium break-words">
                    {data?.totalLeavesPastWeek}
                    <span className='text-[1rem] sm:text-[1.25rem] text-[#707070] font-normal'> Leaves</span>
                    <span className='font-light'> / </span>
                    {data?.averageLeavesPerDay}
                    <span className='text-[1rem] sm:text-[1.25rem] text-[#707070] font-normal'> Avg/day</span>
                </h1>
            </div>

            <div className="w-full h-72 sm:h-74 rounded-b-[0.9375rem] pb-5">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data?.lastWeekLeavesformatted}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid horizontal={false} stroke="#707070" strokeWidth={0.2} />

                        <XAxis
                            type="number"
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            dataKey="day"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#707070', fontSize: 14 }}
                            width={60}
                        />

                        <Bar
                            dataKey="leaves"
                            fill="#9E6EFF"
                            radius={[0, 5, 5, 0]}
                            barSize={25}
                        />

                        <Tooltip/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LeaveChart