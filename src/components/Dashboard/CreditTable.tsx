import { useContext, useState } from "react";
import { CompanyData, sortState, field, value } from "../../@types/TypeExport";
import {
  CompanyDataContext,
  SelectedCompanyContext,
} from "../../context/ContextExports";
import { Badge, RangeFilter, StateFilter } from "../ComponentsExport";
import { useNavigate } from "react-router-dom";
import { SortTableData, SortTableByDate } from "../../data/functionExports";

const CreditTable: React.FC = () => {
  //importing Company data state and funcion to update the state from context
  const {
    companyData,
    updateCompanyData,
  }: {
    companyData: CompanyData[];
    updateCompanyData: (data: CompanyData[]) => void;
  } = useContext(CompanyDataContext);

  const [value, setValue] = useState<value>({ startDate: null, endDate: null });

  const onChangeDate = (val: value) => {
    setValue(val);
  };

  //import funtion to update the state of single company data from context
  const {
    updateSelectedCompany,
  }: {
    updateSelectedCompany: (data: CompanyData) => void;
  } = useContext(SelectedCompanyContext);

  const history = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<sortState>({ field: "", type: "desc" });
  const [filterStates, setFilterStates] = useState<string[]>([]);

  function handleSort(field: field) {
    setSort({ field: field, type: sort.type === "asc" ? "desc" : "asc" });
    updateCompanyData(SortTableData(companyData, sort.type, field));
  }

  function handleDateSort(event: any, field: field) {
    event.stopPropagation();
    setSort({ field: field, type: sort.type === "asc" ? "desc" : "asc" });
    updateCompanyData(SortTableByDate(companyData, sort.type, field));
  }

  function handleDetailedCompanyView(company: CompanyData) {
    updateSelectedCompany(company);
    history(`/comapany-details/${company.companyName}`); //Rounting to dettailed company view
  }

  return (
    <>
      <div className=" flex flex-col gap-4 py-4">
        <div className="flex justify-between">
          <div className="sm:w-56 w-36 relative z-10">
            <input //search input field
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Company"
              className="bg-white border placeholder:text-sm placeholder:font-medium focus:outline-none pl-1.5 h-8 flex items-center w-full placeholder:text-neutral-500 dark:placeholder:text-neutral-500 border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 rounded-md"
            />
            {searchTerm === "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 right-2 top-[28%] absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            ) : (
              <div onClick={() => setSearchTerm("")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 right-2 top-[28%] absolute hover:text-red-500 cursor-pointer transition-colors duration-150 ease-linear"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="relative z-20">
            <RangeFilter value={value} onchangeDate={onChangeDate} />
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
                    <div
                      onClick={() => handleSort("loanAmount")}
                      className="flex flex-col cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "loanAmount" && sort.type === "asc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "loanAmount" &&
                          sort.type === "asc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "loanAmount" && sort.type === "desc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "loanAmount" &&
                          sort.type === "desc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-2 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Loan Interest</span>
                    <div
                      onClick={() => handleSort("loanInterest")}
                      className="flex flex-col cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "loanInterest" && sort.type === "asc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "loanInterest" &&
                          sort.type === "asc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "loanInterest" && sort.type === "desc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "loanInterest" &&
                          sort.type === "desc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Net Profit</span>
                    <div
                      onClick={() => handleSort("netProfit")}
                      className="flex flex-col cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "netProfit" && sort.type === "asc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "netProfit" &&
                          sort.type === "asc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "netProfit" && sort.type === "desc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "netProfit" &&
                          sort.type === "desc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Turnover</span>
                    <div
                      onClick={() => handleSort("turnover")}
                      className="flex flex-col cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "turnover" && sort.type === "asc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "turnover" &&
                          sort.type === "asc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "turnover" && sort.type === "desc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "turnover" &&
                          sort.type === "desc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-3">
                    <span>Registered on</span>
                    <div className="flex flex-col relative group cursor-pointer">
                      <svg
                        onClick={(event) =>
                          handleDateSort(event, "registrationDate")
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "registrationDate" &&
                          sort.type === "asc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "registrationDate" &&
                          sort.type === "asc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>

                      <svg
                        onClick={(event) =>
                          handleDateSort(event, "registrationDate")
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={
                          sort.field === "registrationDate" &&
                          sort.type === "desc"
                            ? "3"
                            : "1.5"
                        }
                        stroke="currentColor"
                        className={`w-3 h-3 ${
                          sort.field === "registrationDate" &&
                          sort.type === "desc" &&
                          "text-purple-400 animate-pulse"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-2 px-4 text-sm text-left font-medium rtl:text-right"
                >
                  <div className="flex items-center justify-center gap-x-2">
                    <span>Status</span>
                    <div className="group relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-4 h-4 cursor-pointer ${
                          filterStates.length !== 0 &&
                          "text-purple-500 dark:text-purple-600"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                        />
                      </svg>
                      <StateFilter
                        filterStates={filterStates}
                        setFilterStates={setFilterStates}
                      />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              {companyData.map((data, idx) => {
                if (
                  data.companyName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) &&
                  (filterStates.length === 0 ||
                    filterStates.includes(data.accountStatus)) //if statement to filter and render the search term
                ) {
                  //If statement to filter date range, doing this way as a workaround for Type issue, as I'm assigning null to inital start and end date
                  if (value.startDate && value.endDate) {
                    var dateFrom = new Date(
                      value.startDate
                    ).toLocaleDateString();
                    var dateTo = new Date(value.endDate).toLocaleDateString();
                    var dateCheck = data.registrationDate.toLocaleDateString();
                    var d1 = dateFrom.split("/");
                    var d2 = dateTo.split("/");
                    var c = dateCheck.split("/");

                    var from = new Date(
                      parseInt(d1[2]),
                      parseInt(d1[1]) - 1,
                      parseInt(d1[0])
                    );
                    var to = new Date(
                      parseInt(d2[2]),
                      parseInt(d2[1]) - 1,
                      parseInt(d2[0])
                    );
                    var check = new Date(
                      parseInt(c[2]),
                      parseInt(c[1]) - 1,
                      parseInt(c[0])
                    );

                    if (!(check >= from && check <= to)) {
                      return null;
                    }
                  }
                  return (
                    <tr
                      key={data.id}
                      className="divide-x divide-neutral-200 dark:divide-neutral-800"
                    >
                      <td className="py-2 px-1 text-sm text-left rtl:text-right">
                        <div className="flex items-center justify-center gap-x-3">
                          <span>{data.id}</span>
                        </div>
                      </td>
                      <td className="py-2 group px-1 text-sm text-left rtl:text-right">
                        <div className="flex w-full relative px-2 text-left gap-x-3">
                          <span>{data.companyName}</span>
                          <div
                            onClick={() => handleDetailedCompanyView(data)}
                            className="absolute opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1 right-2 z-10 border border-neutral-200 dark:border-neutral-700 rounded px-1 py-0.5 cursor-pointer hover:bg-neutral-200 duration-150 ease-linear hover:dark:bg-neutral-800"
                          >
                            view
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="w-3 h-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                              </svg>
                            </span>
                          </div>
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
                            {new Date(
                              data.registrationDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-2 text-sm whitespace-nowrap">
                        <Badge state={data.accountStatus} />
                      </td>
                    </tr>
                  );
                  // } else return <></>;
                } else return <></>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CreditTable;
