import React from "react";
import "./blogItem.css";
import { Link } from "react-router-dom";

const BlogItem = ({ item }) => {
  return (
    <div className="news-block">
      <div className="inner-box">
        <div className="row clearfix">
          <div className="image-column col-md-6 col-sm-6 col-xs-12">
            <figure className="image">
              <a href="blog-detail.html">
                <img src={item.image} alt="" />
              </a>
            </figure>
          </div>
          <div className="content-column col-md-6 col-sm-6 col-xs-12">
            <div className="inner">
              <div className="posted">{item.date}</div>
              <h3>
                <a href="blog-detail.html">{item.title}</a>
              </h3>
              <div className="text">{item.description}</div>
              <Link className="view-more" to={`blog/${item.id}"`}>
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
