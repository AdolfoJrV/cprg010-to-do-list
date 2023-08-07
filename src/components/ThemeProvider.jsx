import React from "react";
import ThemeContext from "./ThemeContext.jsx";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
