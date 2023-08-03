import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import InputArea from "./InputArea.jsx";
// import InputArea from "./InputAreaClass.jsx";
import Footer from "./Footer";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  function addItemToList(newItem) {
    setToDoItems((prevItems) => [...prevItems, newItem]);
  }

  function deleteItem(id) {
    setToDoItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>My To-Do-List</h1>
      </div>
      <InputArea addItemToList={addItemToList} items={toDoItems}/>
      <ToDoList items={toDoItems} deleteItem={deleteItem} />
      <Footer />
    </div>
  );
}

export default App;
