import { ReactNode } from "react";
import { CompanyData } from "./TypeExport";

export interface SelectedCompanyProviderProps {
  children: ReactNode;
}

interface SelectedCompanyContextProps {
    selectedcompanyData: CompanyData;
    updateSelectedCompany: (data: CompanyData) => void;
  }
