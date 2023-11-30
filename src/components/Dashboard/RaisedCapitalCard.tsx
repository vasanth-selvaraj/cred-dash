import React from "react";
import type { CompanyTrendData } from "../../@types/company";
import { generateMockCompanyData } from "../../data/Trend";
import { CustomToolTip } from "../ComponentsExport";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const RaisedCapitalCard: React.FC = () => {
  let data: CompanyTrendData[] = [];

  data = generateMockCompanyData(10,"Raised Capital");

  return (
    <>
      <div className="row-span-2 hover:scale-[1.009] transition-transform duration-150 ease-linear bg-gradient-to-tr flex items-center flex-col gap-4 p-4 from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-2xl">
        {/* <h1 className="text-xl font-bold text-neutral-50">Raised Capital</h1> */}
        <ResponsiveContainer width="95%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 3, left: 0, bottom: 5 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fill: "#ffff" }}
              axisLine={{ fill: "#ffff" }}
            />
            <YAxis tick={{ fill: "#ffff" }} />
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
            <Legend verticalAlign="top" height={36} />
            <Line type="bumpX" dataKey="Raised Capital" stroke="#ffff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default RaisedCapitalCard;