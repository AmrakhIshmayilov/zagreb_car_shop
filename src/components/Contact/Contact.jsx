import React, { useEffect, useState } from "react";
import "./contact.css";
import PageTitle from "../common/PageTitle/PageTitle";
import GoogleMapReact from "google-map-react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const defaultProps = {
    center: {
      lat: 40.409264,
      lng: 49.867092,
    },
    zoom: 11,
  };

  useEffect(() => {
    document.title = "Zagreb Contact";
  }, []);

  const handleOnChange = (e, type) => {
    setFormData({
      ...formData,
      [type]: e.currentTarget.value,
    });
  };

  return (
    <div className="contact-page">
      <PageTitle title="Contact Us" />
      <div className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="map-column column col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="map-section">
                <div className="map-outer">
                  <div className="map-canvas">
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "" }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text=""
                      />
                    </GoogleMapReact>
                  </div>
                </div>
                <div className="map-content">
                  <h3>Address</h3>
                  <div className="text"> Baku, Azerbaijan </div>
                  <a
                    href="https://www.google.com/maps/place/%D0%91%D0%B0%D0%BA%D1%83/@40.3945925,49.8549596,11z/data=!3m1!4b1!4m6!3m5!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924!16zL20vMDFnZjU?entry=ttu"
                    className="map-view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Larger Map
                  </a>
                </div>
              </div>
              <ul className="contact-info">
                <li>
                  <BsTelephone /> +994 12 345 67 89
                </li>
                <li>
                  <GoMail /> info@zagreb.com
                </li>
              </ul>
            </div>
            <div className="form-column column col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div className="contact-form">
                <div className="group-title">
                  <h3>DROP US A LINE</h3>
                  <div className="text">
                    Sicut malus voodoo. Aenean a dolor vulnerum aperire
                    accedunt, mortui iam vivam. Qui tardius moveri, sed in magna
                    copia sint terribiles legionis.
                  </div>
                </div>
                <form
                  method="post"
                  action="sendemail.php"
                  id="contact-form"
                  noValidate="novalidate"
                >
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="username"
                        placeholder="Name *"
                        onChange={(e) => handleOnChange(e, "username")}
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        onChange={(e) => handleOnChange(e, "email")}
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        onChange={(e) => handleOnChange(e, "subject")}
                      />
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea
                        name="message"
                        placeholder="Message"
                        onChange={(e) => handleOnChange(e, "message")}
                      ></textarea>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
                      <button
                        className="btn-zagreb"
                        type="submit"
                        name="submit-form"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
