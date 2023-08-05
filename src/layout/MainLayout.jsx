import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Container } from "reactstrap";

const MainLayout = (props) => {
  const { children, title } = props;
  return (
    // Note: Using mx-1 makes the div not centered.
    // Work-around, using ml and mr instead of just mx.
    <Container className="container mt-2 ml-1 mr-1">
      <Header className="heading mt-4">
        <h1>{title}</h1>
      </Header>
      {children}
      <Footer />
    </Container>
  );
};

export default MainLayout;
