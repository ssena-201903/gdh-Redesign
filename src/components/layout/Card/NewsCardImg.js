import React from "react";
import "./NewsCardImg.scss";

const NewsCardImg = () => {
  return (
    <div className="main-news-card-img">
      <div className="card-top-header">
        <p className="topic">Spor</p>
        <p className="set-time">20 dk</p>
      </div>
      <h5>Lorem ipsum dolor sit amet consectetur. Ipsum eu tortor et.</h5>
      <div className="card-content">
        <p className="content-text">
          Lorem ipsum dolor sit amet consectetur. Etiam cras pharetra ac mattis
          volutpat euismod lacus sit eget. Eget mi velit pellentesque vestibulum
          vitae. Vel mauris eget integer viverra.
        </p>
        <div className="content-img">
            
        </div>
      </div>
      <div className="card-icons"></div>
      <div className="card-comment"></div>
    </div>
  );
};

export default NewsCardImg;
