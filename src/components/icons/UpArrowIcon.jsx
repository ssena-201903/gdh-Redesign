import React from "react";
import PropTypes from "prop-types";

export default function UpArrowIcon({ size, color, margin }) {
  return (
    <i
      className="bi bi-arrow-up"
      style={{
        fontSize: size,
        color: color,
        margin: margin,
        position: "absolute",
        top: "10px",
        left: "15px",
        opacity: "0.8"
      }}
      aria-hidden="true"
    />
  );
}

UpArrowIcon.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
};
