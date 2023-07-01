import React from "react";
import "./navbar.css";
import { FaFacebookF, FaTwitter, FaPinterestP, FaRss } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="main-header">
      <div className="header-top">
        <div className="auto-container">
          <div className="wrapper-header-top">
            <div className="header-top-left">
              <div className="social-icon">
                <a href="##">
                  <FaFacebookF />
                </a>
                <a href="##">
                  <FaTwitter />
                </a>
                <a href="##">
                  <TfiGoogle />
                </a>
                <a href="##">
                  <FaPinterestP />
                </a>
                <a href="##">
                  <FaRss />
                </a>
              </div>
            </div>
            <div className="header-top-right">
              <ul>
                <li>
                  <BsTelephone className="icon" />
                  +091 234 5678
                </li>
                <li>
                  <GoMail className="icon" />
                  info@carhire.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-box">
        <div className="auto-container"></div>
      </div>
    </div>
  );
};

export default Navbar;
