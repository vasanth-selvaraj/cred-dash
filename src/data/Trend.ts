import { Faker, es } from "@faker-js/faker";
import type { CompanyTrendData } from "../@types/TypeExport";

const faker = new Faker({ locale: [es] });

export const generateMockCompanyData = (
  numberOfCompanies: number
): CompanyTrendData[] => {
  const data: CompanyTrendData[] = [];

  for (let i = 0; i < numberOfCompanies; i++) {
    const company: CompanyTrendData = {
      companyName: faker.company.name(),
      raisedCapital: faker.number.int({ min: 10000, max: 1000000 }),
    };
    data.push(company);
  }
  console.log(data);
  return data;
};
