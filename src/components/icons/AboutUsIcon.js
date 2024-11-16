import React from 'react'
import Proptypes from 'prop-types';

const AboutUsIcon = ({size, color}) => { 
  return (
    <i
        className="fa-regular fa-newspaper"
        style={{fontSize: size, color: color}}
        aria-hidden="true"
    />
  )
}

AboutUsIcon.propTypes = {
    size: Proptypes.string,
    color: Proptypes.string,
};

export default AboutUsIcon;
