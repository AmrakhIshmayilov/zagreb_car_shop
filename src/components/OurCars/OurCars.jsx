import React, { useEffect } from "react";
import "./ourcars.css";

const OurCars = () => {
  useEffect(() => {
    document.title = "Zagreb Our Cars";
  }, []);
  return <div>OurCars</div>;
};

export default OurCars;
