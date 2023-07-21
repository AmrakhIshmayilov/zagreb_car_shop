import React, { useEffect } from "react";
import "./gallery.css";
import PageTitle from "../common/PageTitle/PageTitle";
import GallerySection from "./GallerySection/GallerySection";

const Gallery = () => {
  useEffect(() => {
    document.title = "Zagreb Gallery";
  }, []);
  return (
    <div className="gallery-page">
      <PageTitle title="Gallery Standart" />
      <GallerySection />
    </div>
  );
};

export default Gallery;
