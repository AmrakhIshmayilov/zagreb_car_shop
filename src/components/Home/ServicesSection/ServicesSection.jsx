import React from "react";
import "./servicesSection.css";
import PageSection from "../../common/PageSection/PageSection";
import {
  PiPiggyBankLight,
  PiCarLight,
  PiMonitorLight,
  PiShootingStarLight,
  PiStarLight,
} from "react-icons/pi";
import { Ri24HoursFill } from "react-icons/ri";
import ServicesBlock from "./ServicesBlock/ServicesBlock";

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
      <PageSection
        title={
          <>
            {" "}
            PROVIDING AMAZING SERVICES <br /> TO OUR CLIENTS{" "}
          </>
        }
        rotateTitle="SERVICES"
      >
        <div className="row">
          {services.map((service) => (
            <ServicesBlock key={service.id} service={service} />
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default ServicesSection;
