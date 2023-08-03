import React, { useState } from "react";

function InputArea(props) {
  const [newItem, setNewItem] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setNewItem(newValue);
    setIsButtonDisabled(false);
  }

  function addItem(itemToAdd) {
    if (itemToAdd.trim() === "") {
      setAlertMessage("Error: Empty string is not valid.");
      setIsButtonDisabled(true);
    } else {
      props.addItemToList(itemToAdd);
      setAlertMessage("");
    }

    setNewItem("");
  }

  function handleKeyPress(e) {
    const pressedKey = e.key;

    pressedKey === "Enter" && addItem(newItem);
  }

  return (
    <>
      <div className="form">
        <input
          value={newItem}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          type="text"
        />
        <button
          disabled={isButtonDisabled}
          onClick={() => {
            addItem(newItem);
          }}
          type="submit"
        >
          Add
        </button>
      </div>
      <div className="alert-message">
        <span>{alertMessage}</span>
      </div>
    </>
  );
}

export default InputArea;
