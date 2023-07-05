import React, { useEffect } from "react";
import "./home.css";
import MainSlider from "../MainSlider/MainSlider";

const Home = () => {
  useEffect(() => {
    document.title = "Zagreb";
  }, []);
  return (
    <div className="home">
      <MainSlider />
    </div>
  );
};

export default Home;
