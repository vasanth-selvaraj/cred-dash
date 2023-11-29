import React from "react";
import {
  RaisedCapitalCard,
  TurnOverCard,
} from "../components/ComponentsExport";

const DashboardPage: React.FC = () => {
  return (
    <>
      <section className="h-full w-full grid grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-2 gap-8 grid-rows-3">
          <RaisedCapitalCard />
          <div className="p-4 bg-white dark:bg-neutral-950 shadow-md rounded-2xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
            Col 2 Row 1
          </div>
          <div className="p-4 bg-white dark:bg-neutral-950 shadow-md rounded-2xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
            Col 2 Row 2
          </div>
          <TurnOverCard />
          <div className="p-4 bg-white dark:bg-neutral-950 shadow-md rounded-2xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
            Col 2 row 3
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
