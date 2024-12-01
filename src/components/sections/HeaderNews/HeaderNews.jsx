import React from "react";
import "./HeaderNews.scss";
import ActionCard from "../../layout/Card/ActionCard";
import RightArrowIcon from "../../icons/RightArrowIcon";
import profilePath from "../../../assets/pp.jpg";

const HeaderNews = () => {
    console.log("header news created")
  return (
    <div className="header-news">
      <h5 className="home-title">Anasayfa</h5>
      <RightArrowIcon size="16px" color="#343330" margin="0 8px" />
      <h5 className="type-news">Eğlence</h5>
      <div className="profile-header-news">
        <img src={profilePath} alt="editor_pp"></img>
        <p className="editor-name">Mete Koral</p>
        <p className="edit-time">20 dk önce yazdı</p>
      </div>
      <ActionCard
        width="200px"
        height="fit-content"
        margin="0 20px"
        color="rgb(24, 23, 49, 0.6)"
        padding="8px 16px"
      />
    </div>
  );
};

export default HeaderNews;
