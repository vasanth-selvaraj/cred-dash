import React, { useContext } from "react";
import { SelectedCompanyContext } from "../../context/ContextExports";
import { CompanyData } from "../../@types/TypeExport";

const LoanDetailsCard: React.FC = () => {
  const { selectedcompanyData }: { selectedcompanyData: CompanyData } =
    useContext(SelectedCompanyContext);

  return (
    <>
      <div className="xl:col-span-2 grid xl:grid-rows-none grid-cols-2 gap-2 grid-rows-2">
        <div className="bg-white p-4 flex flex-col gap-4 dark:bg-neutral-950 shadow-md rounded-xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
          <h1 className="sm:text-xl text-sm text-left font-semibold">Outstanding Loan</h1>
          <h2 className="sm:text-3xl text-xl text-right font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
            {selectedcompanyData.loanAmount} ₹
          </h2>
        </div>
        <div className="bg-white p-4 flex flex-col gap-4 dark:bg-neutral-950 shadow-md rounded-xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
          <h1 className="sm:text-xl text-sm text-left font-semibold">Loan Interest</h1>
          <h2 className="sm:text-3xl text-xl text-right font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
            {selectedcompanyData.loanInterest}%
          </h2>
        </div>
        <div
          className={`p-4 flex col-span-2 flex-col gap-4 justify-evenly dark:bg-neutral-950 text-white shadow-md rounded-xl hover:scale-[1.009] transition-transform duration-150 ease-linear bg-gradient-to-tr ${
            selectedcompanyData.accountStatus === "Active"
              ? "from-green-600 to-lime-400 dark:from-green-700 dark:to-lime-600"
              : selectedcompanyData.accountStatus === "Pending"
              ? "from-amber-400 to-orange-300 dark:from-amber-500 dark:to-orange-600"
              : "from-red-500 to-rose-300 dark:from-red-700 dark:to-rose-600"
          }`}
        >
          <h1 className="text-xl text-left font-semibold">Account Status</h1>
          <h2 className="text-3xl text-right font-extrabold ">
            {selectedcompanyData.accountStatus}
          </h2>
        </div>
      </div>
    </>
  );
};

export default LoanDetailsCard;
