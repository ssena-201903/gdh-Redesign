import React from 'react'
import Proptypes from 'prop-types';

const CommentIcon = ({size, color}) => { 
  return (
    <i
        className="fa-regular fa-comments"
        style={{fontSize: size, color: color}}
        aria-hidden="true"
    />
  )
}

CommentIcon.propTypes = {
    size: Proptypes.string,
    color: Proptypes.string,
};

export default CommentIcon;
