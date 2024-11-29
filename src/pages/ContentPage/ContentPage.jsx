import React, { useEffect, useState } from "react";
import "./ContentPage.scss";
//components
import Header from "../../components/layout/Header/TopHeader";
import TopHeader from "../../components/layout/Header/Header";
// import NavbarOpen from "../../components/layout/Navbar/NavbarOpen";
import NavbarClose from "../../components/layout/Navbar/NavbarClose";
// import FollowUs from "../../components/sections/Advertisement/FollowUs";
// import NewsCardImg from "../../components/layout/Card/NewsCardImg";
import UpArrowButton from "../../components/common/UpArrowButton";
import UpArrowIcon from "../../components/icons/UpArrowIcon";
import HeaderNews from "../../components/sections/HeaderNews/HeaderNews";
import NewsArticle from "../../components/sections/NewsArticle/NewsArticle";
// import ColoredLine from "../../components/layout/Header/ColoredLine";
// import Advertisement from "../../components/sections/Advertisement/Advertisement";

const ContentPage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-home-page">
      <div className="top">
        <Header />
        <TopHeader />
      </div>
      <div className="bottom">
        <div className="navbar-home-page">
          <NavbarClose/>
        </div>
        <div className="news-cards-home-page">
          <div className="header-cards-wrap">
            <HeaderNews/>
          </div>
          <NewsArticle/>
        </div>
        <div className="sections-home-page"></div>
      </div>
      {isButtonVisible && (
        <UpArrowButton
          IconComponent={() => (
            <UpArrowIcon size="24px" color="#181731" margin="0" />
          )}
          top="600px"
          left="720px"
          onClick={scrollToUp}
        />
      )}
    </div>
  );
};

export default ContentPage;
