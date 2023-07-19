import React from "react";
import "./experianceSection.css";
import { Link } from "react-router-dom";
import carLayerImage from "../../../assets/images/car-layer.png";
import FormColumn from "./FormColumn/FormColumn";

const ExperianceSection = () => {
  return (
    <div className="experiance-section">
      <div className="auto-container">
        <div className="row">
          <div
            className="content-column col-lg-6 col-md-12 col-sm-12"
            style={{ backgroundImage: `url(${carLayerImage})` }}
          >
            <div className="inner-box">
              <h3>
                <Link to="/services">
                  WE PROMISE, YOU WILL HAVE THE BEST <br /> EXPERIENCE
                </Link>
              </h3>
              <div className="text">
                <p>
                  In omni memoria patriae religionis sunt diri undead
                  historiarum. Golums, zombies et fascinati. Maleficia! Vel a
                  modern perhsaps morbi. A terrenti contagium. Forsitan illud
                  Apocalypsi, vel malum poenae horrifying fecimus.
                </p>
                <p>
                  Ut fames cerebro enim carnis, viscera et organa viventium.
                  Sicut spargit virus ad impetum, qui supersumus. Avium, canum,
                  fugere ferae et infecti horrenda monstra. Videmus deformis
                  horrenda daemonum. Panduntur portae inferi. Finis accedens
                  sentio terrore perterritus et taedium. The horror, monstra
                  significant finem. Terror sit unum superesse sentit, ut caro
                  eaters caule nobis.
                </p>
              </div>
              <Link to="/services" className="read-more">
                READ MORE
              </Link>
            </div>
          </div>
          <FormColumn />
        </div>
      </div>
    </div>
  );
};

export default ExperianceSection;
