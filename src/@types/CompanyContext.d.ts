import { ReactNode } from "react";
import { CompanyData } from "./TypeExport";

export interface CompanyDataProviderProps {
  children: ReactNode;
}

interface CompanyDataContextProps {
    companyData: CompanyData[];
  }
