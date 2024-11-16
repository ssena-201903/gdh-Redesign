import React from "react";
import PropTypes from "prop-types";

const HashtagIcon = ({size, color}) => {
  return (
    <i
      className="fa-regular fa-hashtag"
      style={{ fontSize: size, color: color }}
      aria-hidden="true"
    />
  );
};

HashtagIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

export default HashtagIcon;
