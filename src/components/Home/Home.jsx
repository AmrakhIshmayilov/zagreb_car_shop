import React, { useEffect } from "react";
import "./home.css";
import MainSlider from "../MainSlider/MainSlider";
import AboutSection from "../AboutSection/AboutSection";
import bgAbout from "../../assets/images/1.png";

const Home = () => {
  useEffect(() => {
    document.title = "Zagreb";
  }, []);
  return (
    <div className="home">
      <MainSlider />
      <AboutSection bgImage={bgAbout} />
    </div>
  );
};

export default Home;
