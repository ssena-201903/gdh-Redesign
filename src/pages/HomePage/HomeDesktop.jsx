import React, { useEffect, useState } from "react";
import "./HomeDesktop.scss";
//components
import Header from "../../components/layout/Header/TopHeader";
import TopHeader from "../../components/layout/Header/Header";
import NavbarOpen from "../../components/layout/Navbar/NavbarOpen";
// import FollowUs from "../../components/sections/Advertisement/FollowUs";
// import NewsCardImg from "../../components/layout/Card/NewsCardImg";
import UpArrowButton from "../../components/common/UpArrowButton";
import UpArrowIcon from "../../components/icons/UpArrowIcon";
import ColoredLine from "../../components/layout/Header/ColoredLine";
// import Advertisement from "../../components/sections/Advertisement/Advertisement";
import CardsGrid from "../../components/layout/Card/CardsGrid";
import { CardProvider } from "../../context/CardContext";

const HomeDesktop = () => {
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
          <NavbarOpen variant={true} />
        </div>
        <div className="news-cards-home-page">
          <div className="header-cards-wrap">
            <h5 className="header-grid-news">Size Özel</h5>
            <ColoredLine width="1090px" height="5px" />
          </div>
          <CardProvider>
            <CardsGrid />
          </CardProvider>
        </div>
        <div className="sections-home-page"></div>
      </div>
      {isButtonVisible && (
        <UpArrowButton
          IconComponent={() => (
            <UpArrowIcon size="24px" color="#181731" margin="0" />
          )}
          top="600px"
          left="840px"
          onClick={scrollToUp}
        />
      )}
    </div>
  );
};

export default HomeDesktop;
