import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="container">
      <Header className="heading">
        <h1>{title}</h1>
      </Header>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
