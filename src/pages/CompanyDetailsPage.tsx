import React, { useContext } from "react";
import { SelectedCompanyContext } from "../context/ContextExports";
import { CompanyData } from "../@types/TypeExport";
import {
  AddressCard,
  CompanyCards,
  LoanDetailsCard,
  MainCard,
  RaisedCapitalCard,
} from "../components/ComponentsExport";

const CompanyDetails: React.FC = () => {
  const { selectedcompanyData }: { selectedcompanyData: CompanyData } =
    useContext(SelectedCompanyContext);
  return (
    <>
      <section className="h-full w-full">
        <h1 className="w-full pb-4 flex text-3xl font-serif">
          {selectedcompanyData.companyName}
        </h1>
        <div className="grid xl:grid-cols-6 grid-rows-2 xl:grid-rows-none gap-4">
          <MainCard />
          <LoanDetailsCard />
        </div>
        <h2 className="w-full py-3 font-medium flex text-xl">
          Company Details :
        </h2>
        <div className="grid  xl:grid-cols-6 xl:grid-rows-none grid-rows-2 gap-4">
          <AddressCard />
          <CompanyCards />
          <RaisedCapitalCard />
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
