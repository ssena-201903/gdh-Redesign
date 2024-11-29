import React from 'react'
import PropTypes from 'prop-types';

const SearchIcon = ({size, color, margin, onClick}) => {
    // const iconClass = variant === 'filled' ? "fa-solid fa-magnifying-glass" : 
  return (
    <i
        className='bi bi-search'
        style={{fontSize: size, color: color, margin: margin, cursor: "pointer"}}
        aria-hidden="true"
        onClick={onClick}
    />
  )
}

SearchIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
};

export default SearchIcon;
