import React from "react";
import PropTypes from "prop-types";

const PlayStoreIcon = ({size, color, margin }) => {
  return (
    <i
      className="fa-brands fa-google-play"
      style={{ fontSize: size, color: color, margin: margin }}
      aria-hidden="true"
    />
  );
};

PlayStoreIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

export default PlayStoreIcon;