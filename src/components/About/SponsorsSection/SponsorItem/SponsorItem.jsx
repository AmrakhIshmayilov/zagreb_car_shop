import React from "react";
import "./sponsorItem.css";

const SponsorItem = ({ sponsor }) => {
  return (
    <li className="slide-item">
      <figure className="image-box">
        <a href="##">
          <img src={sponsor.image} alt="" />
        </a>
      </figure>
    </li>
  );
};

export default SponsorItem;
