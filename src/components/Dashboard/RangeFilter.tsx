import React, { useEffect, useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { calculateMinandMaxDates } from "../../data/functionExports";
import { CompanyDataContext } from "../../context/ContextExports";
import { CompanyData, DateTypes, RangeProps } from "../../@types/TypeExport";

let data: DateTypes = { minDate: new Date(), maxDate: new Date() };

const RangeFilter: React.FC<RangeProps> = ({ value, onchangeDate }) => {
  const {
    companyData,
  }: {
    companyData: CompanyData[];
  } = useContext(CompanyDataContext);

  const [range, setRange] = useState<DateTypes>({
    minDate: new Date("01/01/1970"),
    maxDate: new Date(),
  });

  const handleValueChange = (newValue: any) => {
    if (
      (newValue && newValue.startDate === null) ||
      (newValue && newValue.endDate === null)
    ) {
      onchangeDate({ startDate: null, endDate: null });
    } else if (newValue && newValue.startDate && newValue.endDate) {
      onchangeDate(newValue);
    }
  };

  useEffect(() => {
    if (companyData.length > 0) {
      data = calculateMinandMaxDates(companyData);
      setRange({ minDate: data.minDate, maxDate: data.maxDate });
    }
  }, [companyData]);

  return (
    <>
      <Datepicker
        value={value}
        maxDate={range.maxDate}
        startFrom={range.minDate}
        minDate={range.minDate}
        displayFormat={"DD/MM/YYYY"}
        inputClassName="bg-white px-2 placeholder:text-ellipsis placeholder:text-neutral-800 placeholder:dark:text-neutral-500 text-sm font-medium w-[250px] rounded-lg py-1 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-600 focus:outline-none"
        onChange={handleValueChange}
      />
    </>
  );
};

export default RangeFilter;
