import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.handleKeyPress}
        type="text"
      />
      <button
        disabled={props.disabled}
        onClick={() => {
          props.addItem(props.value);
        }}
        type="submit"
      >
        <span
          style={{ background: props.isMouseOver && "pink" }}
          onMouseOver={props.mouseOver}
          onMouseOut={props.mouseOver}
        >
          Add
        </span>
      </button>
    </div>
  );
}

export default InputArea;
