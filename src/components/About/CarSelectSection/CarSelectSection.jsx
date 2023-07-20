import React, { useState, useEffect } from "react";
import "./carSelectSection.css";
import $ from "jquery";
import PageSection from "../../common/PageSection/PageSection";
import OwlCarousel from "react-owl-carousel";
import car4 from "../../../assets/images/car-4.jpg";
import car5 from "../../../assets/images/car-5.jpg";
import car6 from "../../../assets/images/car-6.jpg";
import CarSelectItem from "./CarSelectItem/CarSelectItem";

const CarSelectSection = () => {
  const [tabNumber, setTabNumber] = useState("tab1");
  // eslint-disable-next-line
  const [netice, setNetice] = useState(true);
  const allCars = {
    tab1cars: [
      {
        id: 1,
        name: "Cuv 1",
        image: car4,
        description:
          "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. ",
      },
      {
        id: 2,
        name: "HATCHBACK 1",
        image: car5,
        description:
          "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. ",
      },
      {
        id: 3,
        name: "SEDAN 1",
        image: car6,
        description:
          "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. ",
      },
    ],
    tab2cars: [
      {
        id: 1,
        name: "Cuv 2",
        image: car4,
        description:
          "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. ",
      },
      {
        id: 2,
        name: "HATCHBACK 2",
        image: car5,
        description:
          "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. ",
      },
      {
        id: 3,
        name: "SEDAN 2",
        image: car6,
        description:
          "Aenean a dolor vulnerum aperire accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia sint terribiles legionis. ",
      },
    ],
  };

  const options = {
    responsiveClass: true,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    setNetice(tabNumber !== "tab1");
  }, [tabNumber]);

  const handleCarTabChange = (e) => {
    $(".tab-buttons .tab-btn").removeClass("active-btn");
    $(e.target).addClass("active-btn");
    setTabNumber($(e.target).data("number"));
  };

  return (
    <div className="cars-select-section">
      <PageSection
        title={
          <>
            SELECT <span>YOUR CAR BY</span>
          </>
        }
        rotateTitle="OUR CARS"
      >
        <div className="select-car-tabs">
          <ul className="tab-buttons clearfix">
            <li
              className="tab-btn active-btn"
              data-number="tab1"
              onClick={(e) => handleCarTabChange(e)}
            >
              {" "}
              BRANDS
            </li>
            <li
              className="tab-btn"
              data-number="tab2"
              onClick={(e) => handleCarTabChange(e)}
            >
              {" "}
              TYPES
            </li>
          </ul>
          <div className="tabs-content">
            <div className="tab" id="tab-one">
              {
                {
                  tab1: (
                    <OwlCarousel className="owl-theme" {...options}>
                      {allCars.tab1cars.map((car) => (
                        <CarSelectItem key={car.id} car={car} />
                      ))}
                    </OwlCarousel>
                  ),
                  tab2: (
                    <OwlCarousel className="owl-theme" {...options}>
                      {allCars.tab2cars.map((car) => (
                        <CarSelectItem key={car.id} car={car} />
                      ))}
                    </OwlCarousel>
                  ),
                }[tabNumber]
              }
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default CarSelectSection;
