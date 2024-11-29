import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Logo = ({ width, height, margin }) => {
  return (
    <div className='logo'>
      <Link to="/">
        <img src={logo} alt='gdh_logo' style={{width: width, height: height, margin: margin}}></img>
      </Link>
    </div>
  )
}

export default Logo
