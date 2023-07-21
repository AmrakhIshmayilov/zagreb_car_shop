import React from "react";
import "./blogItem.css";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="news-block-three col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image-box">
          <Link to={`/blog/${blog.id}`}>
            <img src={blog.image} alt="" />
          </Link>
        </div>
        <div className="lower-box clearfix">
          <div className="posted">
            {blog.date} / <span>{blog.author}</span>
          </div>
          <h3>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h3>
          <div className="text">{blog.description} </div>
          <Link className="view-more" to={`/blog/${blog.id}`}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
