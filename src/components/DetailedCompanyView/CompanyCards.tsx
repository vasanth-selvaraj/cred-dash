import { SelectedCompanyContext } from "../../context/SelectedCompany";
import { CompanyData } from "../../@types/company";
import React, { useContext } from "react";

const CompanyCards: React.FC = () => {
  const { selectedcompanyData }: { selectedcompanyData: CompanyData } =
    useContext(SelectedCompanyContext);
  return (
    <>
      <div className="col-span-1 gap-3 grid grid-rows-2">
        <div className="bg-white p-4 flex flex-col gap-5 dark:bg-neutral-950 shadow-md rounded-xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
          <h1 className="text-xl text-left font-semibold">Employee Count</h1>
          <h2 className="text-base text-right font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
            {selectedcompanyData.numberOfEmployees}
          </h2>
        </div>
        <div className="bg-white p-4 flex flex-col gap-5 dark:bg-neutral-950 shadow-md rounded-xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
          <h1 className="text-xl text-left font-semibold">Company Website</h1>
          <h2 className="text-base text-right font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
           <a href={selectedcompanyData.companyWebsite}>{selectedcompanyData.companyWebsite}</a> 
          </h2>
        </div>
      </div>
    </>
  );
};

export default CompanyCards;
