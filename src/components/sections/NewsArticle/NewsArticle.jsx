import React, { useEffect, useContext } from "react";
import { ContentContext } from "../../../context/ContentContext";
import NewsTitle from "./NewsTitle";
import NewsPara from "./NewsPara";
import NewsImage from "./NewsImage";
import Advertisement from "../Advertisement/Advertisement";

const NewsArticle = () => {
  const { setContentLength } = useContext(ContentContext);

  useEffect(() => {
    const content = document.getElementById("news-content");
    if (content) {
      setContentLength(content.innerText.length);
    }
  }, [setContentLength]);

  const styles = {
    width: "900px",
    height: "fit-content",
    margin: "10px 30px 20px 30px",
  };

  return (
    <div id="news-content" style={styles}>
      <NewsTitle
        text="Lorem ipsum dolor sit amet consectetur. A massa morbi morbi et donec eget sollicitudin."
        variant="main"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="10px 0 20px 0"
        fontSize="16px"
        lineHeight="2"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="0"
        fontSize="16px"
        lineHeight="2"
      />
      <NewsImage
        src="https://picsum.photos/id/233/200/300"
        alt="news_image"
        width="900px"
        height="300px"
        margin="20px 0"
      />
      <NewsTitle
        text="Lorem ipsum dolor sit amet consectetur. A massa morbi morbi et donec eget sollicitudin."
        variant="sub"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="10px 0 20px 0"
        fontSize="16px"
        lineHeight="2"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="10px 0 20px 0"
        fontSize="16px"
        lineHeight="2"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="10px 0 20px 0"
        fontSize="16px"
        lineHeight="2"
      />
      <Advertisement
        width="900px"
        height="300px"
        margin="80px 0"
        addFontSize="42px"
      />
      <NewsTitle
        text="Lorem ipsum dolor sit amet consectetur. A massa morbi morbi et donec eget sollicitudin."
        variant="sub"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="10px 0 20px 0"
        fontSize="16px"
        lineHeight="2"
      />
      <NewsImage
        src="https://picsum.photos/seed/6084/400/200"
        alt="news_image"
        width="900px"
        height="300px"
        margin="20px 0"
      />
      <NewsPara
        text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis."
        margin="10px 0 20px 0"
        fontSize="16px"
        lineHeight="2"
      />
    </div>
  );
};

export default NewsArticle;
