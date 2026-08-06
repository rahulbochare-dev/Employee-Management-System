import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from "recharts";

export const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #eaeaea",
        borderRadius: 12,
        padding: "10px 12px",
        color: "#fff",
        width: 120,
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      }}
    >
      <p
        style={{
          fontSize: 12,
          color: "black",
          marginBottom: 4,
        }}
      >
        {label}
      </p>

      <p
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "black",
        }}
      >
        {payload[0].value} Joines
      </p>
    </div>
  );
};

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
          <AreaChart
            data={data?.newJoinesByMonthFormatted}
            margin={{
              top: 0,
              right: 40,
              left: 40,
              bottom: 15,
            }}>
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="#9E6EFF"
                  stopOpacity={0.55}
                />
                <stop
                  offset="55%"
                  stopColor="#9E6EFF"
                  stopOpacity={0.22}
                />
                <stop
                  offset="100%"
                  stopColor="#9E6EFF"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Tooltip
              content={<CustomTooltip />}
              cursor={false} />
            <XAxis
              dataKey={"month"}
              interval={0}
              axisLine={true}
              strokeWidth={0.5}
              tickLine={false}
              tick={({ x, y, payload }) => (
                <g>
                  <line
                    x1={x}
                    y1={y - 8}
                    x2={x}
                    y2={y - 3}
                    stroke="#666"
                    strokeWidth={1} />
                  <text
                    x={x}
                    y={y + 16}
                    textAnchor="middle"
                    fill="#8A8A8A"
                    fontSize={12}
                    fontWeight={500}>
                    {payload.value}
                  </text>
                </g>
              )}
              tickMargin={8} />
            <Area
              dataKey={"joinings"}
              type="monotone"
              stroke="#9E6EFF"
              strokeWidth={2}
              fill="url(#purpleGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NewJoiningChart;
