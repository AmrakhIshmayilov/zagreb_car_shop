import React from "react";
import "./blogSection.css";
import PageSection from "../../common/PageSection/PageSection";
import OwlCarousel from "react-owl-carousel";
import blogImg from "../../../assets/images/news-1.jpg";
import BlogItem from "./BlogItem/BlogItem";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blogImg,
      date: "26 September 2016 / Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis tincidunt, gelida portenta. The unleashed virus est, et iam mortui ambulabunt super terram. Souless mortuum oculos attonitos back zombies.",
    },
    {
      id: 2,
      image: blogImg,
      date: "26 September 2016 / Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis tincidunt, gelida portenta. The unleashed virus est, et iam mortui ambulabunt super terram. Souless mortuum oculos attonitos back zombies.",
    },
    {
      id: 3,
      image: blogImg,
      date: "26 September 2016 / Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis caeruleum in locis. A morbo amarus in auras. Nihil horum sagittis tincidunt, gelida portenta. The unleashed virus est, et iam mortui ambulabunt super terram. Souless mortuum oculos attonitos back zombies.",
    },
  ];

  return (
    <div className="blog-section">
      <PageSection title="SEE OUR LATEST NEWS" rotateTitle="BLOG">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop
          autoplay
          center
          dots={false}
          nav
          smartSpeed={600}
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
            <BlogItem key={item.id} item={item} />
          ))}
        </OwlCarousel>
      </PageSection>
    </div>
  );
};

export default BlogSection;
