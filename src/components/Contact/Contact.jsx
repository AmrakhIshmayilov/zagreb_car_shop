import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Zagreb Contact";
  }, []);
  return <div>Contact</div>;
};

export default Contact;
