import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FunFactPage from "./pages/FunFactPage.jsx";
import ToDoListPage from "./pages/ToDoListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="fun-fact" element={<FunFactPage />} />
          <Route path="todo-list" element={<ToDoListPage />} />
          <Route index element={<Navigate to="/todo-list" />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
