import React from "react";
import type { CustomTooltipProps } from "../../@types/TypeExport";

const CustomToolTip: React.FC<CustomTooltipProps> = ({
  payload,
  label,
  active,
  type,
  chart,
}) => {
  const renderedPayloadValue = payload && payload[0] && payload[0].value;
  const renderedLabel = label || (payload && payload[0] && payload[0].name);
  const profitchartval2 = payload && payload[1] && payload[1].value;

  return (
    <>
      {chart === "profit" ? (
        <>
          <div className="flex p-2 text-xs font-medium flex-col rounded-md shadow gap2 bg-neutral-100 dark:bg-neutral-800">
            <h1 className="flex w-full justify-center text-neutral-700 dark:text-neutral-100">
              {renderedLabel}
            </h1>
            <h2 className="text-neutral-700 dark:text-neutral-100">
              {`Net Profit : ${renderedPayloadValue} ${type}`}
            </h2>
            <h2 className="text-neutral-700 dark:text-neutral-100">
              {`Turnover : ${profitchartval2} ${type}`}
            </h2>
          </div>
        </>
      ) : (
        <div className="flex p-2 text-xs font-medium flex-col rounded-md shadow gap2 bg-neutral-100 dark:bg-neutral-800">
          <h1 className="text-neutral-700 dark:text-neutral-100">{`${renderedLabel} : ${renderedPayloadValue} ${type}`}</h1>
        </div>
      )}
    </>
  );
};

export default CustomToolTip;
