import React from "react";
import "./carInfoBlock.css";

const CarInfoBlock = ({ car, theme }) => {
  return (
    <div
      className={`car-info-block ${
        Boolean(theme === "grid") ? "col-md-6 col-sm-6 col-xs-12" : ""
      }`}
    >
      <div className="inner-box">
        <div className="row">
          <div
            className={`car-column ${
              Boolean(theme === "grid")
                ? "col-lg-12 col-md-12"
                : "col-lg-6 col-md-6"
            }`}
          >
            <div className="image">
              <a href="car-single.html">
                <img src={car.image} alt="" />
              </a>
            </div>
          </div>

          <div
            className={`car-column ${
              Boolean(theme === "grid")
                ? "col-lg-12 col-md-12"
                : "col-lg-6 col-md-6"
            }`}
          >
            <div className="lower-box">
              <h3>
                <a href="car-single.html">{car.name}</a>
              </h3>
              <div className="more-info">
                <ul>
                  <li>
                    Class: <span>{car.carClass}</span>
                  </li>
                  <li>
                    Air Condition:{" "}
                    <span>{car.airCondition ? "Yes" : "No"}</span>
                  </li>
                  <li>
                    Style: <span>{car.carStyle}</span>
                  </li>
                  <li>
                    Transmission: <span>{car.transmission}</span>
                  </li>
                </ul>
                <div className="price-day">
                  ${car.priceDay}
                  <span>/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfoBlock;
