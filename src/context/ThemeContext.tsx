import { createContext, useState, FC } from "react";
import type {
  ThemeContextProps,
  Theme,
  ThemeProviderProps,
} from "../@types/TypeExport";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", "dark");
  };

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
