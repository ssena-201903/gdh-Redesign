import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsCardImg.scss";
// import { getRandomImage } from "../../../unsplashService";

import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

import CommentIcon from "../../icons/CommentIcon";
import HeartIcon from "../../icons/HeartIcon";
import SaveIcon from "../../icons/SaveIcon";
import EyeIcon from "../../icons/EyeIcon";
import ShareIcon from "../../icons/ShareIcon";
import NewsPara from "../../sections/NewsArticle/NewsPara";
// import SendIcon from "../../icons/SendIcon";
// import CommentCard from "./CommentCard";

const NewsCardImg = ({ width }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [likedCount, setLikedCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [seenCount, setSeenCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  const [topicName, setTopicName] = useState("");
  const [time, setTime] = useState("0 dk");
  const [header, setHeader] = useState("");
  const [newsPara, setNewsPara] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const goToContentPage = () => {
    navigate("/content");
  };

  // if heart icon is not filled
  const handleUnLikedCount = async () => {
    if (!isLiked) {
      setLikedCount((prevCount) => prevCount + 1);

      if (documentId) {
        const postRef = doc(db, "news", documentId);
        await updateDoc(postRef, {
          likedNumber: likedCount + 1,
          isLiked: true,
        });
      }
      setIsLiked(true);
    }
  };

  // if heart icon is filled
  const handleLikedCount = async () => {
    if (isLiked && likedCount > 0) {
      setLikedCount((prevCount) => prevCount - 1);

      if (documentId) {
        const postRef = doc(db, "news", documentId);
        await updateDoc(postRef, {
          likedNumber: likedCount - 1,
          isLiked: false,
        });
      }
      setIsLiked(false);
    }
  };

  // if save icon is filled
  const handleSavedCount = async () => {
    if (isSaved && savedCount > 0) {
      setSavedCount((prevCount) => prevCount - 1);

      if (documentId) {
        const postRef = doc(db, "news", documentId);
        await updateDoc(postRef, {
          savedNumber: savedCount - 1,
          isSaved: false,
        });
        setIsSaved(false);
      }
    }
  };

  // if save icon is not filled
  const handleUnSavedCount = async () => {
    if (!isSaved) {
      setSavedCount((prevCount) => prevCount + 1);

      if (documentId) {
        const postRef = doc(db, "news", documentId);
        await updateDoc(postRef, {
          savedNumber: savedCount + 1,
          isSaved: true,
        });
      }
      setIsSaved(true);
    }
  };

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
          // collect doc ids
          const docIds = snapshot.docs.map((doc) => doc.id);

          // pic a random id
          const randomIndex = Math.floor(Math.random() * docIds.length);
          const randomId = docIds[randomIndex];
          setDocumentId(randomId);

          // get selected doc
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
            // setNewsPara(postData.para);
            setIsLiked(postData.isLiked || false);
            setIsSaved(postData.isSaved || false);
            handleTime(postData.time);

            const paragraphRef = collection(randomDocRef, "paragraphs");
            const paragraphSnapshot = await getDocs(paragraphRef);

            if (paragraphSnapshot.empty) {
              console.log("no paragraph found");
            } else {
              const paragraphs = paragraphSnapshot.docs
                .map((doc) => doc.data().para)
                .filter((para) => para);
              if (paragraphs.length > 0) {
                // set as a string
                setNewsPara(paragraphs.join("\n\n"));
              }
            }

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
      <div className="card-content" onClick={goToContentPage}>
        <div className="content-text">
          <NewsPara text={newsPara} margin="20px 0" fontSize="16px" />
        </div>
        <div className="content-img">
          {imgUrl ? (
            <img src={imgUrl} alt="Random_Picsum" />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
      <div className="go-to-content">
        <p onClick={goToContentPage}>Haber sayfasına git</p>
      </div>
      <div className="card-icons">
        <div className="icon-item">
          <CommentIcon size="16px" color="rgb(24, 23, 49, 0.6)" />
          <p>{commentCount}</p>
        </div>
        <div className="icon-item">
          <HeartIcon
            size="16px"
            color="rgb(24, 23, 49, 0.6)"
            onClickDec={handleLikedCount}
            onClickInc={handleUnLikedCount}
            isLiked={isLiked}
          />
          <p>{likedCount}</p>
        </div>
        <div className="icon-item">
          <SaveIcon
            size="16px"
            color="rgb(24, 23, 49, 0.6)"
            onClickInc={handleUnSavedCount}
            onClickDec={handleSavedCount}
            isSaved={isSaved}
          />
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
    </div>
  );
};

export default NewsCardImg;
