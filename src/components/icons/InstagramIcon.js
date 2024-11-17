import React from "react";
import PropTypes from "prop-types";

const InstagramIcon = ({size, color, margin, padding}) => {
  return (
    <i
      className="fa-brands fa-instagram"
      style={{ fontSize: size, color: color, margin: margin, padding: padding, cursor:"pointer" }}
      aria-hidden="true"
    />
  );
};

InstagramIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
}

export default InstagramIcon