import React from "react";
import PropTypes from "prop-types";

const TelegramIcon = ({size, color, margin, padding}) => {
  return (
    <i
      className="fa-brands fa-telegram"
      style={{ fontSize: size, color: color, margin: margin, padding: padding, cursor:"pointer" }}
      aria-hidden="true"
    />
  );
};

TelegramIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
}

export default TelegramIcon;