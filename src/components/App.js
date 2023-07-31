import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
