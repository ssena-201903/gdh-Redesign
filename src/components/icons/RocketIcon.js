import React from "react";
import PropTypes from "prop-types";

const RocketIcon = ({size, color}) => {
  return (
    <i
      className="fa-solid fa-rocket"
      style={{ fontSize: size, color: color }}
      aria-hidden="true"
    />
  );
};

RocketIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

export default RocketIcon;
