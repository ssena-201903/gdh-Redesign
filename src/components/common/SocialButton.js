import React from "react";
import PropTypes from "prop-types";
import "./SocialButton.scss";

const SocialButton = ({
  IconComponent,
  text1,
  text2,
  padding,
  margin,
  link,
  width,
  height,
}) => {
  return (
    <div
      className="social-button"
      style={{ margin: margin, padding: padding, width: width, height: height }}
    >
      {IconComponent && (
        <IconComponent size="16px" color="white" margin="2px" />
      )}
      <div className="text-container">
        <p className="text1">{text1}</p>
        <p className="text2">{text2}</p>
      </div>
    </div>
  );
};

SocialButton.propTypes = {
  IconComponent: PropTypes.func,
  text1: PropTypes.string,
  text2: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SocialButton;
