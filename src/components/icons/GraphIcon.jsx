import React from "react";
import PropTypes from "prop-types";

const GraphIcon = ({size, color, margin, onClick}) => {
  return (
    <i
      className="bi bi-bar-chart-line"
      style={{ fontSize: size, color: color, margin: margin, cursor: "pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

GraphIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

export default GraphIcon;
