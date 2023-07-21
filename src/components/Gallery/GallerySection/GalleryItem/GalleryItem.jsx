import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./galleryItem.css";
import { PiArrowsOutSimpleFill } from "react-icons/pi";

const GalleryItem = ({ item }) => {
  const classList = item.tags.join(" ");

  useEffect(() => {
    Fancybox.bind("[data-fancybox-group", {
      groupAll: true,
    });
  }, []);

  return (
    <div className={`col-lg-4 col-md-6 col-sm-12 gallery-item ${classList}`}>
      <div className="inner-box">
        <figure className="image">
          <a href={item.image} className="lightbox-image">
            <img src={item.image} alt="" />
          </a>
        </figure>
        <a
          href={item.image}
          className="zoom-btn lightbox-image"
          title="Image Caption Here"
          data-fancybox-group="gallery-example"
        >
          <span className="icon fa fa-expand">
            <PiArrowsOutSimpleFill />
          </span>
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
