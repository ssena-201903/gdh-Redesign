import React from "react";
import PropTypes from "prop-types";
import "./InputCard.scss";

const InputCard = ({
  textSize = "14px",
  margin = "0",
  padding = "10px",
  width = "100%",
  height = "auto",
  borderColor = "#ccc",
  placeholder = "Enter text...",
  placeholderColor = "#333",
  variant = "default",
  IconComponent,
  onChange,
  value,
  iconColor = "#666",
  iconSize = "16px",
  iconMargin = "8px",
  text,
}) => {
  return (
    <div
      className={`input-card input-card--${variant}`}
      style={{
        margin: margin,
        padding: padding,
        width: width,
        height: height,
        border: `1px solid ${borderColor}`,
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      {variant === "withIcon" && IconComponent && (
        <IconComponent
          size={iconSize}
          color={iconColor}
          style={{ marginLeft: iconMargin }}
        />
      )}
      <input
        type="text"
        className="input-card-input"
        style={{
          fontSize: textSize,
          color: placeholderColor,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          width: "100%",
          "--placeholder-color": placeholderColor,
        }}
        placeholder={text || placeholder} 
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

InputCard.propTypes = {
  textSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  variant: PropTypes.oneOf(["default", "withIcon", "noIcon"]),
  IconComponent: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  iconMargin: PropTypes.string,
  text: PropTypes.string, // Yeni prop
};

export default InputCard;
