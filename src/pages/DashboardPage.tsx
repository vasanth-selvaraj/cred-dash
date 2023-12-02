import React, { useContext } from "react";
import { CompanyDataContext } from "../context/ContextExports";
import { CompanyData } from "../@types/TypeExport";
import {
  CreditTable,
  InterestCard,
  TurnOverCard,
} from "../components/ComponentsExport";
import { ActiveLoans, ToatlLoan } from "../data/functionExports";

const DashboardPage: React.FC = () => {
  const { companyData }: { companyData: CompanyData[] } =
    useContext(CompanyDataContext);

  console.log(companyData);
  return (
    <>
      <section className="h-full w-full flex flex-col gap-6">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          <div className="p-4 text-white h-32 sm:h-full bg-gradient-to-tr flex flex-col gap-4 from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 shadow-md rounded-2xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
            <h1 className="text-xl text-left font-semibold">
              Outstanding Loans
            </h1>
            <h2 className="text-3xl text-right font-bold">
              {ToatlLoan(companyData)} ₹
            </h2>
          </div>
          <TurnOverCard />
          <InterestCard />
          <div className="p-4 flex h-32 sm:h-full flex-col gap-4 bg-white dark:bg-neutral-950 shadow-md rounded-2xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
            <h1 className="text-xl text-left font-semibold">Total Active Loans</h1>
            <h2 className="text-3xl font-extrabold text-right text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600">
              {ActiveLoans(companyData)}
            </h2>
          </div>
        </div>
        <CreditTable />
      </section>
    </>
  );
};

export default DashboardPage;
