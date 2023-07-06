import React from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import "./mainSlider.css";
import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <div className="banner-wrapper">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide h-100"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
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
            <div
              className="carousel-item h-100 active"
              data-bs-interval="10000"
            >
              <img
                src={image1}
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div
                className="carousel-caption"
                style={{
                  right: "none",
                  top: "38%",
                }}
              >
                <h2
                  className="animate__animated animate__fadeInLeft title"
                  style={{
                    letterSpacing: 1,
                    fontSize: 44,
                    textTransform: "uppercase",
                    fontWeight: 900,
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Best Worldwide <br />
                  <span
                    className="theme_color"
                    style={{
                      letterSpacing: 1,
                      fontSize: 44,
                      color: "#ff8201",
                    }}
                  >
                    Car Hire{" "}
                  </span>
                  Deals
                </h2>
                <p
                  className="animate__animated animate__fadeInRight subtitle"
                  style={{
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  Tremor est vivos magna. Expansis ulnis video missing <br />{" "}
                  carnem armis caeruleum in locis.
                </p>
                <p
                  className="animate__animated animate__fadeInLeft"
                  style={{
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  <a href="##" className="btn-slider">
                    EXPLORE NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-item h-100" data-bs-interval="2000">
              <img
                src={image2}
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item h-100">
              <img
                src={image3}
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
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
