import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FunFactPage from "./pages/FunFactPage.jsx";
import ToDoListPage from "./pages/ToDoListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ThemeContext from "./components/ThemeContext.jsx";

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Toggle the "body-dm" class on the main <body> tag based on dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("body-dm");
    } else {
      document.body.classList.remove("body-dm");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="fun-fact" element={<FunFactPage />} />
        <Route path="todo-list" element={<ToDoListPage />} />
        <Route index element={<Navigate to="/todo-list" />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
