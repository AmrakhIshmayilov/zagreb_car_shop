import React from "react";
import "./zagrebBtn.css";

const ZagrebBtn = ({ link, text, btnType }) => {
  return (
    <a href={link} className={`btn-zagreb ${btnType ? btnType + " me-4" : ""}`}>
      {text}
    </a>
  );
};

export default ZagrebBtn;
