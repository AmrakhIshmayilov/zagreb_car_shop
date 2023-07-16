import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import footerLogo from "../../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="auto-container">
        <div className="row justify-content-between flex-column flex-md-row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul className="footer-nav">
              <li>
                <Link to="/">
                  <img src={footerLogo} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/our-cars">Our Cars</Link>
              </li>
              {/* <li>
                <Link to="##">Service Rates</Link>
              </li> */}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
            <div className="copyright">
              Copyright © 2017 All Rights Reserved. Zagreb
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
