import React, { useEffect } from "react";
import "./blog.css";
import PageTitle from "../common/PageTitle/PageTitle";
import BlogSection from "./BlogSection/BlogSection";

const Blog = () => {
  useEffect(() => {
    document.title = "Zagreb Blog";
  }, []);
  return (
    <div className="blog-page">
      <PageTitle title="Blog" />
      <BlogSection />
    </div>
  );
};

export default Blog;
