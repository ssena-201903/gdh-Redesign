import React from "react";
import "./Header.scss";
// import logoPath from "../../../assets/logo.png";
import Logo from "../../common/Logo";
import SearchIcon from "../../icons/SearchIcon";

export default function Header() {
  return (
    <div>
      <div className="header">
        <Logo width="60px" height="auto" margin="0 20px" />
        <div className="header-titles">
          <a href="google.com" target="blank">
            SON DAKİKA
          </a>
          <a href="google.com" target="blank">
            Gündem
          </a>
          <a href="google.com" target="blank">
            Spor
          </a>
          <a href="google.com" target="blank">
            Tarih
          </a>
          <a href="google.com" target="blank">
            Savunma
          </a>
          <a href="google.com" target="blank">
            Teknoloji
          </a>
          <a href="google.com" target="blank">
            Pozitif Biraz
          </a>
          <a href="google.com" target="blank">
            Diğer
          </a>
        </div>
        <div className="profile">
          <SearchIcon size="20px" color="#181731"/>
          <p>Merhaba, Safiye Sena</p>
          <div className="profile-pp">
            <p>S</p>
          </div>
        </div>
      </div>
    </div>
  );
}
