import React from "react";
import "./HomePage.scss";
//components
import Header from "../../components/layout/Header/TopHeader";
import TopHeader from "../../components/layout/Header/Header";
import NavbarOpen from "../../components/layout/Navbar/NavbarOpen";
// import FollowUs from "../../components/sections/Advertisement/FollowUs";
import NewsCardImg from "../../components/layout/Card/NewsCardImg";
import ColoredLine from "../../components/layout/Header/ColoredLine";

const HomePage = () => {
  return (
    <div className="main-home-page">
      <div className="top">
        <Header />
        <TopHeader />
      </div>
      <div className="bottom">
        <div className="navbar-home-page">
          <NavbarOpen />
        </div>
        <div className="news-cards-home-page">
          <div className="header-cards-wrap">
            <h5>Size Özel</h5>
            <ColoredLine width="850px" height="5px" />
          </div>
          <div className="cards-wrap-home-page">
            <NewsCardImg />
            <NewsCardImg />
            <NewsCardImg />
            <NewsCardImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
