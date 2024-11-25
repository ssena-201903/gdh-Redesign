import React from 'react'
import PropTypes from "prop-types";

const SendIcon = ({size, color, margin }) => { 
  return (
    <i
        className="bi bi-send"
        style={{fontSize: size, color: color, margin: margin }}
        aria-hidden="true"
    />
  )
}

SendIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default SendIcon;
