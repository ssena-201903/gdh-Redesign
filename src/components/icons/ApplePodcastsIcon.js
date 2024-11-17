import React from "react";
import PropTypes from "prop-types";

const ApplePodcastsIcon = ({size, color, margin, padding}) => {
  return (
    <i
      className="fa-solid fa-podcast"
      style={{ fontSize: size, color: color, margin: margin, padding: padding, cursor:"pointer" }}
      aria-hidden="true"
    />
  );
};

ApplePodcastsIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
  padding: PropTypes.string,
}

export default ApplePodcastsIcon;