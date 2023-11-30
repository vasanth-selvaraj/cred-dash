import { Faker, en } from "@faker-js/faker";
import type { CompanyTrendData } from "../@types/TypeExport";

const faker = new Faker({ locale: [en] });

export const generateMockCompanyData = (
  numberOfCompanies: number,
  name: string
): CompanyTrendData[] => {
  const data: CompanyTrendData[] = [];

  for (let i = 0; i < numberOfCompanies; i++) {
    const company: CompanyTrendData = {
      month: faker.date.month(),
      [name]: faker.number.int({ min: 1000, max: 100000 }),
    };
    data.push(company);
  }
  //   console.log(data);
  return data;
};
