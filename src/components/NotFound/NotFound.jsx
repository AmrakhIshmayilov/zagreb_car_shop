import React, { useState } from "react";
import "./notFound.css";
import PageTitle from "../common/PageTitle/PageTitle";
import errorImage from "../../assets/images/error-image.png";
import { IoSearch } from "react-icons/io5";

const NotFound = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="not-found-page">
      <PageTitle title="404" />
      <section className="error-section">
        <div className="auto-container">
          <div
            className="error-text"
            style={{ backgroundImage: `url(${errorImage})` }}
          >
            <h2>ERROR PAGE !</h2>
          </div>
          <div className="text">
            Sorry, we couldn't find the page you're looking for.
          </div>

          <div className="search-website">
            <form method="post" action="index.html">
              <div className="form-group">
                <input
                  type="search"
                  name="search"
                  value={search}
                  required=""
                  placeholder="Type Keywords..."
                  onChange={(e) => handleOnChange(e)}
                />
                <button type="submit" className="theme-btn">
                  <IoSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
