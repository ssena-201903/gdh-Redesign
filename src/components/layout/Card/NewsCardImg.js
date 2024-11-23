import React, { useState, useEffect } from "react";
import "./NewsCardImg.scss";
// import { getRandomImage } from "../../../unsplashService";

import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

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
  const [time, setTime] = useState("0 dk");
  const [header, setHeader] = useState("");

  //convert time to an object and show on the post
  const handleTime = (time) => {
    const currentTime = new Date();
    const timeObject = time.toDate();
    const uploadTime = currentTime - timeObject;

    const seconds = Math.floor(uploadTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let timeString = "";
    if (days > 0) {
      timeString = `${days} gün`;
    } else if (hours > 0) {
      timeString = `${hours} saat`;
    } else if (minutes > 0) {
      timeString = `${minutes} dakika`;
    } else if (seconds > 0) {
      timeString = `${seconds} saniye`;
    }

    setTime(timeString);
    console.log("geçen süre: ", timeString);
  };

  useEffect(() => {
    // const fetchImage = async () => {
    //   const image = await getRandomImage();
    //   if (image) {
    //     setImgUrl(image);
    //   }
    // };
    // fetchImage();

    const fetchPostData = async () => {
      try {
        const postRef = collection(db, "news");
        const snapshot = await getDocs(postRef);
    
        if (!snapshot.empty) {
          // Belge kimliklerini topla
          const docIds = snapshot.docs.map((doc) => doc.id);
    
          // Rastgele bir ID seç
          const randomIndex = Math.floor(Math.random() * docIds.length);
          const randomId = docIds[randomIndex];
    
          // Seçilen belgeyi getir
          const randomDocRef = doc(db, "news", randomId);
          const randomDoc = await getDoc(randomDocRef);
    
          if (randomDoc.exists()) {
            const postData = randomDoc.data();
            setTopicName(postData.topic);
            setHeader(postData.header);
            setCommentCount(postData.commentNumber);
            setSeenCount(postData.seenNumber);
            setLikedCount(postData.likedNumber);
            setImgUrl(postData.img);
            setSavedCount(postData.savedNumber);
            handleTime(postData.time);
          } else {
            console.log("No document found for the selected ID.");
          }
        } else {
          console.log("No documents found in the collection.");
        }
      } catch (error) {
        console.error("Error fetching random post data: ", error);
      }
    };
    fetchPostData();
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
