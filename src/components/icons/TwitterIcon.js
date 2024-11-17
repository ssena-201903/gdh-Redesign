import React from "react";
import PropTypes from "prop-types";

const TwitterIcon = ({size, color, margin, padding}) => {
  return (
    <i
      className="fa-brands fa-x-twitter"
      style={{ fontSize: size, color: color, margin: margin, padding: padding, cursor:"pointer" }}
      aria-hidden="true"
    />
  );
};

TwitterIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
}

export default TwitterIcon;