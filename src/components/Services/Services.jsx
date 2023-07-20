import React, { useEffect } from "react";
import "./services.css";
import PageTitle from "../common/PageTitle/PageTitle";
import ServicesSection from "./ServicesSection/ServicesSection";
import AppSection from "./AppSection/AppSection";
import CarsSection from "./CarsSection/CarsSection";

const Services = () => {
  useEffect(() => {
    document.title = "Zagreb Services";
  }, []);
  return (
    <div className="services-pge">
      <PageTitle title="Services" />
      <ServicesSection />
      <AppSection />
      <CarsSection />
    </div>
  );
};

export default Services;
