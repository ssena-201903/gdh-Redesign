import PropTypes from "prop-types";

const UrlIcon = ({ size, color, margin, onClick }) => {
  return (
    <i
      className="bi bi-link-45deg"
      style={{ fontSize: size, color: color, margin: margin, cursor: "pointer" }}
      aria-hidden="true"
      onClick={onClick}
    />
  );
};

UrlIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
};

UrlIcon.defaultProps = {
  color: "rgb(24, 23, 49, 0.6)",
  fontSize: "20px",
};

export default UrlIcon;
