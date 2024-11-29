import React from "react";
import "./NavbarOpen.scss";
import SearchIcon from "../../icons/SearchIcon";
import HashtagIcon from "../../icons/HashtagIcon";
import CommentIcon from "../../icons/CommentIcon";
import RocketIcon from "../../icons/RocketIcon";
import GraphIcon from "../../icons/GraphIcon";
import AboutUsIcon from "../../icons/AboutUsIcon";
import FollowUs from "../../sections/Advertisement/FollowUs";

export default function NavbarOpen() {
  return (
    <div className="navbar-open">
      <div className="navbar-open-top">
        <div className="navbar-open-menu-item">
          <SearchIcon size="20px" color="white" />
          <p>Keşfet</p>
        </div>
        <div className="navbar-open-menu-item">
          <HashtagIcon size="20px" color="white" />
          <p>Trendler</p>
        </div>
        <div className="navbar-open-menu-item">
          <CommentIcon size="20px" color="white" />
          <p>Tartışma</p>
        </div>
        <div className="navbar-open-menu-item">
          <RocketIcon size="20px" color="white" />
          <p>Teknofest</p>
        </div>
        <div className="navbar-open-menu-item">
          <GraphIcon size="20px" color="white" />
          <p>İnfografik</p>
        </div>
        <div className="navbar-open-menu-item">
          <AboutUsIcon size="20px" color="white" />
          <p>Bize Dair</p>
        </div>
      </div>
      <div className="navbar-open-bottom">
        <FollowUs
          padding="0 10px 0 0"
          margin="10px 0"
          width="85%"
          height="auto"
          backgroundColor="transparent"
          borderRadius="0"
          border="none"
        />
      </div>
    </div>
  );
}
