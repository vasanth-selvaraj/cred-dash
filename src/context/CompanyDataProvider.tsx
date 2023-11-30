import React, { createContext, useState, useEffect } from "react";
import { CompanyData, CompanyDataProviderProps } from "../@types/TypeExport";
import { generateCompanyData } from "../data/CompanyData";

const CompanyDataContext = createContext<CompanyData[]>([]);

const CompanyDataProvider: React.FC<CompanyDataProviderProps> = ({
  children,
}) => {
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);

  useEffect(() => {
    setCompanyData(generateCompanyData(50));
  }, []);

  return (
    <CompanyDataContext.Provider value={companyData}>
      {children}
    </CompanyDataContext.Provider>
  );
};

export {CompanyDataProvider,CompanyDataContext};
