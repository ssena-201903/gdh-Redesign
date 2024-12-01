import React from "react";
import "./FollowUs.scss";
import PropTypes from "prop-types";

import SocialButton from "../../common/SocialButton";
import SocialLinks from "./SocialLinks";

const FollowUs = ({
  padding,
  margin,
  width,
  height,
  backgroundColor,
  borderRadius,
  border,
}) => {
  return (
    <div
      className="main-follow-us"
      style={{
        padding: padding,
        margin: margin,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        border: border,
      }}
    >
      <h5>
        Gündeme Dair Her Şey uygulamamızı indirerek yakından takip edebilirsiniz
      </h5>
      <div className="buttons">
        <SocialButton
          variant="playStore"
          margin="4px"
          padding="0"
          width="180px"
          height="auto"
        />
        <SocialButton
          variant="apple"
          margin="4px"
          padding="0"
          width="180px"
          height="auto"
        />
      </div>
      <div className="social-button-container">
        <p>Ve diğer tüm mecralar için;</p>
        <SocialLinks size="14px" color="white" margin="0 4px" />
      </div>
    </div>
  );
};

FollowUs.propTypes = {
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};

export default FollowUs;
