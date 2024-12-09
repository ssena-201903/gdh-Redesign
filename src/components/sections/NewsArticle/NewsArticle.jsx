import React, { useEffect, useState } from "react";
import { useContent } from "../../../context/ContentContext";
import { useCard } from "../../../context/CardContext";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import NewsTitle from "./NewsTitle";
import NewsPara from "./NewsPara";
import NewsImage from "./NewsImage";
import Advertisement from "../Advertisement/Advertisement";
import NewsSource from "./NewsSource";
import InputCard from "../../layout/Card/InputCard";
import SendIcon from "../../icons/SendIcon";
import img_1 from "../../../assets/holiday.jpg";
// import img_2 from "../../../assets/holiday2.jpg";

const NewsArticle = () => {
  const { setContentLength } = useContent();
  const [sections, setSections] = useState([]);
  // const [randomAdIndex, setRandomAdIndex] = useState(-1);
  const { selectedCardId } = useCard(); 

  useEffect(() => {
    if (!selectedCardId) {
      console.warn("selected card id null");
    }
  }, [selectedCardId]);

  useEffect(() => {
    const content = document.getElementById("news-content");
    if (content) {
      setContentLength(content.offsetHeight);
    }
  }, [setContentLength]);

  // fetch data from firestore
  useEffect(() => {
    const fetchSections = async () => {
      try {
        console.log("document id number:", selectedCardId);
        const sectionRef = collection(db, "news", selectedCardId, "sections");
        console.log("sectionRef: ", sectionRef);
        const querySnapshot = await getDocs(
          query(sectionRef, orderBy("order", "asc"))
        );

        console.log("fetch edilen yerler: ", querySnapshot);
        const fetchedSections = querySnapshot.docs.map((doc) => doc.data());
        setSections(fetchedSections);
      } catch (error) {
        console.log("could not fetched sections: ", error);
      }
    };

    fetchSections();
  }, [selectedCardId]);

  // render content as type
  const renderContent = () => {
    return sections.map((section, index) => {
      if (section.type === "header") {
        return (
          <NewsTitle
            key={index}
            variant={section.variant || "main"}
            text={section.text}
          />
        );
      } else if (section.type === "para") {
        return (
          <NewsPara
            key={index}
            text={section.text}
            margin="10px 0 20px 0"
            fontSize="17px"
            lineHeight="2"
          />
        );
      } else if (section.type === "img") {
        return (
          <NewsImage
            key={index}
            src={section.text}
            alt="news_image"
            width="900px"
            height="300px"
          />
        );
      } else {
        return null;
      }
    });
  };

  const styles = {
    width: "900px",
    height: "fit-content",
    margin: "10px 30px 20px 30px",
  };

  return (
    <div id="news-content" style={styles}>
      {sections.length > 0 && (
        <>
          {renderContent()}

          <Advertisement
            width="900px"
            height="300px"
            margin="80px 0"
            addFontSize="42px"
          />
          <NewsSource />
          <InputCard
            variant="withIcon"
            textSize="14px"
            margin="20px 0 40px 0"
            padding="4px 16px"
            width="98%"
            height="40px"
            iconColor="#666"
            iconSize="20px"
            iconMargin="0 20px 0 0"
            text="Yorum yap"
            IconComponent={SendIcon}
          />
        </>
      )}
    </div>
  );
};

export default NewsArticle;
