import React from 'react'
import PropTypes from 'prop-types';

const SocialButton = ({ IconComponent, text1, text2}) => {
  return (
    <button className='social-button'>
        {IconComponent && <IconComponent size="24px" color="white "/>}
        <div className='text-container'>
            <p className='text1'>{text1}</p>
            <p className='text2'>{text2}</p>
        </div>
    </button>
  )
}

SocialButton.propTypes = {
    IconComponent: PropTypes.func,
    text1: PropTypes.string,
    text2: PropTypes.string,
};

export default SocialButton;
