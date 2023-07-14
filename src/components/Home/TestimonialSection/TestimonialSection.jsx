import React from "react";
import "./testimonialSection.css";
import bgImage from "../../../assets/images/testimonial.jpg";
import PageSection from "../../common/PageSection/PageSection";
import OwlCarousel from "react-owl-carousel";
import author from "../../../assets/images/author-1.jpg";
import TestiItem from "./TestiItem/TestiItem";

const TestimonialSection = () => {
  const testiItems = [
    {
      id: 1,
      text: (
        <>
          “De carne animata corpora quaeritis. Summus
          sit&ZeroWidthSpace;&ZeroWidthSpace;, morbo vel maleficia? De
          Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo
          monstra adventus vultus comedat cun cerebella viventium. Qui
          offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat
          mertica mortuos comedere carnem. Search for solum oculi eorum
          defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror”
        </>
      ),
      image: author,
      fullName: "Adam Levine",
      position: "Manager, TEKS",
      number: 1,
    },
    {
      id: 2,
      text: (
        <>
          “De carne animata corpora quaeritis. Summus
          sit&ZeroWidthSpace;&ZeroWidthSpace;, morbo vel maleficia? De
          Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo
          monstra adventus vultus comedat cun cerebella viventium. Qui
          offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat
          mertica mortuos comedere carnem. Search for solum oculi eorum
          defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror”
        </>
      ),
      image: author,
      fullName: "Adam Levine",
      position: "Manager, TEKS",
      number: 2,
    },
    {
      id: 3,
      text: (
        <>
          “De carne animata corpora quaeritis. Summus
          sit&ZeroWidthSpace;&ZeroWidthSpace;, morbo vel maleficia? De
          Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo
          monstra adventus vultus comedat cun cerebella viventium. Qui
          offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat
          mertica mortuos comedere carnem. Search for solum oculi eorum
          defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror”
        </>
      ),
      image: author,
      fullName: "Adam Levine",
      position: "Manager, TEKS",
      number: 3,
    },
  ];
  return (
    <div
      className="testimonial-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="auto-container">
        <PageSection title={<>WHAT PEOPLE SAY</>} rotateTitle="TESTIMONIALS">
          <OwlCarousel
            className="owl-theme"
            items={1}
            loop
            autoplay={true}
            center={true}
            dots={false}
            nav
          >
            {testiItems.map((item) => (
              <TestiItem key={item.id} item={item} count={testiItems.length} />
            ))}
          </OwlCarousel>
        </PageSection>
      </div>
    </div>
  );
};

export default TestimonialSection;
