import React, { useState, useEffect } from "react";
import { useNavbar } from "../../../context/NavbarContext";
import { getDocs, collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

import NewsPara from "../../sections/NewsArticle/NewsPara";

import "./NewsCard.scss";

const NewsCard = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [topicName, setTopicName] = useState("");
  const [time, setTime] = useState("0 dk");
  const [header, setHeader] = useState("");
  const [newsPara, setNewsPara] = useState("");
  const [documentId, setDocumentId] = useState("");

  const { isNavbarOpen } = useNavbar();


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
          // setDocumentId(randomId);

          // get selected doc
          const randomDocRef = doc(db, "news", randomId);
          const randomDoc = await getDoc(randomDocRef);

          if (randomDoc.exists()) {
            const postData = randomDoc.data();
            setTopicName(postData.topic);
            setHeader(postData.header);
            setImgUrl(postData.img);
            setNewsPara(postData.para);
            handleTime(postData.time);
            
            // to set paragraph, get text values of order=2
            const sectionRef = collection(randomDocRef, "sections");
            const querySnapshot = await getDocs(
              query(sectionRef, where("order", "==", 2))
            );

            if (!querySnapshot.empty) {
              querySnapshot.forEach((doc) => {
                // console.log("dokuman id'si:", doc.id);
                // console.log("dokuman verisi", doc.data());
              })
            
              const sections = querySnapshot.docs
                .map((doc) => doc.data().text) 
                .filter(Boolean); 
              setNewsPara(sections.join("\n\n")); 
            } else {
              console.log("Herhangi bir alt bölüm bulunamadı.");
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
    <div
      className="main-news-card"
      style={{
        cursor: "pointer",
        width: isNavbarOpen ? "240px" : "320px",
        transition: "flex 0.3s ease",
      }}
    >
      <div className="card-top-header">
        <p className="topic">{topicName}</p>
        <p className="set-time">{time}</p>
      </div>
      <h5 style={{
        height: isNavbarOpen ? "auto" : "60px",
      }}>{header}</h5>
      <div className="card-content" style={{height: isNavbarOpen ? "120px" : "200px"}}>
        <div className="content-text" style={{width: isNavbarOpen ? "100%" : "50%"}}>
          <NewsPara
            text={newsPara}
            margin="0 8px 0 0"
            fontSize="14px"
            lineHeight={1.6}
          />
        </div>
        <div className="content-img" style={{width: isNavbarOpen ? "0" : "50%"}}>
          {imgUrl ? (
            <img src={imgUrl} alt="Random_Picsum" />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
      <div className="go-to-content">
        <p>Haber sayfasına git</p>
      </div>
    </div>
  );
};

export default NewsCard;
