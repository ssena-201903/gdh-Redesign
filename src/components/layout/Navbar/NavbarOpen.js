import React from "react";
import "./NavbarOpen.scss";
import SearchIcon from "../../icons/SearchIcon";
import HashtagIcon from "../../icons/HashtagIcon";
import CommentIcon from "../../icons/CommentIcon";
import RocketIcon from "../../icons/RocketIcon";
import GraphIcon from "../../icons/GraphIcon";
import AboutUsIcon from "../../icons/AboutUsIcon";
// import FollowUs from "../../sections/Advertisement/FollowUs";

export default function NavbarOpen() {
  return (
    <div className="navbar">
      <div className="top">
        <div className="menu-item">
          <SearchIcon size="20px" color="white" />
          <p>Keşfet</p>
        </div>
        <div className="menu-item">
          <HashtagIcon size="20px" color="white" />
          <p>Trendler</p>
        </div>
        <div className="menu-item">
          <CommentIcon size="20px" color="white" />
          <p>Tartışma</p>
        </div>
        <div className="menu-item">
          <RocketIcon size="20px" color="white" />
          <p>Teknofest</p>
        </div>
        <div className="menu-item">
          <GraphIcon size="20px" color="white" />
          <p>İnfografik</p>
        </div>
        <div className="menu-item">
          <AboutUsIcon size="20px" color="white" />
          <p>Bize Dair</p>
        </div>
      </div>
      <div className="bottom">
        {/* <FollowUs/> */}
      </div>
    </div>
  );
}
