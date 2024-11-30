import React, { useEffect, useState } from "react";
import { useNavbar } from "../../context/NavbarContext";

//components
import Header from "../../components/layout/Header/TopHeader";
import TopHeader from "../../components/layout/Header/Header";
import NavbarClose from "../../components/layout/Navbar/NavbarClose";
import UpArrowButton from "../../components/common/UpArrowButton";
import UpArrowIcon from "../../components/icons/UpArrowIcon";
import HeaderNews from "../../components/sections/HeaderNews/HeaderNews";
import NewsArticle from "../../components/sections/NewsArticle/NewsArticle";

import "./ContentPage.scss";

const ContentPage = () => {
  const { isNavbarOpen } = useNavbar();
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
    <div className="main-content-page">
      <div className="top">
        <Header />
        <TopHeader />
      </div>
      <div className="bottom">
        <div className="navbar-content-page">
          <NavbarClose />
        </div>
        <div
          className="news-cards-content-page"
          style={{
            // marginTop: isNavbarOpen ? "40px" : "0",
            transform: isNavbarOpen ? "translateX(20px)" : "translateX(-100px)",
          }}
        >
          <div className="header-cards-wrap">
            <HeaderNews />
          </div>
          <NewsArticle />
        </div>
        <div className="sections-content-page"></div>
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
