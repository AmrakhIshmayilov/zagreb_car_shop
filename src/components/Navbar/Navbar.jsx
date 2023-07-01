import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./navbar.css";
import { FaFacebookF, FaTwitter, FaPinterestP, FaRss } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [pathname, setPathname] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={`main-header ${pathname === "/" ? "header-style-one" : ""}`}
    >
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
        <div className="auto-container">
          <div className="outer-container">
            <div className="logo-nav">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <nav className="main-menu">
                {/* <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div> */}

                <div className="navbar-collapse">
                  <ul className="navigation">
                    <li className={pathname === "/" ? "current" : ""}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={pathname === "/about" ? "current" : ""}>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className={pathname === "/services" ? "current" : ""}>
                      <Link to="/services">Services</Link>
                    </li>
                    <li className={pathname === "/our-cars" ? "current" : ""}>
                      <Link to="/our-cars">Our Cars</Link>
                    </li>
                    <li className={pathname === "/gallery" ? "current" : ""}>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className={pathname === "/blog" ? "current" : ""}>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className={pathname === "/contact" ? "current" : ""}>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
