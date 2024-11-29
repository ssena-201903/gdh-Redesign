import React from "react";
import PropTypes from "prop-types";

const HashtagIcon = ({size, color, margin, onClick}) => {
  return (
    <i
      className="fa-regular fa-hashtag"
      style={{ fontSize: size, color: color, margin: margin, cursor: "pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

HashtagIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
}

export default HashtagIcon;
