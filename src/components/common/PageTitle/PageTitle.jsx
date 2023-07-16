import React from "react";
import "./pageTitle.css";
import pageTitleImage from "../../../assets/images/page-title.jpg";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const PageTitle = ({ title }) => {
  return (
    <div
      className="page-title"
      style={{ backgroundImage: `url(${pageTitleImage})` }}
    >
      <div className="auto-container">
        <h1>{title}</h1>
        <div class="bread-crumb-outer">
          <ul class="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
              <RiArrowRightSLine />
            </li>
            <li class="active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
