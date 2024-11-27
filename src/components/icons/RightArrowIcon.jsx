import PropTypes from "prop-types";

const RightArrowIcon = ({ size, color, margin, onClick }) => {
  return (
    <i
      className="bi bi-chevron-right"
      style={{ fontSize: size, color: color, margin: margin, cursor:"pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

RightArrowIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

export default RightArrowIcon;
