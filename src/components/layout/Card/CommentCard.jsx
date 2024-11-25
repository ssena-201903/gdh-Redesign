import React from "react";
import PropTypes from "prop-types";
import "./CommentCard.scss";

const CommentCard = ({
  IconComponent,
  textSize,
  margin,
  padding,
  width,
  height,
  iconColor,
  iconSize
}) => {
  return (
    <div
      className="main-comment-card"
      style={{ padding: padding, margin: margin, width: width, height: height }}
    >
      <p className="text-comment-card" style={{ fontSize: textSize }}>
        Yorum Yap
      </p>
      {IconComponent && <IconComponent size={iconSize} color={iconColor} margin="0" />}
    </div>
  );
};

CommentCard.propTypes = {
  textSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
};

export default CommentCard;
