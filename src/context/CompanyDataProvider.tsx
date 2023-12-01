import React, { createContext, useState, useEffect } from "react";
import {
  CompanyData,
  CompanyDataContextProps,
  CompanyDataProviderProps,
} from "../@types/TypeExport";
import { generateCompanyData } from "../data/CompanyData";

const CompanyDataContext = createContext<CompanyDataContextProps>({
  companyData: [],
  updateCompanyData: () => {},
});

const CompanyDataProvider: React.FC<CompanyDataProviderProps> = ({
  children,
}) => {
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);

  useEffect(() => {
    setCompanyData(generateCompanyData(50));
  }, []);

  const updateCompanyData = (data: CompanyData[]) => {
    setCompanyData(data);
  };

  return (
    <CompanyDataContext.Provider value={{ companyData, updateCompanyData }}>
      {children}
    </CompanyDataContext.Provider>
  );
};

export { CompanyDataProvider, CompanyDataContext };
