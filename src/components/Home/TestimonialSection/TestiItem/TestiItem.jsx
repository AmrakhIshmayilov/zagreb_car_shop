import React from "react";
import "./testiItem.css";

const TestiItem = ({ item, count }) => {
  return (
    <div className="testimonial-block">
      <div className="inner-box">
        <div className="quote-icon">
          <span className="icon flaticon-left-quote"></span>
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
          {item.number} <span>/ {count}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default TestiItem;
