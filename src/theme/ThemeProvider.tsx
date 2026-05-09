import { createContext, useContext } from "react";
import { lightTheme } from "./themes";

export const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ theme, children }: any) => {
  return (
    <ThemeContext.Provider value={theme || lightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
