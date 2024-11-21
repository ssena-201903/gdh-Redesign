import React, { useState, useEffect } from "react";
import "./NewsCardImg.scss";
import { getRandomImage } from "../../../unsplashService";

import { getDocs, collection} from "firebase/firestore"
import { db } from "../../../firebaseConfig"

import CommentIcon from "../../icons/CommentIcon";
import HeartIcon from "../../icons/HeartIcon";
import SaveIcon from "../../icons/SaveIcon";
import EyeIcon from "../../icons/EyeIcon";
import ShareIcon from "../../icons/ShareIcon";
// import SendIcon from "../../icons/SendIcon";
// import CommentCard from "./CommentCard";

const NewsCardImg = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [likedCount, setLikedCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [seenCount, setSeenCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [time, setTime] = useState("");
  const [header, setHeader] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const image = await getRandomImage();
      if (image) {
        setImgUrl(image);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="main-news-card-img">
      <div className="card-top-header">
        <p className="topic">{topicName}</p>
        <p className="set-time">{time}</p>
      </div>
      <h5>{header}</h5>
      <div className="card-content">
        {/* <p className="content-text">
          Lorem ipsum dolor sit amet consectetur. Etiam cras pharetra ac mattis
          volutpat euismod lacus sit eget. Eget mi velit pellentesque vestibulum
          vitae.
        </p> */}
        <div className="content-img">
          {imgUrl ? (
            <img src={imgUrl} alt="Random_Picsum" />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
      <div className="go-to-content">
        <a href="google.com" target="_blank">
          Haber sayfasına git
        </a>
      </div>
      <div className="card-icons">
        <div className="icon-item">
          <CommentIcon size="16px" color="rgb(24, 23, 49, 0.6)" />
          <p>{commentCount}</p>
        </div>
        <div className="icon-item">
          <HeartIcon size="16px" color="rgb(24, 23, 49, 0.6)" />
          <p>{likedCount}</p>
        </div>
        <div className="icon-item">
          <SaveIcon size="16px" color="rgb(24, 23, 49, 0.6)" />
          <p>{savedCount}</p>
        </div>
        <div className="icon-item">
          <EyeIcon size="16px" color="rgb(24, 23, 49, 0.6)" />
          <p>{seenCount}</p>
        </div>
        <div className="icon-item">
          <ShareIcon size="16px" color="rgb(24, 23, 49, 0.6)" />
        </div>
      </div>
      {/* <div className="card-comment">
        <CommentCard
          IconComponent={SendIcon}
          textSize="16px"
          margin="20px 10px"
          padding="4px 16px"
          width="380px"
          height="30px"
          iconSize="16px"
          iconColor="rgb(24, 23, 49, 0.6)"
        />
      </div> */}
    </div>
  );
};

export default NewsCardImg;
