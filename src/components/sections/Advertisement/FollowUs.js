import React from "react";
import "./FollowUs.scss";

import SocialButton from "../../common/SocialButton";
import InstagramIcon from "../../icons/InstagramIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import SpotifyIcon from "../../icons/SpotifyIcon";
import YouTubeIcon from "../../icons/YouTubeIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import ApplePodcastsIcon from "../../icons/ApplePodcastsIcon";
import SoundCloudIcon from "../../icons/SoundCloudIcon";

import AppleIcon from "../../icons/AppleIcon";
import PlayStoreIcon from "../../icons/PlayStoreIcon";

const FollowUs = () => {
  return (
    <div className="main">
      <h5>
        Gündeme Dair Her Şey uygulamamızı indirerek yakından takip edebilirsiniz
      </h5>
      <div className="buttons">
        <SocialButton
          margin="0 4px"
          padding="0"
          IconComponent={PlayStoreIcon}
          text1="GET IT ON"
          text2="Google Play"
        />
        <SocialButton
          margin="0 4px"
          padding="0"
          IconComponent={AppleIcon}
          text1="Download on the"
          text2="App Store"
        />
      </div>
      <div className="social-button-container">
        <p>Ve diğer tüm mecralar için;</p>
        <div className="social-buttons">
          <InstagramIcon size="14px" color="white" margin="0 4px" padding="0" />
          <TwitterIcon size="14px" color="white" margin="0 4px" padding="0" />
          <LinkedinIcon size="14px" color="white" margin="0 4px" padding="0" />
          <SpotifyIcon size="14px" color="white" margin="0 4px" padding="0" />
          <YouTubeIcon size="14px" color="white" margin="0 4px" padding="0" />
          <TelegramIcon size="14px" color="white" margin="0 4px" padding="0" />
          <SoundCloudIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
          />
          <ApplePodcastsIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
          />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
