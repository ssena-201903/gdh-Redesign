import React from "react";
import PropTypes from "prop-types";

const ApplePodcastsIcon = ({ size, color, margin, padding, link }) => {
  const handleLink = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <i
      className="fa-solid fa-podcast"
      style={{
        fontSize: size,
        color: color,
        margin: margin,
        padding: padding,
        cursor: "pointer",
      }}
      aria-hidden="true"
      onClick={handleLink}
    />
  );
};

ApplePodcastsIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  link: PropTypes.string,
};

export default ApplePodcastsIcon;
