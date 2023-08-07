import React, { useState } from "react";
import ThemeContext from "./ThemeContext.jsx";

function ToDoItems(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { isDarkMode } = React.useContext(ThemeContext);

  function handleMouseHover() {
    setIsMouseOver(!isMouseOver); // create a seperate function for the mouseover and mouseout
  }

  return (
    <div
      onClick={() => props.onChecked(props.id)}
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseHover}
    >
      <li
        style={
          isDarkMode
            ? { backgroundColor: isMouseOver && "#60656f" }
            : { backgroundColor: isMouseOver && "#ffeaa7" }
        }
      >
        {props.value}
      </li>
    </div>
  );
}

export default ToDoItems;
