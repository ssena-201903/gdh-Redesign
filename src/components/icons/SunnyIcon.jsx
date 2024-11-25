import PropTypes from "prop-types";

const SunnyIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-brightness-high-fill"
      style={{ fontSize: size, color: color, margin: margin }}
      aria-hidden="true"
    />
  );
};

SunnyIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default SunnyIcon;
