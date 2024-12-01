import React from "react";
import "./Footer.scss";
import Logo from "../../common/Logo";
import SocialLinks from "../../sections/Advertisement/SocialLinks";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-add">
        <div className="footer-logo">
          <Logo
            width="100px"
            height="auto"
            margin="0 20px 0 0"
            variant="white"
          />
          <div className="app-name">
            <p className="name">gdh dijital</p>
            <p className="name">Haberin dijital medyası</p>
          </div>
        </div>
        <SocialLinks size="16px" margin="0 6px" color="white" />
        <p className="footer-copyright">Copyrights © 2021 All Rights Reserved by gdh digital</p>
      </div>
      <div>
        <h5 className="followUs"></h5>
      </div>
    </div>
  );
};

export default Footer;
