import React, { useState } from "react";
import ToDoItems from "./ToDoItems.jsx";
import InputArea from "./InputArea.jsx";
import Footer from "./Footer";

function App() {
  const [newItem, setNewItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  const [isMouseOver, setMouseOver] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleChange(event) {
    const newValue = event.target.value;

    setNewItem(newValue);
    setIsButtonDisabled(false);
  }

  function addItem(itemToAdd) {
    // Incorporate the form validation here or inside the handleKeyPress() function.
    if (itemToAdd.trim() === "") {
      setAlertMessage("Error: Empty string is not valid.");
      setIsButtonDisabled(true);
    } else {
      setToDoItems((prevItems) => [...prevItems, itemToAdd]);
      setAlertMessage("");
    }

    setNewItem("");
  }

  function deleteItem(id) {
    setToDoItems((prevItems) => prevItems.filter((_, index) => index !== id));
    setAlertMessage("");
  }

  function handleMouseOver() {
    if (!isButtonDisabled) {
      setMouseOver(!isMouseOver);
    }
  }

  function handleKeyPress(event) {
    const pressedKey = event.key;

    // Calls on the addItem function and passing newItem argument to itemToAdd
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
        disabled={isButtonDisabled}
      />
      <div>
        <div className="alert-message">
          <span>{alertMessage}</span>
        </div>
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
