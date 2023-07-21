import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./blogSection.css";
import blogImages from "./blogImages";
import BlogItem from "./BlogItem/BlogItem";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blogImages.blog1,
      date: "26 September 2016",
      author: "Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 2,
      image: blogImages.blog2,
      date: "26 September 2016",
      author: "Jaun Camilo",
      title: "Auto Show opens its door to the public at the Convention Center",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 3,
      image: blogImages.blog3,
      date: "26 September 2016",
      author: "Laura Datta",
      title:
        "Zagreb offers a best world wide car hire services with all types of cars",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 4,
      image: blogImages.blog4,
      date: "26 September 2016",
      author: "Jaun Camilo",
      title:
        "Zagreb offers a best world wide car hire services with all types of cars",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 5,
      image: blogImages.blog5,
      date: "26 September 2016",
      author: "Laura Datta",
      title: "Auto Show opens its door to the public at the Convention Center",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 6,
      image: blogImages.blog6,
      date: "26 September 2016",
      author: "Jaun Camilo",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 7,
      image: blogImages.blog7,
      date: "26 September 2016",
      author: "Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 8,
      image: blogImages.blog8,
      date: "26 September 2016",
      author: "Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 9,
      image: blogImages.blog9,
      date: "26 September 2016",
      author: "Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
    {
      id: 10,
      image: blogImages.blog10,
      date: "26 September 2016",
      author: "Laura Datta",
      title: "Mercedez S63 AMG Luxury Sports Coupe presented at Belgrade",
      description:
        "Tremor est vivos magna. Expansis ulnis video missing carnem armis a crum caeruleum in locis. A morbo amarus in auras. Nihil horum sic sagittis teaus tincidunt, gelida portenta.",
    },
  ];

  let maxHeight = useRef(0);
  useEffect(() => {
    setTimeout(() => {
      $(".news-block-three .inner-box").each((i, item) => {
        if ($(item).height() > maxHeight.current) {
          maxHeight.current = $(item).height();
        }
      });
      $(".news-block-three .inner-box").height(maxHeight.current);
    }, 100);
  }, [maxHeight]);

  return (
    <section className="blog-section">
      <div className="auto-container">
        <div className="row clearfix">
          {blogs.slice(0, 6).map((item) => (
            <BlogItem key={item.id} blog={item} />
          ))}
        </div>

        <div className="styled-pagination">
          <ul>
            <li>
              <a href="##" className="active">
                1
              </a>
            </li>
            <li>
              <a href="##">2</a>
            </li>
            <li>
              <a className="next" href="##">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
