import { ReactNode } from "react";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  theme: Theme;
  handleTheme: () => void;
}

export type Theme = "light" | "dark";