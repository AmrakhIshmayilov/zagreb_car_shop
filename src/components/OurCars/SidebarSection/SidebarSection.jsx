import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "./sidebarSection.css";
import { IoGridOutline, IoListSharp } from "react-icons/io5";
import { TbPlayerPlay } from "react-icons/tb";

import selectArrow from "../../../assets/images/select-arrow.png";
import car6 from "../../../assets/images/car-6.jpg";
import car7 from "../../../assets/images/car-7.jpg";
import car8 from "../../../assets/images/car-8.jpg";
import car9 from "../../../assets/images/car-9.jpg";
import car10 from "../../../assets/images/car-10.jpg";
import car11 from "../../../assets/images/car-11.jpg";
import car12 from "../../../assets/images/car-12.jpg";
import CarInfoBlock from "./CarInfoBlock/CarInfoBlock";
import SidebarWidget from "./SidebarWidget/SidebarWidget";
import videoImage from "../../../assets/images/video-image.jpg";

const SidebarSection = () => {
  const [theme, setTheme] = useState("grid");
  useEffect(() => {
    Fancybox.bind();
  }, []);
  const cars = [
    {
      id: 1,
      image: car7,
      name: "FORD MUSTANG CONVERTIBLE",
      carClass: "Luxury",
      airCondition: true,
      carStyle: "Sedan",
      transmission: "Automatic",
      priceDay: 115,
    },
    {
      id: 2,
      image: car8,
      name: "FORD MUSTANG CONVERTIBLE",
      carClass: "Luxury",
      airCondition: true,
      carStyle: "Sedan",
      transmission: "Automatic",
      priceDay: 115,
    },
    {
      id: 3,
      image: car9,
      name: "FORD MUSTANG CONVERTIBLE",
      carClass: "Luxury",
      airCondition: true,
      carStyle: "Sedan",
      transmission: "Automatic",
      priceDay: 115,
    },
    {
      id: 4,
      image: car10,
      name: "FORD MUSTANG CONVERTIBLE",
      carClass: "Luxury",
      airCondition: true,
      carStyle: "Sedan",
      transmission: "Automatic",
      priceDay: 115,
    },
    {
      id: 5,
      image: car11,
      name: "FORD MUSTANG CONVERTIBLE",
      carClass: "Luxury",
      airCondition: true,
      carStyle: "Sedan",
      transmission: "Automatic",
      priceDay: 115,
    },
    {
      id: 6,
      image: car12,
      name: "FORD MUSTANG CONVERTIBLE",
      carClass: "Luxury",
      airCondition: true,
      carStyle: "Sedan",
      transmission: "Automatic",
      priceDay: 115,
    },
  ];

  const handleViewStyle = (e) => {
    e.preventDefault();
    $(".icon[data-view]").removeClass("active");
    $(e.currentTarget).addClass("active");
    setTheme($(e.currentTarget).data("view"));
  };

  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <section className="cars-info-section list-view">
              <div className="items-sorting">
                <div className="row clearfix">
                  <div className="results-column col-lg-4 col-md-5 col-sm-12">
                    <h4>6 Results Founded</h4>
                  </div>
                  <div className="right-column pull-right col-lg-8 col-md-7 col-sm-12">
                    <div className="viewed-box">
                      <a
                        href="##"
                        className=" active icon flaticon-layout"
                        data-view="grid"
                        onClick={(e) => handleViewStyle(e)}
                      >
                        <IoGridOutline />
                      </a>
                      <a
                        href="##"
                        className=" icon flaticon-list"
                        data-view="list"
                        onClick={(e) => handleViewStyle(e)}
                      >
                        <IoListSharp />
                      </a>
                    </div>
                    <div className="form-group">
                      <select
                        name="sort-by"
                        style={{ backgroundImage: `url(${selectArrow})` }}
                      >
                        <option>Sort by:</option>
                        <option>Sort by: Ascending Order</option>
                        <option>Sort by: Descending Order</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {cars.map((item) => (
                  <CarInfoBlock key={item.id} car={item} theme={theme} />
                ))}
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12">
            <aside className="sidebar">
              <SidebarWidget />
              <div
                className="widget sidebar-widget video-widget"
                style={{ backgroundImage: `url(${videoImage})` }}
              >
                <div className="widget-inner">
                  <a
                    href="https://www.youtube.com/watch?v=1sVEYNH8gbk"
                    className="lightbox-image play-box"
                    data-fancybox
                    data-caption="Single image"
                  >
                    <span className="icon flaticon-play-button-1">
                      <TbPlayerPlay />
                    </span>
                    <h4>MINI COOPER ADVENTURE TRIP</h4>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
