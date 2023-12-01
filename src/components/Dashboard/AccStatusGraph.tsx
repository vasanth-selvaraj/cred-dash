import React, { useContext, useState } from "react";
import type {
  InterestData,
  ThemeContextProps,
  CompanyData,
  viewer,
} from "../../@types/TypeExport";
import { CalAccountStatusChartData } from "../../data/functionExports";
import { CustomToolTip, Switcher } from "../ComponentsExport";
import { ThemeContext, CompanyDataContext } from "../../context/ContextExports";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart,
} from "recharts";

const InterestCard: React.FC = () => {
  let data: InterestData[] = [];

  const { companyData }: { companyData: CompanyData[] } =
    useContext(CompanyDataContext);

  const [viewer, setViewer] = useState<viewer>("bar");

  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  data = CalAccountStatusChartData(companyData);

  const changeViewer = (value: viewer) => {
    setViewer(value);
  };

  console.log(data);
  return (
    <>
      <div className="border border-neutral-200 dark:border-neutral-800 hover:scale-[1.009] transition-transform duration-150 ease-linear bg-white dark:bg-neutral-950 shadow-md rounded-2xl flex items-center flex-col p-1">
        <div className="w-full flex justify-end">
          <Switcher viewer={viewer} onChangeViewer={changeViewer} />
        </div>
        {viewer === "bar" ? (
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
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart
              width={500}
              height={250}
              data={data}
              barGap={0}
              margin={{ top: 0, right: 0, left:0, bottom: 0 }}
            >
              <Pie
                dataKey="count"
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={38}
                fill="#8884d8"
                nameKey="name"
              />
              <Tooltip
                content={({ payload, label, active }) => (
                  <CustomToolTip
                    payload={payload}
                    label={label}
                    active={active}
                    type=""
                  />
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};

export default InterestCard;
