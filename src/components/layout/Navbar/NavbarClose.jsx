// import { useState } from "react";
import SearchIcon from "../../icons/SearchIcon";
import HashtagIcon from "../../icons/HashtagIcon";
import CommentIcon from "../../icons/CommentIcon";
import RocketIcon from "../../icons/RocketIcon";
import GraphIcon from "../../icons/GraphIcon";
import AboutUsIcon from "../../icons/AboutUsIcon";
import HamburgerMenuIcon from "../../icons/HamburgerMenuIcon";
import CloseIcon from "../../icons/CloseIcon";

import "./NavbarClose.scss";
import { useNavbar } from "../../../context/NavbarContext";

const NavbarClose = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isNavbarOpen, toggleNavbar } = useNavbar();
  // to open/close menu
  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`navbar-container ${isNavbarOpen ? "expanded" : "collapsed"}`}
    >
      <div className="hamburger-icon" onClick={toggleNavbar}>
        {isNavbarOpen ? (
          <CloseIcon size="20px" color="white" margin="20px auto 8px" top="1px" right="20px" />
        ) : (
          <HamburgerMenuIcon size="24px" color="white" margin="20px auto 8px" />
        )}
      </div>
      <div className="navbar-content">
        <div className="navbar-item">
          <SearchIcon size="20px" color="white" margin="0 20px 8px 20px" />
          {isNavbarOpen && <p>Keşfet</p>}
        </div>
        <div className="navbar-item">
          <HashtagIcon size="20px" color="white" margin="0 20px 8px 20px" />
          {isNavbarOpen && <p>Trendler</p>}
        </div>
        <div className="navbar-item">
          <CommentIcon size="20px" color="white" margin="0 20px 8px 20px" />
          {isNavbarOpen && <p>Tartışma</p>}
        </div>
        <div className="navbar-item">
          <RocketIcon size="20px" color="white" margin="0 20px 8px 20px" />
          {isNavbarOpen && <p>Teknofest</p>}
        </div>
        <div className="navbar-item">
          <GraphIcon size="20px" color="white" margin="0 20px 8px 20px" />
          {isNavbarOpen && <p>İnfografik</p>}
        </div>
        <div className="navbar-item">
          <AboutUsIcon size="20px" color="white" margin="0 20px 8px 20px" />
          {isNavbarOpen && <p>Bize Dair</p>}
        </div>
      </div>
    </div>
    // <div className="navbar-close">
    //   <HamburgerMenuIcon
    //     size="20px"
    //     color="white"
    //     margin="20px 20px 8px 20px"
    //   />
    //   <SearchIcon size="20px" color="white" margin="0 20px 8px 20px" />
    //   <HashtagIcon size="20px" color="white" margin="0 20px 8px 20px" />
    //   <CommentIcon size="20px" color="white" margin="0 20px 8px 20px" />
    //   <RocketIcon size="20px" color="white" margin="0 20px 8px 20px" />
    //   <GraphIcon size="20px" color="white" margin="0 20px 8px 20px" />
    //   <AboutUsIcon size="20px" color="white" margin="0 20px 8px 20px" />
    // </div>
  );
};

export default NavbarClose;
