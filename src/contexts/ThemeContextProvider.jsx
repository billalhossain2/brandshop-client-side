import { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(()=>false);
  const theme = { isDarkMode, setIsDarkMode };
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
