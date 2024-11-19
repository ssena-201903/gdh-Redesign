import React from "react";
import PropTypes from "prop-types";

const GraphIcon = ({size, color, margin}) => {
  return (
    <i
      className="bi bi-bar-chart-line"
      style={{ fontSize: size, color: color, margin: margin }}
      aria-hidden="true"
    />
  );
};

GraphIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

export default GraphIcon;
