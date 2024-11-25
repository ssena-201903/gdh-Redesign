import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Advertisement.scss";

import { getRandomImage } from "../../../unsplashService";

const Advertisement = ({ width, height, margin, addFontSize }) => {
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
      <div className="advertisement-img">
        {imgUrl ? (
          <img src={imgUrl} alt="Random_Unsplash"></img>
        ) : (
          <p>Loading Image...</p>
        )}

        <h3 className="advertisement-text">The Brand</h3>
      </div>
    </div>
  );
};

Advertisement.propTypes = {
  with: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  addFontSize: PropTypes.string,
};

export default Advertisement;
