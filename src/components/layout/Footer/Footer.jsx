import React from "react";
import "./Footer.scss";
import Logo from "../../common/Logo";
import SocialLinks from "../../sections/Advertisement/SocialLinks";
import SocialButton from "../../common/SocialButton";
import InputCard from "../Card/InputCard";
import PrimaryButton from "../../common/PrimaryButton";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-add">
        <div className="footer-logo">
          <Logo
            width="100px"
            height="auto"
            margin="0 20px 0 0"
            variant="white"
          />
          <div className="app-name">
            <p className="name">gdh dijital</p>
            <p className="name">Haberin dijital medyası</p>
          </div>
        </div>
        <SocialLinks size="16px" margin="0 6px" color="white" />
        <p className="footer-copyright">Copyrights © text</p>
      </div>
      <div className="footer-contact">
        <p>Bize Haber Gönderin</p>
        <p>İletişim Bilgileri</p>
        <p>Kariyer</p>
        <p>Reklam ve İşbirliği</p>
        <p>Hakkımızda</p>
        <p>Gizlilik Politikası</p>
        <p>Künye</p>
      </div>
      <div className="footer-social">
        <div className="footer-follow-us">
          <h5>App Store ve Google Play’de</h5>
          <div className="footer-social-buttons">
            <SocialButton
              variant="playStore"
              margin="0 4px"
              padding="0"
              width="180px"
              height="auto"
            />
            <SocialButton
              variant="apple"
              margin="0 4px"
              padding="0"
              width="180px"
              height="auto"
            />
          </div>
        </div>
        <div className="footer-sign-up">
          <h5>Gelişmeleri yakından takip edebilmek için;</h5>
          <div className="sign-up-button">
            <InputCard
              variant="noIcon"
              textSize="14px"
              margin="10px 0"
              padding="8px 16px"
              width="300px"
              height="25px"
              text="Mail adresinizi giriniz"
              placeholderColor="white"
            />
            <PrimaryButton
                width="100px"
                height="40px"
                margin="10px 20px"
                textContent="Kayıt Ol"
                variant="fill"
                backgroundColor="white"
                color="#181731"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
