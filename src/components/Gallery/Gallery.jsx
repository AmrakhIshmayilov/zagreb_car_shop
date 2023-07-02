import React, { useEffect } from "react";
import "./gallery.css";

const Gallery = () => {
  useEffect(() => {
    document.title = "Zagreb Gallery";
  }, []);
  return <div>Gallery</div>;
};

export default Gallery;
