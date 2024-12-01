import React from "react";
import PropTypes from "prop-types";
import "./PrimaryButton.scss";

const PrimaryButton = ({
  width,
  height,
  margin,
  onClick,
  textContent,
  backgroundColor,
  variant,
  color
}) => {
  return (
    <button
      className={`primary-button ${variant}`}
      style={{
        width: width,
        height: height,
        margin: margin,
        backgroundColor: backgroundColor,
        color: color,
      }}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
};

PrimaryButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  variant: PropTypes.oneOf(["fill", "outline"]),
};

export default PrimaryButton;
