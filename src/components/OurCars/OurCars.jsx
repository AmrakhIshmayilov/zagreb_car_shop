import React, { useEffect } from "react";
import "./ourcars.css";
import PageTitle from "../common/PageTitle/PageTitle";
import SidebarSection from "./SidebarSection/SidebarSection";

const OurCars = () => {
  useEffect(() => {
    document.title = "Zagreb Our Cars";
  }, []);
  return (
    <div className="our-cars-page">
      <PageTitle title="Our Cars" />
      <SidebarSection />
    </div>
  );
};

export default OurCars;
