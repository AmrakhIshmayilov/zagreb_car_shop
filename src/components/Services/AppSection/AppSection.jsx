import React from "react";
import "./appSection.css";
import { BsApple, BsAndroid2 } from "react-icons/bs";
import bgImage from "../../../assets/images/appSectionBg.png";
import appMobile from "../../../assets/images/app-mobile.png";

const AppSection = () => {
  return (
    <div className="app-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-box">
              <h2>ZAGREB APP IS LIVE, DOWNLOAD IT NOW!</h2>
              <div className="dark-text">
                Choose your platform and get started
              </div>
              <div className="text">
                Zombies reversus ab inferno, nam malum cerebro. De carne animata
                corpora quande quaeritis. Summus
                sit&ZeroWidthSpace;&ZeroWidthSpace;, morbo vel maleficia? De
                Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas,
                monstra adventus vultus comedat cerebella viventium. Qui
                offenderit rapto, terribilem incessu. The voodoo sacerdos
                suscitat mortuos come dere carnem. Search for solum oculi eorum
                defunctis cerebro.{" "}
              </div>
              <a href="##" className="app-btn">
                <span class="icon flaticon-apple">
                  <BsApple />
                </span>
                Download for <br />
                <span className="app-name">Apple iOS</span>
              </a>
              <a href="##" className="app-btn">
                <span className="icon flaticon-android-logo">
                  <BsAndroid2 />
                </span>
                Download for <br />
                <span className="app-name">Android</span>
              </a>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <figure
              class="image wow slideInUp animated"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              //   style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: slideInUp;"
            >
              <img src={appMobile} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
