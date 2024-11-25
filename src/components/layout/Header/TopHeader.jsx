import DownArrowIcon from "../../icons/DownArrowIcon";
import SunnyIcon from "../../icons/SunnyIcon";
import "./TopHeader.scss";

export default function TopHeader() {
  return (
    <div className="main-top-header">
      <div className="weather">
        {/* <i className="fa-regular fa-sun"></i> */}
        <SunnyIcon size="16px" color="#F7C900" margin="0"/>
        <p>18.7 °</p>
        <p>İstanbul</p>
        {/* <i className="fa-solid fa-angle-down"></i> */}
        <DownArrowIcon size="12px" color="white" margin="0 4px"/>
      </div>
      <div className="score">
        <p><span>1.</span>Galatasaray</p>
        <p>O 34</p>
        <p>AV 59</p>
        <p>P 93</p>
        {/* <i className="fa-solid fa-angle-down"></i> */}
        <DownArrowIcon size="12px" color="white" margin="0 4px"/>
      </div>
    </div>
  );
}
