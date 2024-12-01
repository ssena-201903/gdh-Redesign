import { Link } from 'react-router-dom';
import logo_black from "../../assets/logo.png";
import logo_white from "../../assets/logo2.png";

const Logo = ({ width, height, margin, variant }) => {
  const srcPath = variant === "white" ? logo_white : logo_black; 
  return (
    <div className='logo'>
      <Link to="/">
        <img src={srcPath} alt='gdh_logo' style={{width: width, height: height, margin: margin}}></img>
      </Link>
    </div>
  )
}

export default Logo
