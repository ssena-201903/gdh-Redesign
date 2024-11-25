import PropTypes from "prop-types";

const AppleIcon = ({ size, color, margin }) => {
  return (
    <i
      className="bi bi-apple"
      style={{ fontSize: size, color: color, margin: margin }}
      aria-hidden="true"
    />
  );
};

AppleIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default AppleIcon;
