import React from 'react'
import InstagramIcon from '../../icons/InstagramIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import SpotifyIcon from '../../icons/SpotifyIcon';
import YouTubeIcon from '../../icons/YouTubeIcon';
import TelegramIcon from '../../icons/TelegramIcon';
import SoundCloudIcon from '../../icons/SoundCloudIcon';
import ApplePodcastsIcon from '../../icons/ApplePodcastsIcon';

const SocialLinks = ({ size, margin, color}) => {
  return (
    <div>
      <InstagramIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={"https://www.instagram.com/gundemedairhs"}
          />
          <TwitterIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={"https://x.com/gundemedairhs"}
          />
          <LinkedinIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={"https://www.linkedin.com/company/gdhtv/"}
          />
          <SpotifyIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={
              "https://open.spotify.com/show/33HjTgoARQFSv3RaHKBIPQ?trackId=5hmxbGHnxB9veBsMNDq6xw"
            }
          />
          <YouTubeIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={"https://www.youtube.com/gundemedairhersey"}
          />
          <TelegramIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={"https://t.me/gundemedairhs"}
          />
          <SoundCloudIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={"https://soundcloud.com/gdhtv"}
          />
          <ApplePodcastsIcon
            size={size}
            color={color}
            margin={margin}
            padding="0"
            link={
              "https://podcasts.apple.com/us/podcast/g%C3%BCndeme-dair-her-%C5%9Fey/id1555228416"
            }
          />
    </div>
  )
}

export default SocialLinks
