import React from "react";
import PropTypes from "prop-types";

const CloseIcon = ({ size, color, margin, top, right, onClick }) => {
  const styles = {
    fontSize: size,
    color: color,
    margin: margin,
    position: "absolute",
    top: top,
    right: right, 
    cursor: "pointer",
  };

  return (
    <i
      className="bi bi-x-lg"
      style={styles}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

CloseIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

export default CloseIcon;
