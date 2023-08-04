import React from "react";
import MainLayout from "../layout/MainLayout.jsx";
import FunFacts from "../components/FunFacts.jsx";

const FunFactPage = () => {
  return (
    <MainLayout title="Fun Facts!">
      <FunFacts />
    </MainLayout>
  );
};

export default FunFactPage;
