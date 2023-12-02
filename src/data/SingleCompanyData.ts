import { Faker, en } from "@faker-js/faker";
import { companyProfitData } from "../@types/TypeExport";

const faker = new Faker({ locale: [en] });

export const GeneratecompanyProfitData = (
  year: number,
  currentnetProfit: number,
  currentTurnover: number
) => {
  const data: companyProfitData[] = [];

  for (year; year < new Date().getFullYear(); year++) {
    const profitdata: companyProfitData = {
      year: year,
      netProfit: faker.number.int({ min: 150000, max: 899999 }),
      turnover: faker.number.int({ min: 150000, max: 899999 }),
    };
    data.push(profitdata);
  }
  data.push({
    year: new Date().getFullYear(),
    netProfit: currentnetProfit,
    turnover: currentTurnover,
  }); // pushing the current year netprofit and turnover from the company assuming that is the data we have in array generated.
  return data;
};
