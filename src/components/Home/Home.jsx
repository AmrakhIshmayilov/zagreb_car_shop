import React, { useEffect } from "react";
import "./home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Zagreb";
  }, []);
  return <div className="home">Home</div>;
};

export default Home;
