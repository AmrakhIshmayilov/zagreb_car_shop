import React from "react";
import "./carSelectItem.css";
import { Link } from "react-router-dom";

const CarSelectItem = ({ car }) => {
  return (
    <div className="car-block">
      <div className="inner-box">
        <h3>{car.name}</h3>
        <figure className="image-box">
          <img src={car.image} alt="" />
        </figure>

        <div className="lower-box">
          <div className="text">{car.description} </div>
          <Link className="arrow" to={`/our-cars/${car.id}`}>
            <span className="icon fa fa-angle-right">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
              </svg>
            </span>
            <span className="text">Browse the Category</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarSelectItem;
