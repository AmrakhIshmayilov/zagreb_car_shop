import React, { useEffect } from "react";
import "./about.css";
import PageTitle from "../common/PageTitle/PageTitle";
import ExperianceSection from "./ExperianceSection/ExperianceSection";
import CarSelectSection from "./CarSelectSection/CarSelectSection";
import DefaultTestiSection from "./DefaultTestiSection/DefaultTestiSection";
import SponsorsSection from "./SponsorsSection/SponsorsSection";

const About = () => {
  useEffect(() => {
    document.title = "Zagreb About Us";
  }, []);
  return (
    <div className="about-page">
      <PageTitle title="About Us" />
      <ExperianceSection />
      <CarSelectSection />
      <DefaultTestiSection />
      <SponsorsSection />
    </div>
  );
};

export default About;
