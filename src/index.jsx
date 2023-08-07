import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./components/ThemeProvider.jsx";
import ThemeContext from "./components/ThemeContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWithBodyClass = () => {
  const { isDarkMode } = React.useContext(ThemeContext);

  React.useEffect(() => {
    // Update the body class based on the dark mode state
    if (isDarkMode) {
      document.body.classList.add("body-dm");
    } else {
      document.body.classList.remove("body-dm");
    }
  }, [isDarkMode]);

  return <App />;
};

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppWithBodyClass />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
