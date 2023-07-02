import React, { useEffect } from "react";
import "./services.css";

const Services = () => {
  useEffect(() => {
    document.title = "Zagreb Services";
  }, []);
  return <div>Services</div>;
};

export default Services;
