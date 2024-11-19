import React from "react";
import "./HomePage.scss";
//components
import Header from "../../components/layout/Header/TopHeader";
import TopHeader from "../../components/layout/Header/Header";
import NavbarOpen from "../../components/layout/Navbar/NavbarOpen";
// import FollowUs from "../../components/sections/Advertisement/FollowUs";
import NewsCardImg from "../../components/layout/Card/NewsCardImg";

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
          <h5 className="header-cards-wrap">Size Özel</h5>
          <div className="cards-wrap-home-page">
            <NewsCardImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
