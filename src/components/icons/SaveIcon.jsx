import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SaveIcon = ({ size, color, margin, onClickDec, onClickInc, isSaved }) => {
  const [isClicked, setIsClicked] = useState(isSaved);

  useEffect(() => {
    setIsClicked(isSaved);
  }, [isSaved]);

  const handleClick = () => {
    if (isClicked) {
      onClickDec();
    } else {
      onClickInc();
    }
    setIsClicked(!isClicked);
  };

  // keyframe
  const animationStyle = isClicked
    ? {
        animation: "pop 0.3s ease-out forwards",
        color: "#E62A27",
      }
    : {};

  const heartStyles = {
    fontSize: size,
    color: isClicked ? "#E62A27" : color,
    margin: margin,
    cursor: "pointer",
    transition: "color 0.3s ease",
    ...(isClicked && animationStyle),
  };

  return (
    <>
      <style>
        {`
          @keyframes pop {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.5); 
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <i
        className={`bi ${isClicked ? "bi-bookmark-fill" : "bi-bookmark"}`}
        style={heartStyles}
        aria-hidden="true"
        onClick={handleClick}
      />
    </>
  );
};

SaveIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  onClickDec: PropTypes.func,
  onClickInc: PropTypes.func,
  isSaved: PropTypes.bool,
};

SaveIcon.defaultProps = {
  isSaved: false,
}

export default SaveIcon;
