import React, { createContext, useEffect, useState } from "react";
import {
  CompanyData,
  SelectedCompanyContextProps,
  SelectedCompanyProviderProps,
} from "../@types/TypeExport";

const initialData: CompanyData = {
  id: 0,
  companyName: "",
  address: {
    country: "",
    street: "",
    pincode: "",
    city: "",
  },
  registrationDate: new Date(),
  numberOfEmployees: 0,
  raisedCapital: 0,
  turnover: 0,
  netProfit: 0,
  contactNumber: 0,
  loanAmount: 0,
  loanInterest: 0,
  accountStatus: "Active",
  companyWebsite: "",
  contactEmail: "",
};

const SelectedCompanyContext = createContext<SelectedCompanyContextProps>({
  selectedcompanyData: initialData,
  updateSelectedCompany: () => {},
});

const SelectedCompanyProvider: React.FC<SelectedCompanyProviderProps> = ({
  children,
}) => {
  const [selectedcompanyData, setSelectedCompanyData] =
    useState<CompanyData>(initialData);

  const updateSelectedCompany = (data: CompanyData) => {
    localStorage.setItem("company", JSON.stringify(data));
    setSelectedCompanyData(data);
  };

  useEffect(() => {
    const storedCompany: string | null = localStorage.getItem("company");
    if (storedCompany) {
      setSelectedCompanyData(JSON.parse(storedCompany));
    }
  }, []);

  return (
    <SelectedCompanyContext.Provider
      value={{ selectedcompanyData, updateSelectedCompany }}
    >
      {children}
    </SelectedCompanyContext.Provider>
  );
};

export { SelectedCompanyProvider, SelectedCompanyContext };
