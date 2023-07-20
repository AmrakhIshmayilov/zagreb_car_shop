import React from "react";
import "./sponsorsSection.css";
import client1 from "../../../assets/images/client-1.png";
import client2 from "../../../assets/images/client-2.png";
import client3 from "../../../assets/images/client-3.png";
import client4 from "../../../assets/images/client-4.png";
import client5 from "../../../assets/images/client-5.png";
import SponsorItem from "./SponsorItem/SponsorItem";
import OwlCarousel from "react-owl-carousel";

const SponsorsSection = () => {
  const sponsors = [
    {
      id: 1,
      image: client1,
    },
    {
      id: 2,
      image: client2,
    },
    {
      id: 3,
      image: client3,
    },
    {
      id: 4,
      image: client4,
    },
    {
      id: 5,
      image: client5,
    },
  ];

  const options = {
    stageElement: "ul",
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1024: {
        items: 5,
      },
    },
  };

  return (
    <div className="sponsors-style-one">
      <div className="auto-container">
        <div className="sponsors-outer">
          <OwlCarousel className="owl-theme" {...options}>
            {sponsors.map((item) => (
              <SponsorItem key={item.id} sponsor={item} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
