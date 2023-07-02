import React, { useEffect } from "react";
import "./about.css";

const About = () => {
  useEffect(() => {
    document.title = "Zagreb About Us";
  }, []);
  return <div className="about">About</div>;
};

export default About;
