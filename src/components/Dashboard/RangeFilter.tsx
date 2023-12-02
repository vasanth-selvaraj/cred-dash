const RangeFilter: React.FC = () => {
  function handleSliderChange(e: any) {
    e.stopPropagation();
  }
  return (
    <>
      <div className="absolute z-20 group-hover:block hidden right-[100%] rounded-md top-0 p-2 px-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shadow-2xl">
        <div
          //   onClick={() => setFilterStates([])}
          className={`bg-neutral-300 textchange cursor-pointer z-40 items-center justify-evenly rounded-xl px-2 w-20 flex gap-1 dark:bg-neutral-700 ${
            false && "hidden"
          }`}
        >
          {" "}
          Clear{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 hover:text-red-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex py-1 gap-2">
          <input
            min="0"
            max="100"
            type="range"
            className="w-full h-2 rounded appearance-none bg-gradient-to-r from-purple-500 to-indigo-500"
            onChange={(e) => handleSliderChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default RangeFilter;
