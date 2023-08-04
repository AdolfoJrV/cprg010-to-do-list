import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <p>
          <Link to="/fun-fact">Fun Fact</Link>
          <span> | </span>
          <Link to="/todo-list">To Do List</Link>
        </p>
        <p>Copyright &copy;{year}</p>
      </div>
    </>
  );
}

export default Footer;
