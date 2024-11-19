import React from "react";
import PropTypes from "prop-types";

const SaveIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-bookmark"
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

SaveIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default SaveIcon;
