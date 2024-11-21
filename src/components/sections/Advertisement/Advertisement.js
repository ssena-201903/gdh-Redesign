import React, { useEffect, useState } from "react";
import "./Advertisement.scss";

import { getRandomImage } from "../../../unsplashService";

const Advertisement = ({ width, height, margin }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const image = await getRandomImage();
      if (image) {
        setImgUrl(image);
      } else {
        console.log("could not loud image");
      }
    };
    fetchImage();
  }, []);

  return (
    <div
      className="main-advertisement"
      style={{ width: width, height: height, margin: margin }}
    >
      {imgUrl ? (
        <img src={imgUrl} alt="Random_Unsplash"></img>
      ) : (
        <p>Loading Image...</p>
      )}
    </div>
  );
};

export default Advertisement;
