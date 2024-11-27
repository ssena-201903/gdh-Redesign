import React from "react";
import PropTypes from "prop-types";

const ShareIcon = ({ size, color, margin, onClick }) => {
  return (
    <i
      className="bi bi-share"
      style={{
        fontSize: size,
        color: color,
        margin: margin,
        cursor: "pointer",
      }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

ShareIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  link: PropTypes.string,
};

ShareIcon.defaultProps = {
  color: "rgb(24, 23, 49, 0.6)",
  size: "20px",
}

export default ShareIcon;
