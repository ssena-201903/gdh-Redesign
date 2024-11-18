import React from 'react'
import PropTypes from "prop-types";

const HeartIcon = ({size, color, margin, padding}) => { 
  return (
    <i
        className="fa-regular fa-comments"
        style={{fontSize: size, color: color, margin: margin, padding: padding}}
        aria-hidden="true"
    />
  )
}

HeartIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  link: PropTypes.string,
};

export default HeartIcon;
