import { Faker, en } from "@faker-js/faker";
import type { CompanyData, InterestDistribution } from "../@types/TypeExport";

const faker = new Faker({ locale: [en] });

const accntstate = ["Active", "Pending", "Closed"];

export const generateCompanyData = (
  numberOfCompanies: number
): CompanyData[] => {
  const data: CompanyData[] = [];

  for (let i = 0; i < numberOfCompanies; i++) {
    const company: CompanyData = {
      companyName: faker.company.name(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      registrationDate: faker.date.past({ years: 20 }),
      numberOfEmployees: faker.number.int(),
      raisedCapital: faker.number.int({ min: 100000, max: 999999 }),
      turnover: faker.number.int({ min: 300000, max: 1999999 }),
      netProfit: faker.number.int({ min: 150000, max: 899999 }),
      contactNumber: faker.number.int({ min: 7276541320, max: 9879999999 }),
      loanAmount: faker.number.int({ min: 150000, max: 899999 }),
      loanInterest: faker.number.int({ min: 8, max: 20 }),
      accountStatus: accntstate[faker.number.int({ min: 0, max: 2 })],
      companyWebsite: faker.internet.url({ protocol: "https" }),
      contactEmail: faker.internet.email(),
    };
    data.push(company);
  }
  return data;
};

export const ToatlLoan = (companyData: CompanyData[]) => {
  let total_loan = 0;
  companyData.forEach((data) => {
    total_loan += data.loanAmount;
  });
  console.log(total_loan);
  return total_loan;
};

export const CalculateLoanDistributionGraph = (companyData: CompanyData[]) => {
  const data: InterestDistribution[] = [];
  companyData.forEach((company) => {
    const interestdata: InterestDistribution = {
      year: company.registrationDate.getFullYear(),
      percentage: company.loanInterest,
    };
    data.push(interestdata);
  });
  data.sort((a, b) => a.year - b.year);
  return data;
};
