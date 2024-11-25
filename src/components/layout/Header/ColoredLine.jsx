import React from "react";
import "./ColoredLine.scss";

export default function ColoredLine({ width, height }) {
  return (
    <hr
      className="colored-line"
      style={{
        // color: color,
        width: width,
        height: height,
        // backgroundColor: color,
        borderRadius: "10px",
        marginLeft: "10px",
        border: "none",
        // background: `linear-gradient(to right, ${color}, #E62A27)`
      }}
    />
  );
}
