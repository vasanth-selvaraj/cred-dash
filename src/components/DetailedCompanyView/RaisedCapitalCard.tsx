import React, { useContext, useEffect, useState } from "react";
import type {
  CompanyTrendData,
  ThemeContextProps,
} from "../../@types/TypeExport";
import { generateMockCompanyData } from "../../data/functionExports";
import { CustomToolTip } from "../ComponentsExport";
import { ThemeContext } from "../../context/ContextExports";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const RaisedCapitalCard: React.FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;

  const [raisedcapital, setRasiedCapital] = useState<CompanyTrendData[]>([]);

  useEffect(() => {
    setRasiedCapital(generateMockCompanyData(10, "Raised Capital"));
  }, []);

  return (
    <>
      <div className="sm:col-span-3 sm:h-full sm:pb-0 pb-10 h-40 col-span-1 w-full hover:scale-[1.009] transition-transform duration-150 ease-linear flex items-center flex-col gap-4 p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-950">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={raisedcapital}
            margin={{ top: 5, right: 3, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              tick={{
                fill: theme === "light" ? "#262626" : "#e5e5e5",
                fontSize: 13,
              }}
              axisLine={{ fill: theme === "light" ? "#262626" : "#e5e5e5" }}
            />
            <YAxis
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
            <Legend verticalAlign="top" height={36} />
            <Area
              type="monotone"
              dataKey="Raised Capital"
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

export default RaisedCapitalCard;
