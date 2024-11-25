import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const HeartIcon = ({ size, color, margin, onClickInc, onClickDec, isLiked }) => {
  const [isClicked, setIsClicked] = useState(isLiked);

  useEffect(() => {
    setIsClicked(isLiked);
  }, [isLiked]);

  const handleClick = () => {
    if (isClicked) {
      onClickDec();
    } else {
      onClickInc(); 
    }
    setIsClicked(!isClicked);
  };

  const heartStyles = {
    fontSize: size,
    color: isClicked ? "#E62A27" : color, 
    margin: margin,
    cursor: "pointer",
    transition: "color 0.3s ease, transform 0.3s ease",
    animation: isClicked ? "pop 0.3s ease-out forwards" : "none",
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
        className={`bi ${isClicked ? "bi-heart-fill" : "bi-heart"}`} 
        style={heartStyles}
        aria-hidden="true"
        onClick={handleClick} 
      />
    </>
  );
};

HeartIcon.propTypes = {
  size: PropTypes.string, 
  color: PropTypes.string, 
  margin: PropTypes.string, 
  onClickUp: PropTypes.func, 
  onClickDown: PropTypes.func, 
  isLiked: PropTypes.bool, 
};

HeartIcon.defaultProps = {
  isLiked: false, 
};

export default HeartIcon;
