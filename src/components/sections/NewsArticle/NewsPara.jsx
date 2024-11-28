import React from 'react'

const NewsPara = ({text, margin= "20px 0", fontSize= "16px"}) => {
  const styles = {
    color: "rgb(0, 0, 0, 0.6)",
    fontWeight: "normal",
    margin: margin,
    lineHeight: "2",
    fontSize: fontSize,
  };

  return (
    <p style={styles}>{text}</p>
  )
}

export default NewsPara
