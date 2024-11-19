import React from "react";
import PropTypes from "prop-types";

const TwitterIcon = ({size, color, margin, link}) => {
  const handleLink = () => {
    if (link) {
      window.open(link, "_blank")
    }
  };

  return (
    <i
      className="fa-brands fa-x-twitter"
      style={{ fontSize: size, color: color, margin: margin, cursor:"pointer" }}
      aria-hidden="true"
      onClick={handleLink}
    />
  );
};

TwitterIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    link: PropTypes.string,
}

export default TwitterIcon;