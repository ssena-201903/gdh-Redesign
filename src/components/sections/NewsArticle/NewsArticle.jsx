import React from "react";
import NewsTitle from "./NewsTitle";
import NewsPara from "./NewsPara";
import NewsImage from "./NewsImage";
import Advertisement from "../Advertisement/Advertisement";

const NewsArticle = () => {
  const styles = {
    width: "900px",
    height: "fit-content",
    margin: "10px 30px 20px 30px",
  };
  return (
    <div style={styles}>
      <NewsTitle
        text="Lorem ipsum dolor sit amet consectetur. A massa morbi morbi et donec eget sollicitudin."
        variant="main"
      />
      <NewsPara text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis." />
      <NewsPara text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis." />
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
      <NewsPara text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis." />
      <NewsPara text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis." />
      <Advertisement width="900px" height="300px" margin="80px 0" addFontSize="42px"/>
      <NewsTitle
        text="Lorem ipsum dolor sit amet consectetur. A massa morbi morbi et donec eget sollicitudin."
        variant="sub"
      />
      <NewsPara text="Elementum vulputate sapien mattis id ornare scelerisque at hac. Amet imperdiet malesuada mus vel etiam non. Id diam nibh massa magna nulla sodales euismod. Mattis dignissim lectus blandit amet velit facilisis. Massa posuere auctor semper viverra cras augue. Vestibulum est aliquet ullamcorper interdum nisl enim mattis." />
      <NewsImage
        src="https://picsum.photos/seed/6084/400/200"
        alt="news_image"
        width="900px"
        height="300px"
        margin="20px 0"
      />
    </div>
  );
};

export default NewsArticle;
