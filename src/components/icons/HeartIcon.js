import React from "react";
import PropTypes from "prop-types";

const HeartIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-heart"
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

HeartIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default HeartIcon;
