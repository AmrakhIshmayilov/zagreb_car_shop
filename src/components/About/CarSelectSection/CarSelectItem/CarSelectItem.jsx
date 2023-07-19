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
            <span className="icon fa fa-angle-right"></span>
            <span className="text">Browse the Category</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarSelectItem;
