import React from "react";
import "./servicesSection.css";
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import {
  PiPiggyBankLight,
  PiCarLight,
  PiMonitorLight,
  PiShootingStarLight,
  PiStarLight,
} from "react-icons/pi";
import { Ri24HoursFill } from "react-icons/ri";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <PiPiggyBankLight />,
      number: 1,
      title: "Fixed Rates",
      description:
        "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. ",
    },
    {
      id: 2,
      icon: <PiCarLight />,
      number: 2,
      title: "Reliable Transfers",
      description:
        "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. ",
    },
    {
      id: 3,
      icon: <PiMonitorLight />,
      number: 3,
      title: "Free Cancellation",
      description:
        "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. ",
    },
    {
      id: 4,
      icon: <PiShootingStarLight />,
      number: 4,
      title: "Award winning Service",
      description:
        "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. ",
    },
    {
      id: 5,
      icon: <PiStarLight />,
      number: 5,
      title: "Quality Vehicles",
      description:
        "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. ",
    },
    {
      id: 6,
      icon: <Ri24HoursFill />,
      number: 6,
      title: "24H Customer Service",
      description:
        "In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. ",
    },
  ];

  return (
    <div className="services-section">
      <div className="auto-container">
        <div className="sec-title">
          <div className="inner-title-box">
            <h2>PROVIDING AMAZING SERVICES TO OUR CLIENTS</h2>
          </div>
        </div>
        <div className="row">
          {services.map((item) => (
            <ServicesBlock key={item.id} service={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
