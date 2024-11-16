import React from "react";
import PropTypes from "prop-types";

const GraphIcon = ({size, color}) => {
  return (
    <i
      className="fa-solid fa-chart-column"
      style={{ fontSize: size, color: color }}
      aria-hidden="true"
    />
  );
};

GraphIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

export default GraphIcon;
