import React from "react";
import "./servicesBlock.css";
import { Link } from "react-router-dom";

const ServicesBlock = ({ service }) => {
  return (
    <div className="services-block col-md-4 col-sm-6 col-xs-12">
      <div className="inner-box">
        <div className="upper-box">
          <div className="icon-box">{service.icon}</div>
          <span className="number">{service.number}</span>
        </div>
        <div className="lower-box">
          <h3>
            <Link to={`/services/${service.id}`}>{service.title}</Link>
          </h3>
          <div className="text">{service.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
