import React from "react";
import PropTypes from "prop-types";
import "./SocialButton.scss";
import AppleIcon from "../icons/AppleIcon";
import PlayStoreIcon from "../icons/PlayStoreIcon";

const SocialButton = ({
  IconComponent,
  text1,
  text2,
  padding,
  margin,
  link,
  width,
  height,
  variant,
}) => {

  const getButtonContent = () => {
    switch (variant) {
      case "apple":
        return {
          IconComponent: AppleIcon, // Apple için ikon
          text1: "GET IT ON",
          text2: "App Store",
          link: "https://apps.apple.com/us/app/example-app/id1234567890",
        };
      case "playStore":
        return {
          IconComponent: PlayStoreIcon, // Google Play için ikon
          text1: "GET IT ON",
          text2: "Google Play",
          link: "https://play.google.com/store/apps/details?id=digital.gdh.app",
        };
      default:
        return {
          IconComponent: PlayStoreIcon,
          text1: "GET IT ON",
          text2: "Google Play",
          link: "https://play.google.com/store/apps/details?id=digital.gdh.app",
        };
    }
  };

  const {
    IconComponent: ButtonIcon,
    text1: ButtonText1,
    text2: ButtonText2,
    link: ButtonLink,
  } = getButtonContent();

  const handleLink = () => {
    if (ButtonLink) {
      window.open(ButtonLink, "_blank");
    }
  };

  return (
    <div
      className="social-button"
      style={{
        margin: margin,
        padding: padding,
        width: width,
        height: height,
        cursor: "pointer",
      }}
      onClick={handleLink}
    >
      {ButtonIcon && (
        <ButtonIcon size="16px" color="white" margin="2px" />
      )}
      <div className="text-container">
        <p className="text1">{ButtonText1}</p>
        <p className="text2">{ButtonText2}</p>
      </div>
    </div>
  );
};

SocialButton.propTypes = {
  IconComponent: PropTypes.func,
  text1: PropTypes.string,
  text2: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  variant: PropTypes.oneOf(["apple", "playStore" ])
};

export default SocialButton;
