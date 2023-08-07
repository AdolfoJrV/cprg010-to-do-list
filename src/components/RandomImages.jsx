import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const RandomImages = () => {
  const [imageUrl, setImageUrl] = useState("");

  const { isDarkMode } = React.useContext(ThemeContext);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await fetch("https://picsum.photos/400");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const url = response.url;
      setImageUrl(url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div className={isDarkMode ? "img-container-dm" : "img-container-lt"}>
      <img className="images" src={imageUrl} alt="Lorem Picsum" />
    </div>
  );
};

export default RandomImages;
