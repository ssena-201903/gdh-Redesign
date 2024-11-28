import React from "react";

const NewsImage = ({ src, alt, width, height, margin }) => {
  const styles = {
    width: width,
    height: height,
    margin: margin,
    display: "flex",
    flexDirection: "center",
    // borderRadius: "8px",
    overflow: "hidden",
  };
  return (
    <div style={styles}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></img>
    </div>
  );
};

export default NewsImage;
