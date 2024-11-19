import React from 'react'
import PropTypes from 'prop-types';

const SearchIcon = ({size, color, margin}) => {
    // const iconClass = variant === 'filled' ? "fa-solid fa-magnifying-glass" : 
  return (
    <i
        className='bi bi-search'
        style={{fontSize: size, color: color, margin: margin}}
        aria-hidden="true"
    />
  )
}

SearchIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
};

export default SearchIcon;
