import { Faker, en } from "@faker-js/faker";
import { ThemeContext } from "../context/ContextExports";
import { ThemeContextProps } from "../@types/TypeExport";
import type {
  CompanyData,
  InterestDistribution,
  field,
} from "../@types/TypeExport";
import { useContext } from "react";

const faker = new Faker({ locale: [en] });

const accntstate = ["Active", "Pending", "Closed"];

export const generateCompanyData = (
  numberOfCompanies: number
): CompanyData[] => {
  const data: CompanyData[] = [];

  for (let i = 0; i < numberOfCompanies; i++) {
    const company: CompanyData = {
      id: i + 1,
      companyName: faker.company.name(),
      address: {
        country: faker.location.county(),
        street: faker.location.street(),
        pincode: faker.location.zipCode(),
        city: faker.location.city(),
      },
      registrationDate: faker.date.past({ years: 10 }),
      numberOfEmployees: faker.number.int({ min: 10, max: 2000 }),
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
    if (data.accountStatus === "Active") {
      total_loan += data.loanAmount;
    }
  });
  return total_loan;
};

export const ActiveLoans = (companyData: CompanyData[]) => {
  let active_loan = 0;
  companyData.forEach((data) => {
    if (data.accountStatus === "Active") {
      active_loan++;
    }
  });
  return active_loan;
};

export const CalculateLoanDistributionGraph = (companyData: CompanyData[]) => {
  const aggregatedData: { [key: number]: number } = {};

  companyData.forEach((company) => {
    const year = company.registrationDate.getFullYear();
    const loanAmt = company.loanAmount;

    if (aggregatedData[year]) {
      aggregatedData[year] += loanAmt;
    } else {
      aggregatedData[year] = loanAmt;
    }
  });
  const data: InterestDistribution[] = Object.keys(aggregatedData).map(
    (year) => ({
      year: parseInt(year),
      percentage: aggregatedData[parseInt(year)],
    })
  );

  data.sort((a, b) => a.year - b.year);

  return data;
};

export const SortTableData = (
  data: CompanyData[],
  sortOrder: "asc" | "desc",
  field: field
) => {
  const sortByField = (a: CompanyData, b: CompanyData) => {
    const aValue = Number(a[field]);
    const bValue = Number(b[field]);

    if (sortOrder === "asc") {
      return aValue - bValue;
    } else if (sortOrder === "desc") {
      return bValue - aValue;
    }
    return 0;
  };
  return [...data].sort(sortByField);
};

export const SortTableByDate = (
  data: CompanyData[],
  sortOrder: "asc" | "desc",
  field: field
) => {
  const sortByField = (a: CompanyData, b: CompanyData) => {
    const aValue = new Date(a.registrationDate);
    const bValue = new Date(b.registrationDate);

    if (sortOrder === "asc") {
      return aValue.getTime() - bValue.getTime();
    } else if (sortOrder === "desc") {
      return bValue.getTime() - aValue.getTime();
    }
    return 0;
  };
  return [...data].sort(sortByField);
};

export const CalAccountStatusChartData = (compdata: CompanyData[]) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  const countByStatus: Record<string, number> = compdata.reduce((acc, item) => {
    const status = item.accountStatus;
    return { ...acc, [status]: (acc[status] || 0) + 1 };
  }, {} as Record<string, number>);

  const chartdata = [
    {
      name: "Active",
      count: countByStatus.Active | 0,
      fill: theme === "light" ? "#86efac" : "#4ade80",
    },
    {
      name: "Pending",
      count: countByStatus.Pending | 0,
      fill: theme === "light" ? "#fcd34d" : "#fbbf24",
    },
    {
      name: "Closed",
      count: countByStatus.Closed | 0,
      fill: theme === "light" ? "#f87171" : "#b91c1c",
    },
  ];

  return chartdata;
};

export const calculateMinandMaxDates = (compdata: CompanyData[]) => {
  if (compdata.length === 0) {
    return { minDate: new Date(), maxDate: new Date() };
  }

  let minDate: Date = compdata[0].registrationDate;
  let maxDate: Date = compdata[0].registrationDate;

  for (let i = 0; i < compdata.length; i++) {
    if (compdata[i].registrationDate < minDate) {
      minDate = compdata[i].registrationDate;
    }
    if (compdata[i].registrationDate > maxDate) {
      maxDate = compdata[i].registrationDate;
    }
  }
  return { minDate, maxDate };
};
