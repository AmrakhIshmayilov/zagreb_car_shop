import React from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import "./mainSlider.css";
import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";
import ZagrebBtn from "../common/ZagrebBtn/ZagrebBtn";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <div className="banner-wrapper">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide h-100"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-100">
            <div className="carousel-item h-100 active">
              <img
                src={image1}
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h2 className="animate__animated animate__fadeInLeft title">
                  Best Worldwide <br />
                  <span className="theme_color">Car Hire </span>
                  Deals
                </h2>
                <p className="animate__animated animate__fadeInRight subtitle">
                  Tremor est vivos magna. Expansis ulnis video missing <br />
                  carnem armis caeruleum in locis.
                </p>
                <p className="animate__animated animate__fadeInLeft btn-box">
                  <ZagrebBtn link="##" text="EXPLORE NOW" />
                </p>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                src={image2}
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h2 className="animate__animated animate__fadeInLeft title">
                  NEED A <span className="theme_color">RIDE </span> ?
                </h2>
                <p className="animate__animated animate__fadeInRight subtitle">
                  Tremor est vivos magna. Expansis ulnis video missing <br />
                  carnem armis caeruleum in locis.
                </p>
                <p className="animate__animated animate__fadeInLeft btn-box">
                  <ZagrebBtn
                    link="##"
                    text="MAKE A BOOKING"
                    btnType="outline-light"
                  />
                  <ZagrebBtn link="##" text="MAKE A BOOKING" />
                </p>
              </div>
            </div>
            <div className="carousel-item carusel-center h-100">
              <img
                src={image3}
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h2 className="animate__animated animate__fadeInDownBig title">
                  HIRE CAR <span className="theme_color">PROFESSIONAL </span> ?
                </h2>
                <p className="animate__animated animate__fadeInUp subtitle">
                  Pestilentia est haec ambulabat mortuos. Sicut malus voodoo.
                  Aenean a dolor <br />
                  vulnerum aperire accedunt, mortui iam vivam.
                </p>
                <p className="animate__animated animate__fadeInUp btn-box">
                  <ZagrebBtn
                    link="##"
                    text="CONTACT NOW"
                    btnType="outline-light"
                  />
                  <ZagrebBtn link="##" text="DONATE NOW" />
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <LiaAngleLeftSolid />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <LiaAngleRightSolid />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
