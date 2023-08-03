import React from "react";

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      isButtonDisabled: true,
      alertMessage: "",
    };
  }

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({
      newItem: newValue,
      isButtonDisabled: false,
    });
  };

  addItem = (itemToAdd) => {
    if (itemToAdd.trim() === "") {
      this.setState({
        alertMessage: "Error: Empty string is not valid.",
        isButtonDisabled: true,
      });
    } else {
      this.props.addItemToList(itemToAdd);
      this.setState({
        alertMessage: "",
        newItem: "",
      });
    }
  };

  handleKeyPress = (e) => {
    const pressedKey = e.key;
    if (pressedKey === "Enter") {
      this.addItem(this.state.newItem);
    }
  };

  render() {
    const { newItem, isButtonDisabled, alertMessage } = this.state;

    return (
      <>
        <div className="form">
          <input
            value={newItem}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            type="text"
          />
          <button
            disabled={isButtonDisabled}
            onClick={() => {
              this.addItem(newItem);
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
}

export default InputArea;

