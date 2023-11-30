import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import type { MainLayoutProps, ThemeContextProps } from "../@types/TypeExport";
import { ThemeContext } from "../context/ContextExports";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextProps;
  return (
    <>
      <div
        className={`h-screen text-neutral-800 dark:text-neutral-200 w-screen bg-neutral-200 dark:bg-neutral-900 ${
          theme==="light" ? "light" : "dark"
        }`}
      >
        <Navbar />
        <main className="main-content w-full h-full overflow-y-auto">
          <div className="md:px-4 md:pt-10 pt-16 h-full w-full">
            <div className="px-4 md:pt-10 pb-14 h-full w-full">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
