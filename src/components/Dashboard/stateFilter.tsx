interface ChildProps {
  filterStates: string[];
  setFilterStates: React.Dispatch<React.SetStateAction<string[]>>;
}

const StateFilter: React.FC<ChildProps> = ({
  filterStates,
  setFilterStates,
}) => {
  function handleChecked(val: string, checked: boolean) {
    if (checked) {
      setFilterStates([...filterStates, val]);
    } else {
      setFilterStates(filterStates.filter((state) => state !== val));
    }
  }

  return (
    <>
      <div className="absolute z-20 group-hover:block hidden right-[75%] rounded-md top-0 p-2 px-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shadow-2xl">
        <div
          onClick={() => setFilterStates([])}
          className={`bg-neutral-300 textchange cursor-pointer z-40 items-center justify-evenly rounded-xl px-2 w-20 flex gap-1 dark:bg-neutral-700 ${
            filterStates.length === 0 && "hidden"
          }`}
        >
          {" "}
          Clear{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex py-1 gap-2">
          <input
            value="Active"
            checked={filterStates.includes("Active")}
            onChange={(e) => handleChecked(e.target.value, e.target.checked)}
            className="bg-transparent"
            type="checkbox"
          />
          <label>Active</label>
        </div>
        <div className="flex py-1 gap-2">
          <input
            value="Pending"
            checked={filterStates.includes("Pending")}
            onChange={(e) => handleChecked(e.target.value, e.target.checked)}
            className="bg-transparent"
            type="checkbox"
          />
          <label>Pending</label>
        </div>
        <div className="flex py-1 gap-2">
          <input
            value="Closed"
            checked={filterStates.includes("Closed")}
            onChange={(e) => handleChecked(e.target.value, e.target.checked)}
            className="bg-transparent"
            type="checkbox"
          />
          <label>Closed</label>
        </div>
      </div>
    </>
  );
};

export default StateFilter;
