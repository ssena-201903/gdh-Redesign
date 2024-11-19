import React from "react";
import PropTypes from "prop-types";

const CommentIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-chat"
      style={{
        fontSize: size,
        color: color,
        margin: margin,
        cursor: "pointer",
      }}
      aria-hidden="true"
    />
  );
};

CommentIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default CommentIcon;
