import PropTypes from "prop-types";

const DownArrowIcon = ({ size, color, margin, onClick }) => {
  return (
    <i
      className="bi bi-chevron-down"
      style={{ fontSize: size, color: color, margin: margin, cursor:"pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

DownArrowIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

export default DownArrowIcon;
