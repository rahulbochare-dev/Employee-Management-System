import React from 'react'
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Bar } from 'recharts'

const data = [
    { day: 'Mon', count: 28 },
    { day: 'Tue', count: 38 },
    { day: 'Wed', count: 32 },
    { day: 'Thu', count: 48 },
    { day: 'Fri', count: 35 },
    { day: 'Sat', count: 20 },
];

const LeaveChart = () => {
    return (
        <div className='w-128.5 h-103.5 border border-[#707070] rounded-[0.9375rem]'>
            <div className="w-full h-12 flex justify-between pl-6.25 pr-6.25 pt-3.5">
                <h2 className='text-[1.375rem] font-semibold'>Past Leaves</h2>
                <h2 className='text-[1.3rem] text-[#707070]'>Last 7 Days</h2>
            </div>
            <div className='w-full h-fit'>
                <h1 className="text-[2.8125rem] font-medium pl-6.25">39
                    <span className='text-[1.25rem] text-[#707070] font-normal'> Leaves</span>
                    <span className='font-light'> / </span>5.57
                    <span className='text-[1.25rem] text-[#707070] font-normal'> Avg/day</span>
                </h1>
            </div>
            <div className="w-full h-74 rounded-b-[0.9375rem] pt-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid horizontal={false} stroke="#707070" strokeWidth={0.2} />
                        <XAxis type="number" axisLine={false} tickLine={false} />
                        <YAxis
                            dataKey="day"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#707070', fontSize: 16 }}
                            width={60}
                        />
                        <Bar
                            dataKey="count"
                            fill="#9E6EFF"
                            radius={[0, 5, 5, 0]}
                            barSize={25}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LeaveChart