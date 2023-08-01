import React, { useState } from "react";
import ToDoItems from "./ToDoItems.jsx";
import InputArea from "./InputArea.jsx";
import Footer from "./Footer";

function App() {
  const [newItem, setNewItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const newValue = event.target.value;

    setNewItem(newValue);
  }

  function addItem(itemToAdd) {
    itemToAdd !== "" && setToDoItems((prevItems) => [...prevItems, itemToAdd]);

    setNewItem("");
  }

  function deleteItem(id) {
    setToDoItems((prevItems) =>
      prevItems.filter((_, index) =>  index !== id),
    );
  }

  function handleMouseOver() {
    setMouseOver(!isMouseOver);
  }

  function handleKeyPress(event) {
    const pressedKey = event.key;

    pressedKey === "Enter" && addItem(newItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>My To-Do-List</h1>
      </div>
      <InputArea
        value={newItem}
        onChange={handleChange}
        addItem={addItem}
        mouseOver={handleMouseOver}
        isMouseOver={isMouseOver}
        handleKeyPress={handleKeyPress}
      />
      <div>
        <ul>
          {toDoItems.map((item, index) => (
            <ToDoItems
              key={index}
              id={index}
              onChecked={deleteItem}
              value={item}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
