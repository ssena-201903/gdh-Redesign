import React from 'react'
import Proptypes from 'prop-types';

const SearchIcon = ({size, color}) => {
    // const iconClass = variant === 'filled' ? "fa-solid fa-magnifying-glass" : 
  return (
    <i
        className='fa-solid fa-magnifying-glass'
        style={{fontSize: size, color: color}}
        aria-hidden="true"
    />
  )
}

SearchIcon.propTypes = {
    size: Proptypes.string,
    color: Proptypes.string,
};

export default SearchIcon;
