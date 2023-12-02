import React, { useContext, useEffect, useState } from "react";
import {
  CompanyData,
  ThemeContextProps,
  companyProfitData,
} from "../../@types/TypeExport";
import {
  SelectedCompanyContext,
  ThemeContext,
} from "../../context/ContextExports";
import { GeneratecompanyProfitData } from "../../data/functionExports";
import {
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LineChart,
} from "recharts";
import { CustomToolTip } from "../ComponentsExport";

const MainCard: React.FC = () => {
  const { selectedcompanyData }: { selectedcompanyData: CompanyData } =
    useContext(SelectedCompanyContext);

  const { theme } = useContext(ThemeContext) as ThemeContextProps;

  const [graphData, setGraphData] = useState<companyProfitData[]>([]);

  useEffect(() => {
    setGraphData(
      GeneratecompanyProfitData(
        selectedcompanyData.registrationDate.getFullYear(),
        selectedcompanyData.netProfit,
        selectedcompanyData.turnover
      )
    );
  }, [selectedcompanyData]);

  return (
    <>
      <div className="xl:col-span-4 p-4 bg-white dark:bg-neutral-950 shadow-md rounded-2xl">
        <div className="grid xl:grid-cols-7 xl:grid-rows-none h-full grid-rows-2 gap-3">
          <div className="xl:col-span-2 flex flex-col gap-4 mt-7">
            <div className="grid grid-cols-7 text-xl font-semibold">
              <label className="col-span-3 text-base">Net Profit</label>
              <span>:</span>
              <h1 className="text-xl col-span-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
                {selectedcompanyData.netProfit} ₹
              </h1>
            </div>
            <div className="grid grid-cols-7 text-xl font-semibold">
              <label className="col-span-3 text-base">Turnover</label>
              <span>:</span>
              <h1 className="text-xl col-span-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
                {selectedcompanyData.turnover} ₹
              </h1>
            </div>
            <div className="grid grid-cols-7 text-xl font-semibold">
              <label className="col-span-3 text-base">Raised Capital</label>
              <span>:</span>
              <h1 className="text-xl col-span-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
                {selectedcompanyData.raisedCapital} ₹
              </h1>
            </div>
          </div>
          <div className="xl:col-span-5 h-full w-full">
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                width={500}
                height={300}
                data={graphData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="year"
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
                      chart="profit"
                    />
                  )}
                />
                <Legend verticalAlign="top" height={36} />
                <Line type="bumpX" dataKey="netProfit" stroke="#8884d8" />
                <Line type="bumpX" dataKey="turnover" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
