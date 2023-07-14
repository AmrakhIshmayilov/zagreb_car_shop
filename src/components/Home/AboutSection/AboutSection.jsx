import React from "react";
import "./aboutSection.css";
import PageSection from "../../common/PageSection/PageSection";
import ZagrebBtn from "../../common/ZagrebBtn/ZagrebBtn";

const AboutSection = ({ bgImage }) => {
  return (
    <div
      className="about-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <PageSection
        title={
          <>
            WE PROMISE, YOU WILL HAVE THE BEST <br /> EXPERIENCE
          </>
        }
        rotateTitle="ABOUT US"
      >
        <div className="content-column">
          <div className="text">
            <p>
              In omni memoria patriae religionis sunt diri undead historiarum.
              Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps
              morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum
              poenae horrifying fecimus.
            </p>
            <p>
              Ut fames cerebro enim carnis, viscera et organa viventium. Sicut
              spargit virus ad impetum, qui supersumus. Avium, canum, fugere
              ferae et infecti horrenda monstra. Videmus deformis horrenda
              daemonum. Panduntur portae inferi. Finis accedens sentio terrore
              perterritus et taedium. The horror, monstra significant finem.
              Terror sit unum superesse sentit, ut caro eaters caule nobis.
            </p>
            <ZagrebBtn link="##" text="Book Now" btnType="outline" />
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default AboutSection;
