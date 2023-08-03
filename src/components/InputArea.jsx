import React, { useState, useEffect } from "react";

function InputArea(props) {
  const [newItem, setNewItem] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [randomTasks, setRandomTasks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response;
      try {
        response = await fetch("/data/tasks.json"); 
        const data = await response.json();
        setRandomTasks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function createRandomTask() {
    const taskList = randomTasks.tasks;
    const randomIndex = (Math.random() * (taskList.length - 1)).toFixed(0);
    const randomTask = taskList[randomIndex];
    setNewItem(randomTask);
    inputRef.current.value = randomTask;
    inputRef.current.focus();
  }

  const inputRef = React.createRef();

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
          ref={inputRef}
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
        <button type="button" onClick={createRandomTask}>Random Task</button>
      </div>
      <div className="alert-message">
        <span>{alertMessage}</span>
      </div>
    </>
  );
}

export default InputArea;
