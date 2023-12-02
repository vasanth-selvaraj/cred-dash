import { SelectedCompanyContext } from "../../context/SelectedCompany";
import { CompanyData } from "../../@types/company";
import React, { useContext } from "react";

const AddressCard: React.FC = () => {
  const { selectedcompanyData }: { selectedcompanyData: CompanyData } =
    useContext(SelectedCompanyContext);
  return (
    <>
      <div className="sm:col-span-2 col-span-1 bg-white p-4 flex flex-col gap-4 dark:bg-neutral-950 shadow-md rounded-xl hover:scale-[1.009] transition-transform duration-150 ease-linear">
        <h1 className="text-center text-2xl font-semibold">Address</h1>
        <div className="text-center flex flex-col gap-2">
          <h1>{selectedcompanyData.address.street}</h1>
          <h1>
            {selectedcompanyData.address.city} -{" "}
            {selectedcompanyData.address.pincode}
          </h1>
          <h1>{selectedcompanyData.address.country}</h1>
          <h1>
            <a href={`tel:${selectedcompanyData.contactNumber}`}>
              +91 - {selectedcompanyData.contactNumber}
            </a>
          </h1>
          <h1>
            email -{" "}
            <a href={`mailto:${selectedcompanyData.contactEmail}`}>
              {selectedcompanyData.contactEmail}
            </a>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
