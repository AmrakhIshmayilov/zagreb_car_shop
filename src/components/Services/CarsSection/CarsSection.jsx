import React from "react";
import "./carsSection.css";
import PageSection from "../../common/PageSection/PageSection";
import ZagrebBtn from "../../common/ZagrebBtn/ZagrebBtn";
import OwlCarousel from "react-owl-carousel";

import car from "../../../assets/images/car.png";

const CarsSection = () => {
  return (
    <div className="cars-section">
      <div className="auto-container">
        <PageSection
          title={
            <>
              IRRESISTABLE POWER, <br /> UNPARALLELED PRESENCE
            </>
          }
          rotateTitle="OUR CARS"
        >
          <div className="row">
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="dark-text">
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum
                cerebro. De carne lumbering animata corpora quaeritis.{" "}
              </div>
              <div className="text">
                <p>
                  Hi mindless mortuis soulless creaturas, imo evil stalking
                  monstra adventus resi dentevil vultus comedat cerebella
                  viventium. Qui animated corpse, cricket bat max brucks
                  terribilem incessu zomby. The voodoo sacerdos flesh eater,
                  suscitat mortuos comedere carnem virus. Zonbi tattered for
                  solum oculi eorum defunctis go lum cerebro. Nescio brains an
                  Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth
                  eliv ingdead.
                </p>
              </div>
              <ZagrebBtn link="##" text="Book This Car" />
            </div>
            <div className="carousel-column col-lg-5 col-md-12 col-sm-12">
              <h2>CADILLAC ESCALADE LIMO</h2>
              <div className="single-item-carousel">
                <OwlCarousel
                  className="owl-theme"
                  items={1}
                  loop
                  autoplay={true}
                  smartSpeed={500}
                  center={true}
                  dots={false}
                  nav
                >
                  <div className="car-item">
                    <figure className="image">
                      <img src={car} alt="1" />
                    </figure>
                  </div>

                  <div className="car-item">
                    <figure className="image">
                      <img src={car} alt="2" />
                    </figure>
                  </div>
                  <div className="car-item">
                    <figure className="image">
                      <img src={car} alt="3" />
                    </figure>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  );
};

export default CarsSection;
