import React from "react";
import type { CustomTooltipProps } from "../../@types/TypeExport";

const CustomToolTip: React.FC<CustomTooltipProps> = ({
  payload,
  label,
  active,
}) => {
  const renderedPayloadValue = payload && payload[0] && payload[0].value;
  return (
    <>
      <div className="flex p-2 text-xs font-medium flex-col rounded-md shadow gap2 bg-neutral-100 dark:bg-neutral-800">
        <h1 className="text-neutral-700 dark:text-neutral-100">{`${label} : ${renderedPayloadValue}`}</h1>
      </div>
    </>
  );
};

export default CustomToolTip;
