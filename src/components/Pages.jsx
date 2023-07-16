import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const About = React.lazy(() => import("./About/About"));
const OurCars = React.lazy(() => import("./OurCars/OurCars"));
const Services = React.lazy(() => import("./Services/Services"));
const Gallery = React.lazy(() => import("./Gallery/Gallery"));
const Blog = React.lazy(() => import("./Blog/Blog"));
const Contact = React.lazy(() => import("./Contact/Contact"));
const NotFound = React.lazy(() => import("./NotFound/NotFound"));

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-cars" element={<OurCars />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route exact path="/posts" element={Posts} /> */}
      {/* <Route path="/posts/:id" element={PostDetail} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
