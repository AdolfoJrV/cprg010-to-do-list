import React from "react";
import ToDoItems from "./ToDoItems.jsx";

function ToDoList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <ToDoItems key={index} id={index} value={item} onChecked={props.deleteItem} />
      ))}
    </ul>
  );
}

export default ToDoList;

