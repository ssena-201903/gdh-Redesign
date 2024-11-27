import PropTypes from "prop-types"
import "./ActionCard.scss";
import HeartIcon from "../../icons/HeartIcon";
import SaveIcon from "../../icons/SaveIcon";
import ShareIcon from "../../icons/ShareIcon";
import UrlIcon from "../../icons/UrlIcon";


const ActionCard = ({ width, height, margin, color, padding }) => {
  const cardStyle = {
    border: `1px solid ${color}`,
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: padding,
    width: width,
    height: height,
    margin: margin,
  };

  return (
    <div style={cardStyle}>
      <HeartIcon size="20px" margin="0 8px" />
      <SaveIcon size="20px" margin="0 8px" />
      <ShareIcon size="20px" margin="0 8px" />
      <UrlIcon size="28px" margin="0 8px" />
    </div>
  );
};

UrlIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    color: PropTypes.string,
    padding: PropTypes.string,
}

export default ActionCard;
