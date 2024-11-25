import React from "react";
import PropTypes from "prop-types";

const RocketIcon = ({size, color, margin }) => {
  return (
    <i
      className="bi bi-rocket-takeoff"
      style={{ fontSize: size, color: color, margin: margin }}
      aria-hidden="true"
    />
  );
};

RocketIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

export default RocketIcon;
