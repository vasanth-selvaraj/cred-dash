import { Faker, en } from "@faker-js/faker";
import { InterestData } from "../@types/TypeExport";

const faker = new Faker({ locale: [en] });

export const generateMockInterestData = (
  numberOfdatasets: number,
  name: string
): InterestData[] => {
  const data: InterestData[] = [];

  for (let i = 0; i < numberOfdatasets; i++) {
    const datasets: InterestData = {
      month: faker.date.month(),
      "Loan Interest": faker.number.int({ min: 0, max: 100 }),
      "Credit Card Interest": faker.number.int({ min: 0, max: 100 }),
      "Mortgage Interest": faker.number.int({ min: 0, max: 100 }),
    };
    data.push(datasets);
  }

  return data;
};
