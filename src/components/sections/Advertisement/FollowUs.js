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
          <InstagramIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={"https://www.instagram.com/gundemedairhs"}
          />
          <TwitterIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={"https://x.com/gundemedairhs"}
          />
          <LinkedinIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={"https://www.linkedin.com/company/gdhtv/"}
          />
          <SpotifyIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={
              "https://open.spotify.com/show/33HjTgoARQFSv3RaHKBIPQ?trackId=5hmxbGHnxB9veBsMNDq6xw"
            }
          />
          <YouTubeIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={"https://www.youtube.com/gundemedairhersey"}
          />
          <TelegramIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={"https://t.me/gundemedairhs"}
          />
          <SoundCloudIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={"https://soundcloud.com/gdhtv"}
          />
          <ApplePodcastsIcon
            size="14px"
            color="white"
            margin="0 4px"
            padding="0"
            link={
              "https://podcasts.apple.com/us/podcast/g%C3%BCndeme-dair-her-%C5%9Fey/id1555228416"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
