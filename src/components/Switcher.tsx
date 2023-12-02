import { SwitcherProps } from "../@types/TypeExport";

const Switcher: React.FC<SwitcherProps> = ({ viewer, onChangeViewer }) => {
  return (
    <>
      <div className="rounded-md flex border dark:border-neutral-800 border-neutral-300 shadow-sm dark:bg-neutral-900 gap-1 p-0.5">
        <div
          onClick={() => onChangeViewer("pie")}
          className={`px-0.5 py-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded cursor-pointer ${
            viewer === "pie" && "bg-neutral-200 dark:bg-neutral-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-[13px] h-[13px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </div>
        <div
          onClick={() => onChangeViewer("bar")}
          className={`px-0.5 py-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded cursor-pointer ${
            viewer === "bar" && "bg-neutral-200 dark:bg-neutral-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-[13px] h-[13px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Switcher;
