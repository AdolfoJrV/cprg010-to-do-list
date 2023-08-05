import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import FunFacts from "../components/FunFacts.jsx";
import RandomImages from "../components/RandomImages.jsx";

const FunFactPage = () => {
  return (
    <MainLayout title="Fun Fact!">
      <FunFacts />
      <RandomImages />
    </MainLayout>
  );
};

export default FunFactPage;
