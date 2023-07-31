import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return <p>Copyright &copy;{year}</p>;
}

export default Footer;
