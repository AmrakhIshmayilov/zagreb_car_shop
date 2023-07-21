import React, { useEffect } from "react";
import "./gallerySection.css";
import mixitup from "mixitup";
import galeryImages from "../galeryImages";
import GalleryItem from "./GalleryItem/GalleryItem";

const GallerySection = () => {
  const gallery = [
    {
      id: 1,
      image: galeryImages.galler1,
      tags: ["mix", "mix_all", "seden"],
    },
    {
      id: 2,
      image: galeryImages.galler2,
      tags: ["mix", "mix_all", "limo", "car"],
    },
    {
      id: 3,
      image: galeryImages.galler3,
      tags: ["mix", "mix_all", "sports", "party"],
    },
    {
      id: 4,
      image: galeryImages.galler4,
      tags: ["mix", "mix_all", "limo ", "car", "seden", "sports"],
    },
    {
      id: 5,
      image: galeryImages.galler5,
      tags: ["mix", "mix_all", "sports", "party", "car"],
    },
    {
      id: 6,
      image: galeryImages.galler6,
      tags: ["mix", "mix_all", "limo"],
    },
    {
      id: 7,
      image: galeryImages.galler7,
      tags: ["mix", "mix_all", "sports", "seden"],
    },
    {
      id: 8,
      image: galeryImages.galler8,
      tags: ["mix", "mix_all", "party"],
    },
    {
      id: 9,
      image: galeryImages.galler9,
      tags: ["mix", "mix_all", "seden", "limo"],
    },
  ];

  useEffect(() => {
    mixitup(".filter-list");
  }, []);

  return (
    <section className="gallery-section" id="gallery-section">
      <div className="auto-container">
        <div className="filters">
          <ul className="filter-tabs">
            <li className="filter active" data-role="button" data-filter="all">
              All
            </li>
            <li className="filter" data-role="button" data-filter=".party">
              PARTY BUS
            </li>
            <li className="filter" data-role="button" data-filter=".car">
              MUSCLE CAR
            </li>
            <li className="filter" data-role="button" data-filter=".limo">
              STRETCH LIMO
            </li>
            <li className="filter" data-role="button" data-filter=".seden">
              SEDAN
            </li>
            <li className="filter" data-role="button" data-filter=".sports">
              SPORT EDITION
            </li>
          </ul>
        </div>
      </div>

      <div className="images-container auto-container">
        <div className="filter-list row">
          {gallery.map((item) => (
            <GalleryItem item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
