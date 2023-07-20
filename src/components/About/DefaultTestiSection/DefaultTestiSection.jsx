import React from "react";
import "./defaultTestiSection.css";
import TestiItem from "./TestiItem/TestiItem";
import OwlCarousel from "react-owl-carousel";
import author from "../../../assets/images/author-1.jpg";
import news from "../../../assets/images/news-2.jpg";
import NewsItem from "./NewsItem/NewsItem";

const DefaultTestiSection = () => {
  const testiItems = [
    {
      id: 1,
      text: (
        <>
          “De carne animata corpora quaeritis. Summus sit​​, morbo vel
          maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless
          creaturas, imo monstra adventus vultus comedat cun cerebella
          viventium.”
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
          “De carne animata corpora quaeritis. Summus sit​​, morbo vel
          maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless
          creaturas, imo monstra adventus vultus comedat cun cerebella
          viventium.”
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
          “De carne animata corpora quaeritis. Summus sit​​, morbo vel
          maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless
          creaturas, imo monstra adventus vultus comedat cun cerebella
          viventium.”
        </>
      ),
      image: author,
      fullName: "Adam Levine",
      position: "Manager, TEKS",
      number: 3,
    },
  ];
  const blogs = [
    {
      id: 1,
      image: news,
      date: "26 September 2016 / Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      subtitle:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis.",
    },
    {
      id: 2,
      image: news,
      date: "26 September 2016 / Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      subtitle:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis.",
    },
    {
      id: 3,
      image: news,
      date: "26 September 2016 / Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      subtitle:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis.",
    },
  ];

  return (
    <div className="default-testimonials">
      <div className="auto-container">
        <div className="row">
          <div className="client-tesimonial col-lg-6 col-md-12 col-sm-12">
            <h2>WHAT PEOPLE SAY</h2>
            <OwlCarousel
              className="owl-theme"
              items={1}
              dots={false}
              loop
              smartSpeed={600}
              autoplay={true}
              center={true}
            >
              {testiItems.map((item) => (
                <TestiItem
                  key={item.id}
                  item={item}
                  count={testiItems.length}
                />
              ))}
            </OwlCarousel>
          </div>
          <div className="news-testimonial-column col-lg-6 col-md-12 col-sm-12">
            <h2>SEE OUR LATEST NEWS</h2>
            <OwlCarousel
              className="owl-theme"
              items={1}
              dots={false}
              loop
              smartSpeed={600}
              autoplay={true}
              center={true}
              nav
              navText={[
                `<div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                    fill="currentColor"
                  ></path>
                </svg> PREV
                </div>`,
                `<div>NEXT <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"></path></svg></div>`,
              ]}
            >
              {blogs.map((item) => (
                <NewsItem key={item.id} blog={item} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultTestiSection;
