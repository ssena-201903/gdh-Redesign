import React from "react";
import PropTypes from "prop-types";

const SpotifyIcon = ({size, color, margin, padding}) => {
  return (
    <i
      className="fa-brands fa-spotify"
      style={{ fontSize: size, color: color, margin: margin, padding: padding }}
      aria-hidden="true"
    />
  );
};

SpotifyIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
}

export default SpotifyIcon;