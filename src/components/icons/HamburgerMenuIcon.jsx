import React from "react";

const HamburgerMenuIcon = ({ size, color, margin, onClick }) => {
  const styles = {
    fontSize: size,
    color: color,
    margin: margin,
    cursor: "pointer",
  };

  return (
    <i
      style={styles}
      className="bi bi-list"
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

export default HamburgerMenuIcon;
