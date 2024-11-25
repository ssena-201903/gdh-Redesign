import React from "react";
import PropTypes from "prop-types";

const SpotifyIcon = ({size, color, margin, link}) => {
  const handleLink = () => {
    if (link) {
      window.open(link, "_blank")
    }
  };
  
  return (
    <i
      className="fa-brands fa-spotify"
      style={{ fontSize: size, color: color, margin: margin, cursor:"pointer" }}
      aria-hidden="true"
      onClick={handleLink}
    />
  );
};

SpotifyIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    link: PropTypes.string,
}

export default SpotifyIcon;