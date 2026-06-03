import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

const NewJoiningChart = ({ data, thisMonthJoines }) => {
  return (
    <div className="w-full xl:w-248 h-104 sm:h-112 lg:h-103.5 bg-white border border-[#eaeaea] rounded-[0.9375rem]">
      <div className="w-full min-h-12 flex flex-col sm:flex-row justify-between sm:items-center px-4 sm:px-6.25 pt-3.5 gap-1">
        <h2 className="text-lg sm:text-xl lg:text-[1.375rem] font-medium">
          New joinings by month
        </h2>
        <h2 className="text-sm sm:text-base lg:text-[1.3rem] text-[#9c9c9c]">
          Last 12 months
        </h2>
      </div>
      <div className="w-full h-fit px-4 sm:px-6.25 mt-1">
        <h1 className="text-2xl sm:text-4xl lg:text-[2.8125rem] font-medium leading-tight">
          {thisMonthJoines?.data[0]?.totalNewJoines[0]?.totalNewJoines || "N/A"}
          <span className="text-sm sm:text-lg lg:text-[1.25rem] text-[#9c9c9c] font-normal">
            {" "}
            this month
          </span>
          <span className="font-light"> / </span>
          {data?.averageJoiningsPerMonth || "N/A"}
          <span className="text-sm sm:text-lg lg:text-[1.25rem] text-[#9c9c9c] font-normal">
            {" "}
            Avg/month
          </span>
        </h1>
      </div>
      <div className="w-full h-[70%] sm:h-74 rounded-b-[0.9375rem] pt-3 sm:pt-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data?.newJoinesByMonthFormatted}
            layout="horizontal"
            margin={{ top: 5, right: 20, left: -15, bottom: 5 }}>
            <CartesianGrid
              vertical={false}
              stroke="#9c9c9c"
              strokeWidth={0.3}
              syncWithTicks={true}/>
            <XAxis
              dataKey="month"
              type="category"
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
              tick={{ fontSize: 12 }}/>
            <YAxis
              type="number"
              axisLine={false}
              tickLine={false}
              domain={[0, "auto"]}
              allowDataOverflow={false}
              tick={{ fontSize: 12 }}/>
            <Bar
              dataKey="joinings"
              fill="#9E6EFF"
              radius={[5, 5, 0, 0]}
              barSize={window.innerWidth < 640 ? 18 : 35}/>
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NewJoiningChart;
