export interface CompanyData {
  companyName: string;
  address: string;
  registrationDate: Date;
  numberOfEmployees: number;
  raisedCapital: number;
  turnover: number;
  netProfit: number;
  contactNumber: number;
  contactEmail: string;
  companyWebsite: string;
  loanAmount: number;
  loanInterest: number;
  accountStatus: string;
}

export interface CompanyTrendData {
  month: string;
  [key: string]: string | number;
}

export interface InterestData {
  "Loan Interest": number | string;
  "Credit Card Interest": number | string;
  "Mortgage Interest": number | string;
  month: string;
}
