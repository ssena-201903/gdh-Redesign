import React from 'react'
import PropTypes from 'prop-types';

const NewsPara = ({text, margin= "20px 0 40px 0", fontSize= "16px", lineHeight}) => {
  const styles = {
    color: "rgb(0, 0, 0, 0.6)",
    fontWeight: "normal",
    margin: margin,
    lineHeight: lineHeight,
    fontSize: fontSize,
  };

  return (
    <p style={styles}>{text}</p>
  )
}

NewsPara.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.number,
}

export default NewsPara
