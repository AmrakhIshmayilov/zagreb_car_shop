import React, { useEffect } from "react";
import "./home.css";
import MainSlider from "../MainSlider/MainSlider";
import AboutSection from "./AboutSection/AboutSection";
import bgAbout from "../../assets/images/1.png";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = () => {
  useEffect(() => {
    document.title = "Zagreb";
  }, []);
  return (
    <div className="home">
      <MainSlider />
      <AboutSection bgImage={bgAbout} />
      <ServicesSection />
    </div>
  );
};

export default Home;
