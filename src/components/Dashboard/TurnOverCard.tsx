import React, { useContext } from "react";
import type {
  ThemeContextProps,
  CompanyData,
  InterestDistribution,
} from "../../@types/TypeExport";
import { ThemeContext, CompanyDataContext } from "../../context/ContextExports";
import { CalculateLoanDistributionGraph } from "../../data/functionExports";
import { CustomToolTip } from "../ComponentsExport";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TurnOverCard: React.FC = () => {
  let data: InterestDistribution[] = [];

  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  const { companyData }: { companyData: CompanyData[] } =
    useContext(CompanyDataContext);

  data = CalculateLoanDistributionGraph(companyData);

  return (
    <>
      <div className="border border-neutral-200 h-40 sm:h-full dark:border-neutral-800 hover:scale-[1.009] transition-transform duration-150 ease-linear bg-white dark:bg-neutral-950 shadow-md rounded-2xl flex items-center flex-col gap-4 p-1">
        <h1 className="font-medium text-sm">Loan Distribution</h1>
        <ResponsiveContainer width="95%" height="90%">
          <AreaChart
            width={500}
            height={250}
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: -5 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="year"
              tick={{
                fill: theme === "light" ? "#262626" : "#e5e5e5",
                fontSize: 13,
              }}
              axisLine={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }}
            />
            <YAxis
              dataKey="percentage"
              tick={{
                fill: theme === "light" ? "#262626" : "#e5e5e5",
                fontSize: 13,
              }}
            />
            <Tooltip
              content={({ payload, label, active }) => (
                <CustomToolTip
                  payload={payload}
                  label={label}
                  active={active}
                  type="₹"
                  chart=""
                />
              )}
            />
            <Area
              type="monotone"
              dataKey="percentage"
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
