import React from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { Button } from "reactstrap";
import { CiDark, CiLight } from "react-icons/ci";

function Footer() {
  const year = new Date().getFullYear();

  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  const onThemeButtonClicked = () => {
    toggleTheme();
  };

  return (
    <div className="footer mt-5">
      <p className={isDarkMode ? "nav-dm" : "nav-lt"}>
        <Link className={isDarkMode ? "link-dm" : "link-lt"} to="/fun-fact">Fun Fact</Link>
        <span> | </span>
        <Link className={isDarkMode ? "link-dm" : "link-lt"} to="/todo-list">To Do List</Link>
      </p>
      <p>Copyright &copy;{year}</p>
      <Button className="modeButton" size="sm" onClick={onThemeButtonClicked}>
        {isDarkMode ? <CiLight /> : <CiDark />}
      </Button>
    </div>
  );
}

export default Footer;
