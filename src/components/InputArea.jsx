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
        Add
      </button>
    </div>
  );
}

export default InputArea;

