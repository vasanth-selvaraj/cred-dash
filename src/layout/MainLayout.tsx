import React from "react";
import Navbar from "../components/Navbar";
import type { MainLayoutProps } from "../@types/TypeExport";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-screen text-neutral-800 dark:text-neutral-200 w-screen bg-neutral-200 dark:bg-neutral-800">
        <Navbar />
        <main className="main-content w-full h-full overflow-y-auto">
          <div className="pt-10 h-full w-full">
            <div className="p-4 h-full w-full">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
