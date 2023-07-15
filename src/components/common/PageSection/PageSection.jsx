import React from "react";
import "./pageSection.css";

const PageSection = ({ title, rotateTitle, children, darkMode = false }) => {
  return (
    <div className={`page-section ${darkMode ? "dark-mode" : ""}`}>
      <div className="auto-container">
        <div className="content-container">
          <div className="inner-box">
            <div className="sec-title">
              <h2>{title}</h2>
              <h4 className="rotate-title">{rotateTitle}</h4>
            </div>
          </div>
          <div className="content-section">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageSection;
