import React, { useEffect } from "react";
import "./blog.css";

const Blog = () => {
  useEffect(() => {
    document.title = "Zagreb Blog";
  }, []);
  return <div>Blog</div>;
};

export default Blog;
