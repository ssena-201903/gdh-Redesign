import Proptypes from 'prop-types';

const AboutUsIcon = ({size, color, margin}) => { 
  return (
    <i
        className="bi bi-file-earmark-text"
        style={{fontSize: size, color: color, margin: margin}}
        aria-hidden="true"
    />
  )
}

AboutUsIcon.propTypes = {
    size: Proptypes.string,
    color: Proptypes.string,
    margin: Proptypes.string,
};

export default AboutUsIcon;
