import React from "react";
import "./carSelectSection.css";
import PageSection from "../../common/PageSection/PageSection";

const CarSelectSection = () => {
  return (
    <div className="cars-select-section">
      <PageSection
        title={
          <>
            SELECT <span>YOUR CAR BY</span>
          </>
        }
        rotateTitle="OUR CARS"
      >
        <div className="select-car-tabs">
          <ul className="tab-buttons clearfix">
            <li className="tab-btn active-btn" data-tab="#tab-one">
              {" "}
              BRANDS
            </li>
            <li className="tab-btn" data-tab="#tab-two">
              {" "}
              TYPES
            </li>
          </ul>
          <div className="tabs-content">
            <div className="tab active-tab" id="tab-one"></div>
            <div className="tab" id="tab-two"></div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default CarSelectSection;
