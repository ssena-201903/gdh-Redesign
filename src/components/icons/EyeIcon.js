import React from 'react'
import PropTypes from "prop-types";

const EyeIcon = ({size, color, margin}) => { 
  return (
    <i
        className="bi bi-eye"
        style={{fontSize: size, color: color, margin: margin}}
        aria-hidden="true"
    />
  )
}

EyeIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  link: PropTypes.string,
};

export default EyeIcon;
