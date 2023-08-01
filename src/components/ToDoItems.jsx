import React, { useState } from "react";

function ToDoItems(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseHover() {
    setIsMouseOver(!isMouseOver); // create a seperate function for the mouseover and mouseout
  }

  return (
    <div
      onClick={() => props.onChecked(props.id)}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseHover}
    >
      <li style={{ backgroundColor: isMouseOver && "pink" }}>{props.value}</li>
    </div>
  );
}

export default ToDoItems
