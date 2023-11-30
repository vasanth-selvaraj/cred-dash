import React, { useContext } from "react";
import type {
  CompanyTrendData,
  ThemeContextProps,
} from "../../@types/TypeExport";
import { ThemeContext } from "../../context/ThemeContext";
import { generateMockCompanyData } from "../../data/Trend";
import { CustomToolTip } from "../ComponentsExport";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const TurnOverCard: React.FC = () => {
  let data: CompanyTrendData[] = [];

  const { theme } = useContext(ThemeContext) as ThemeContextProps;

  data = generateMockCompanyData(10,"Turnover");
  console.log(data)

  return (
    <>
      <div className="row-span-2 border border-neutral-200 dark:border-neutral-800 hover:scale-[1.009] transition-transform duration-150 ease-linear bg-white dark:bg-neutral-950 shadow-md rounded-2xl flex items-center flex-col gap-4 p-2">
        <ResponsiveContainer width="95%" height="90%">
          <AreaChart
            width={500}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }}
              axisLine={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }}
            />
            <YAxis dataKey="Turnover" tick={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }} />
            <Legend verticalAlign="top" height={36} />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip
              content={({ payload, label, active }) => (
                <CustomToolTip
                  payload={payload}
                  label={label}
                  active={active}
                  type="₹"
                />
              )}
            />
            <Area
              type="monotone"
              dataKey="Turnover"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TurnOverCard;
