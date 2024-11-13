import React from "react";
import "./TopHeader.scss";

export default function TopHeader() {
  return (
    <div className="main">
      <div className="weather">
        <i className="fa-regular fa-sun"></i>
        <p>18.7 °</p>
        <p>İstanbul</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      <div className="score">
        <p><span>1.</span>Galatasaray</p>
        <p>O 34</p>
        <p>AV 59</p>
        <p>P 93</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
}
