import React, { useContext } from "react";
import type {
  InterestData,
  ThemeContextProps,
  CompanyData,
} from "../../@types/TypeExport";
import { CalAccountStatusChartData } from "../../data/functionExports";
import { CustomToolTip } from "../ComponentsExport";
import { ThemeContext, CompanyDataContext } from "../../context/ContextExports";
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

  const { companyData }: { companyData: CompanyData[] } =
    useContext(CompanyDataContext);

  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  data = CalAccountStatusChartData(companyData);

  return (
    <>
      <div className="border border-neutral-200 dark:border-neutral-800 hover:scale-[1.009] transition-transform duration-150 ease-linear bg-white dark:bg-neutral-950 shadow-md rounded-2xl flex items-center flex-col gap-4 p-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={250}
            data={data}
            barGap={0}
            margin={{ top: 5, right: 5, left: -20, bottom: -5 }}
          >
            <XAxis
              dataKey="name"
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
              cursor={{ fill: "transparent" }}
              content={({ payload, label, active }) => (
                <CustomToolTip
                  payload={payload}
                  label={label}
                  active={active}
                  type=""
                />
              )}
            />
            {/* <Legend verticalAlign="top" height={36} /> */}
            <Bar dataKey="count" fill="#82ca9d" />
            {/* <Bar dataKey="Pending" fill="#8884d8" />
            <Bar dataKey="Closed" fill="#d0ed57" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default InterestCard;
