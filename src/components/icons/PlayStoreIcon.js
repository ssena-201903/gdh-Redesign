import React from "react";
import PropTypes from "prop-types";

const PlayStoreIcon = ({size, color, margin, padding}) => {
  return (
    <i
      className="fa-brands fa-google-play"
      style={{ fontSize: size, color: color, margin: margin, padding: padding }}
      aria-hidden="true"
    />
  );
};

PlayStoreIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
}

export default PlayStoreIcon;