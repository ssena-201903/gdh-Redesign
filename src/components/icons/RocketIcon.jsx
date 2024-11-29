import React from "react";
import PropTypes from "prop-types";

const RocketIcon = ({size, color, margin, onClick }) => {
  return (
    <i
      className="bi bi-rocket-takeoff"
      style={{ fontSize: size, color: color, margin: margin, cursor: "pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

RocketIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

export default RocketIcon;
