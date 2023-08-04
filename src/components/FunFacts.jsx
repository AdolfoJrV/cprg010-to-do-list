import React, { useState, useEffect } from "react";
import { getFunFactApi } from '../utils/getFunFactApi.js';

const FunFacts = () => {
  // Initialize the featured fun fact.
  const [funFact, setFunFact] = useState("");

  const getFunFact = async() => {
    const funFact = await getFunFactApi();
    setFunFact(funFact);
  }

  useEffect(() => {
    getFunFact();
  }, []);
  return (
    <p>{ funFact }</p>
  );
}

export default FunFacts;

