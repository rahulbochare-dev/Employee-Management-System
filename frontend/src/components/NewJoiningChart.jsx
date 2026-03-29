import React from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'

const data = [
    { month: 'Jan', count: 2 },
    { month: 'Feb', count: 2 },
    { month: 'Mar', count: 12 },
    { month: 'Apr', count: 6 },
    { month: 'May', count: 1 },
    { month: 'June', count: 23 },
    { month: 'July', count: 1 },
    { month: 'Aug', count: 21 },
    { month: 'Sep', count: 20 },
    { month: 'Oct', count: 22 },
    { month: 'Nov', count: 11 },
    { month: 'Dec', count: 20 },
];

const NewJoiningChart = () => {
    return (
        <div className='w-238 h-103.5 border border-[#707070] rounded-[0.9375rem]'>
            <div className="w-full h-12 flex justify-between pl-6.25 pr-6.25 pt-3.5">
                <h2 className='text-[1.375rem] font-semibold'>Past Leaves</h2>
                <h2 className='text-[1.3rem] text-[#707070]'>Last 7 Days</h2>
            </div>
            <div className='w-full h-fit'>
                <h1 className="text-[2.8125rem] font-medium pl-6.25">54
                    <span className='text-[1.25rem] text-[#707070] font-normal'> this month</span>
                    <span className='font-light'> / </span>35.2
                    <span className='text-[1.25rem] text-[#707070] font-normal'> Avg/month</span>
                </h1>
            </div>
            <div className="w-full h-74 rounded-b-[0.9375rem] pt-5">
                <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                     data={data}
                     layout='horizontal'
                     margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid vertical={false} stroke='#707070' strokeWidth={0.3} syncWithTicks={true}/>
                        <XAxis dataKey='month' type='category' axisLine={false} tickLine={false} padding={{ left: 10, right: 10 }}/>
                        <YAxis type='number' axisLine={false} tickLine={false} domain={[0, 'auto']} allowDataOverflow={false}/>
                        <Bar 
                         dataKey='count'
                         fill="#9E6EFF"
                         radius={[5, 5, 0, 0]}
                         barSize={35}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default NewJoiningChart