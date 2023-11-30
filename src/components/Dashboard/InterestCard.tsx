import React, { useContext } from "react";
import type { InterestData, ThemeContextProps } from "../../@types/TypeExport";
import { generateMockInterestData } from "../../data/functionExports";
import { CustomToolTip } from "../ComponentsExport";
import { ThemeContext } from "../../context/ThemeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const InterestCard: React.FC = () => {
  let data: InterestData[] = [];

  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  data = generateMockInterestData(10, "Raised Capital");

  return (
    <>
      <div className="border justify-center border-neutral-200 dark:border-neutral-800 hover:scale-[1.009] transition-transform duration-150 ease-linear bg-white dark:bg-neutral-950 shadow-md rounded-2xl flex items-center flex-col gap-4 p-2">
        <ResponsiveContainer width="95%" height="90%">
          <BarChart
            width={500}
            height={250}
            data={data}
            barGap={0}
            margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }}
              axisLine={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }}
            />
            <YAxis tick={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }} />
            <Tooltip
              content={({ payload, label, active }) => (
                <CustomToolTip
                  payload={payload}
                  label={label}
                  active={active}
                  type="%"
                />
              )}
            />
            {/* <Legend verticalAlign="top" height={36} /> */}
            <Bar dataKey="Loan Interest" fill="#82ca9d" />
            <Bar dataKey="Credit Card Interest" fill="#8884d8" />
            <Bar dataKey="Mortgage Interest" fill="#d0ed57" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default InterestCard;
