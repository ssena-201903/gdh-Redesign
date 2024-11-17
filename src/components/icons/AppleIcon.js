import React from "react";
import PropTypes from "prop-types";

const AppleIcon = ({ size, color, margin, padding }) => {
  return (
    <i
      className="fa-brands fa-apple"
      style={{ fontSize: size, color: color, margin: margin, padding: padding }}
      aria-hidden="true"
    />
  );
};

AppleIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default AppleIcon;
