export interface CompanyData {
    companyName: string;
    address: string;
    registrationDate: Date;
    numberOfEmployees: number;
    raisedCapital: number;
    turnover: number;
    netProfit: number;
    contactNumber: string;
    contactEmail: string;
    companyWebsite: string;
    loanAmount: number;
    loanInterest: number;
    accountStatus: string;
  }

  export interface CompanyTrendData {
    companyName: string;
    raisedCapital: number;
    // ... Other fields from your company data model
  }