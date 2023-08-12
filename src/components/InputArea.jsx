import React, { useState, useEffect } from "react";
import ThemeContext from "../components/ThemeContext.jsx";
import { Button } from "reactstrap";

function InputArea(props) {
  const [newItem, setNewItem] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [randomTasks, setRandomTasks] = useState(null);
  const { isDarkMode } = React.useContext(ThemeContext);

  useEffect(() => {
    async function fetchData() {
      let response;
      try {
        response = await fetch(`${process.env.PUBLIC_URL}/data/tasks.json`);
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
    setIsButtonDisabled(false);
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
    } else if (props.items.includes(itemToAdd)) {
      setAlertMessage(`"${itemToAdd}" is already in the task list.`);
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
      <div>
        <input
          className={isDarkMode ? "input-dm" : "input-lt"}
          ref={inputRef}
          value={newItem}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          type="text"
        />
        <button
          className="add-button"
          disabled={isButtonDisabled}
          onClick={() => {
            addItem(newItem);
          }}
          type="submit"
        >
          Add
        </button>
      </div>
        <Button className="rnd-button" outline={isDarkMode ? false : true} type="button" onClick={createRandomTask}>
          Random Task
        </Button>
      <div className="alert-message">
        <span>{alertMessage}</span>
      </div>
    </>
  );
}

export default InputArea;
