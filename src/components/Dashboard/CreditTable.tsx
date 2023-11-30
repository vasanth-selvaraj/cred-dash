import { useContext, useState } from "react";
import { CompanyData } from "../../@types/TypeExport";
import { CompanyDataContext } from "../../context/ContextExports";
import { Badge } from "../ComponentsExport";

const CreditTable: React.FC = () => {
  const companyData: CompanyData[] = useContext(CompanyDataContext);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className=" flex flex-col gap-4 py-4">
        <div className="flex justify-between">
          <div className="w-56 relative">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-white border placeholder:font-medium focus:outline-none pl-1.5 h-8 flex items-center w-full placeholder:text-neutral-500 dark:placeholder:text-neutral-500 border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 rounded-md"
            />
            {searchTerm === "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 right-2 top-[28%] absolute"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            ) : (
              <div onClick={() => setSearchTerm("")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 right-2 top-[28%] absolute hover:text-red-500 cursor-pointer transition-colors duration-150 ease-linear"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="w-full overflow-y-auto">
          <table className="min-w-full rounded-lg gap-2 shadow-md divide-x bg-white dark:bg-neutral-950 divide-neutral-200 dark:divide-neutral-800">
            <thead className="border-b border-neutral-200 dark:border-neutral-800">
              <tr className="divide-x divide-neutral-200 dark:divide-neutral-800">
                <th
                  scope="col"
                  className="py-2 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Sl.No</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-2 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Company Name</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Loan Amount</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-2 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Loan Interest</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Net Profit</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Turnover</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Registered on</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Status</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              {companyData.map((data, idx) => {
                return (
                  <tr
                    key={idx}
                    className="divide-x divide-neutral-200 dark:divide-neutral-800"
                  >
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex items-center justify-center gap-x-3">
                        <span>{idx + 1}</span>
                      </div>
                    </td>
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex px-2 text-left gap-x-3">
                        <span>{data.companyName}</span>
                      </div>
                    </td>
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex items-center justify-center gap-x-3">
                        <span>{data.loanAmount} ₹</span>
                      </div>
                    </td>
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex items-center justify-center gap-x-3">
                        <span>{data.loanInterest} %</span>
                      </div>
                    </td>
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex items-center justify-center gap-x-3">
                        <span>{data.netProfit} ₹</span>
                      </div>
                    </td>
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex items-center justify-center gap-x-3">
                        <span>{data.turnover} ₹</span>
                      </div>
                    </td>
                    <td className="py-2 px-1 text-sm text-left rtl:text-right">
                      <div className="flex items-center justify-center gap-x-3">
                        <span>
                          {data.registrationDate.getDate()}/
                          {data.registrationDate.getMonth()}/
                          {data.registrationDate.getFullYear()}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap">
                      <Badge state={data.accountStatus} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CreditTable;
