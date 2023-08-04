import React from "react";

function Header(props) {
  const { children, ...extra } = props;
  return <header {...extra}>{children}</header>;
}

export default Header;
