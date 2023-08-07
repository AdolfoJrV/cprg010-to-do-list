import React from "react";

const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => null, 
});

export default ThemeContext;
