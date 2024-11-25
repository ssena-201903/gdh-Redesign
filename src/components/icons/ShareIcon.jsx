import React from "react";
import PropTypes from "prop-types";

const ShareIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-share"
      style={{
        fontSize: size,
        color: color,
        margin: margin,
        cursor: "pointer",
      }}
      aria-hidden="true"
    />
  );
};

ShareIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  link: PropTypes.string,
};

export default ShareIcon;
