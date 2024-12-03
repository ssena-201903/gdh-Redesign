import React, { useEffect, useState } from "react";
import { useNavbar } from "../../context/NavbarContext";
import { ContentProvider } from "../../context/ContentContext";

//components
import Header from "../../components/layout/Header/TopHeader";
import TopHeader from "../../components/layout/Header/Header";
import NavbarClose from "../../components/layout/Navbar/NavbarClose";
import UpArrowButton from "../../components/common/UpArrowButton";
import UpArrowIcon from "../../components/icons/UpArrowIcon";
import HeaderNews from "../../components/sections/HeaderNews/HeaderNews";
import NewsArticle from "../../components/sections/NewsArticle/NewsArticle";
import CardsGridContent from "../../components/layout/Card/CardsGridContent";
import Footer from "../../components/layout/Footer/Footer";

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
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ContentProvider>
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
            className="news-article-content-page"
            style={{
              transform: isNavbarOpen
                ? "translateX(20px)"
                : "translateX(-100px)",
            }}
          >
            <HeaderNews />
            <NewsArticle />
          </div>
          <div
            className="cards-grid-content"
            style={{
              transform: isNavbarOpen
                ? "translateX(-10px)"
                : "translateX(-90px)",
            }}
          >
            <CardsGridContent />
          </div>
        </div>
        <Footer />
        {isButtonVisible && (
          <UpArrowButton
            IconComponent={() => (
              <UpArrowIcon size="24px" color="#181731" margin="0" />
            )}
            top="600px"
            left={isNavbarOpen ? "720px" : "580px"}
            onClick={scrollToUp}
          />
        )}
      </div>
    </ContentProvider>
  );
};

export default ContentPage;
