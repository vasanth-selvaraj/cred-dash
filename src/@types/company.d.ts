import { type } from "os";

export interface CompanyData {
  id:number;
  companyName: string;
  address: {
    country:string,
    street:string,
    pincode:string,
    city:string,
  };
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
  name: string ;
  count: number;
}

export interface InterestDistribution {
  year: number;
  percentage: number;
}

export interface sortState {
  field: string;
  type: "asc" | "desc" ;
}

export type field = "loanAmount"|"registrationDate"|"raisedCapital"|"netProfit"|"loanInterest"|"turnover"

export interface companyProfitData{
  year:number;
  netProfit:number;
  turnover:number
}
