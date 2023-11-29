import React from "react";
import { RaisedCapitalCard } from "../components/ComponentsExport";

const DashboardPage: React.FC = () => {
  return (
    <>
      <section className="h-full w-full grid grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-2 gap-8 grid-rows-3">
          <RaisedCapitalCard />
          <div>row</div>
          <div>row 2</div>
          <div className="row-span-1">row 3</div>
          <div className="row-span-1"></div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
