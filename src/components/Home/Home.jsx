import React, { useEffect } from "react";
import "./home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MainSlider from "./MainSlider/MainSlider";
import AboutSection from "./AboutSection/AboutSection";
import bgAbout from "../../assets/images/1.png";
import ServicesSection from "./ServicesSection/ServicesSection";
import CarsSection from "./CarsSection/CarsSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import BlogSection from "./BlogSection/BlogSection";

const Home = () => {
  useEffect(() => {
    document.title = "Zagreb";
  }, []);
  return (
    <div className="home-page">
      <MainSlider />
      <AboutSection bgImage={bgAbout} />
      <ServicesSection />
      <CarsSection />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default Home;
