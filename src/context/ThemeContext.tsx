import { createContext, useState, FC, useEffect } from "react";
import type {
  ThemeContextProps,
  Theme,
  ThemeProviderProps,
} from "../@types/TypeExport";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const T: Theme | null = localStorage.getItem("theme") as Theme | null;
    if (T !== null) {
      setTheme(T);
    }
  }, []);
  const contextValue: ThemeContextProps = {
    theme,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
