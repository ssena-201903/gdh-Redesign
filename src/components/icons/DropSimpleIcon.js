import React from "react";
import PropTypes from "prop-types";

const DropSimpleIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-droplet"
      style={{
        fontSize: size,
        color: color,
        margin: margin,
      }}
      aria-hidden="true"
    />
  );
};

DropSimpleIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default DropSimpleIcon;
