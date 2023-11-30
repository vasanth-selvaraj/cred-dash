import React from "react";
import { BadgeProps } from "../@types/TypeExport";

const Badge: React.FC<BadgeProps> = ({ state }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div
          className={`inline-flex items-center py-1 w-[80px] justify-evenly rounded-full ${
            state === "Active"
              ? "dark:bg-green-500/50 bg-green-100/60"
              : state === "Pending"
              ? "dark:bg-amber-500/50 bg-amber-100/60"
              : "dark:bg-red-500/50 bg-red-100/60"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              state === "Active"
                ? "bg-green-500 dark:bg-green-100"
                : state === "Pending"
                ? "bg-amber-500 dark:bg-amber-100"
                : "bg-red-500 dark:bg-red-100"
            } `}
          ></span>
          <h2
            className={`text-sm font-medium ${
              state === "Active"
                ? "text-green-600 dark:text-green-50"
                : state === "Pending"
                ? "text-amber-600 dark:text-amber-50"
                : "text-red-600 dark:text-red-50"
            } `}
          >
            {state}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Badge;
