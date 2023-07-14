import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./navbar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaRss,
  FaTimes,
  FaLinkedinIn,
} from "react-icons/fa";
import { TfiGoogle, TfiMenu } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { CgArrowLongUp } from "react-icons/cg";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo-2.png";

const Navbar = () => {
  const [pageName, setPageName] = useState("");
  const [showHiddenBar, setShowHiddenBar] = useState(false);
  const [fixHeader, setFixHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 200) {
        setFixHeader(true);
      } else {
        setFixHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setPageName(location.pathname);
  }, [location.pathname]);

  const handleNavbarOpener = () => {
    setShowHiddenBar(true);
  };
  const handleNavbarCloser = () => {
    setShowHiddenBar(false);
  };

  const handleScrollToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <div
        className={`main-header ${
          pageName === "/" ? "header-style-one" : "header-style-two"
        } ${fixHeader ? "fixed-header" : ""}`}
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
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                <nav className="main-menu">
                  <div className="navbar-collapse">
                    <ul className="navigation">
                      <li className={pageName === "/" ? "current" : ""}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className={pageName === "/about" ? "current" : ""}>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className={pageName === "/services" ? "current" : ""}>
                        <Link to="/services">Services</Link>
                      </li>
                      <li className={pageName === "/our-cars" ? "current" : ""}>
                        <Link to="/our-cars">Our Cars</Link>
                      </li>
                      <li className={pageName === "/gallery" ? "current" : ""}>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li className={pageName === "/blog" ? "current" : ""}>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className={pageName === "/contact" ? "current" : ""}>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-toggler">
                    <button
                      type="button"
                      className="navbar-toggle"
                      onClick={handleNavbarOpener}
                    >
                      <TfiMenu />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className={`hidden_box ${fixHeader ? "d-block" : ""}`}></div>
      </div>
      <section
        className={`hidden-bar right-align ${
          showHiddenBar ? "visible-sidebar" : ""
        }`}
      >
        <div className="hidden-bar-closer">
          <button className="btn" onClick={handleNavbarCloser}>
            <FaTimes />
          </button>
        </div>

        <div
          className={`hidden-bar-wrapper ${
            showHiddenBar ? "overflow-auto" : ""
          }`}
        >
          <div className="logo text-center">
            <a href="index.html">
              <img src={logo2} alt="" />
            </a>
          </div>
          <div className="side-menu">
            <ul className="navigation">
              <li className={pageName === "/" ? "current" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={pageName === "/about" ? "current" : ""}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={pageName === "/services" ? "current" : ""}>
                <Link to="/services">Services</Link>
              </li>
              <li className={pageName === "/our-cars" ? "current" : ""}>
                <Link to="/our-cars">Our Cars</Link>
              </li>
              <li className={pageName === "/gallery" ? "current" : ""}>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className={pageName === "/blog" ? "current" : ""}>
                <Link to="/blog">Blog</Link>
              </li>
              <li className={pageName === "/contact" ? "current" : ""}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <a href="##">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="##">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="##">
                  <TfiGoogle />
                </a>
              </li>
              <li>
                <a href="##">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div
        className={`scroll-to-top ${fixHeader ? "d-block" : ""}`}
        onClick={handleScrollToTop}
      >
        <CgArrowLongUp />
      </div>
    </>
  );
};

export default Navbar;
