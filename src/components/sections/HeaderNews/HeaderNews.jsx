import React, { useEffect, useState } from "react";
import { useCard } from "../../../context/CardContext";
import "./HeaderNews.scss";
import ActionCard from "../../layout/Card/ActionCard";
import RightArrowIcon from "../../icons/RightArrowIcon";
// import profilePath from "../../../assets/pp.jpg";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const HeaderNews = () => {
  const [newsTopic, setNewsTopic] = useState("Type");
  const [newsTime, setNewsTime] = useState("");
  const [editorName, setEditorName] = useState("");
  const [editorPicture, setEditorPicture] = useState(null);
  const { selectedCardId } = useCard();
  const navigate = useNavigate();

  console.log("header news selected card id:", selectedCardId);

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

    setNewsTime(timeString);
    console.log("time: ", timeString);
  };

  const goToHomePage = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!selectedCardId) {
      console.warn("selected card id null");
    }
  }, [selectedCardId]);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const newsRef = doc(db, "news", selectedCardId);
        const newsSnap = await getDoc(newsRef);

        if (newsSnap.exists()) {
          const data = newsSnap.data();
          handleTime(data.time);
          setNewsTopic(data.topic);
        } else {
          console.log("no such document!");
        }

        const editorRef = collection(db, "news", selectedCardId, "editor");
        const editorSnap = await getDocs(editorRef);
        // console.log("editor snapleri: ", editorSnap);

        if (!editorSnap.empty) {
          const editorData = editorSnap.docs[0].data();
          // console.log("editor snapleri: ", editorData);
          setEditorName(editorData.name || "unknown editor");
          setEditorPicture(editorData.picture);
        }
      } catch (error) {
        console.log("no editor found");
      }
    };
    fetchHeaderData();
  }, [selectedCardId]);

  return (
    <div className="header-news">
      <h5 className="home-title" onClick={goToHomePage}>Anasayfa</h5>
      <RightArrowIcon size="16px" color="#343330" margin="0 8px" />
      <h5 className="type-news">{newsTopic}</h5>
      <div className="profile-header-news">
        <img src={editorPicture} alt="editor_pp"></img>
        <p className="editor-name">{editorName}</p>
        <p className="edit-time">{newsTime} önce yazdı</p>
      </div>
      <ActionCard
        width="200px"
        height="fit-content"
        margin="0 20px"
        color="rgb(24, 23, 49, 0.6)"
        padding="8px 16px"
      />
    </div>
  );
};

export default HeaderNews;
