import React from "react";
import "./newsItem.css";
import { Link } from "react-router-dom";

const NewsItem = ({ blog }) => {
  return (
    <div className="news-block-two">
      <div className="inner-box">
        <div className="row">
          <div className="image-column col-lg-6 col-md-6 col-sm-12">
            <figure className="image">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.image} alt="" />
              </Link>
            </figure>
          </div>
          <div className="content-column col-lg-6 col-md-6 col-sm-12">
            <div className="inner">
              <div className="posted">{blog.date}</div>
              <h3>
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h3>
              <div className="text">{blog.subtitle}</div>
              <Link className="view-more" to={`/blog/${blog.id}`}>
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
