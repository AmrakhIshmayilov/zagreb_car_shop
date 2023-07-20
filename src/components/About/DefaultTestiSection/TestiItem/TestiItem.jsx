import React from "react";
import "./testiItem.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const TestiItem = ({ item, count }) => {
  return (
    <div className="testimonial-block">
      <div className="inner-box">
        <div className="quote-icon">
          <BiSolidQuoteAltLeft />
        </div>
        <div className="text">{item.text}</div>
        <div className="author-info">
          <div className="image">
            <img src={item.image} alt="" />
          </div>
          <h3>{item.fullName}</h3>
          <div className="designation">{item.position}</div>
        </div>
        <div className="carousel-number">
          {String(item.number).padStart(2, "0")}{" "}
          <span>/ {String(count).padStart(2, "0")}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TestiItem;
