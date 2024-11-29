import Proptypes from 'prop-types';

const AboutUsIcon = ({size, color, margin, onClick}) => { 
  return (
    <i
        className="bi bi-file-earmark-text"
        style={{fontSize: size, color: color, margin: margin, cursor: "pointer"}}
        aria-hidden="true"
        onClick={onClick}
    />
  )
}

AboutUsIcon.propTypes = {
    size: Proptypes.string,
    color: Proptypes.string,
    margin: Proptypes.string,
};

export default AboutUsIcon;
