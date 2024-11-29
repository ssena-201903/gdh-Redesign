import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Advertisement.scss";

import { getRandomImage } from "../../../unsplashService";
import CloseIcon from "../../icons/CloseIcon";

const Advertisement = ({ width, height, margin, addFontSize }) => {
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/seed/6084/900/300");
  const [isAdVisible, setIsAdVisible] = useState(true);
  const [isRemovedMessageVisible, setIsRemovedMessageVisible] = useState(false);

  const handleCloseAdd = () => {
    setIsAdVisible(false);
    setIsRemovedMessageVisible(true);

    setTimeout(() => {
      setIsRemovedMessageVisible(false);
    }, 3000);
  };

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
    <>
      {isAdVisible && (
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

            <h3
              className="advertisement-text"
              style={{ fontSize: addFontSize }}
            >
              The Brand
            </h3>
            <p className="advertisement-sub-text">Reklam</p>
            <CloseIcon
              size="20px"
              color="white"
              margin="0"
              top="30px"
              right="30px"
              onClick={handleCloseAdd}
            />
          </div>
        </div>
      )}
      {isRemovedMessageVisible && (
        <div
          style={{
            width: "900px",
            height: "30px",
            backgroundColor: "#F2F5F8",
            color: "#181731",
            textAlign: "center",
            lineHeight: "30px",
            margin: "10px auto",
            borderRadius: "4px",
          }}
        >
          Reklam Kaldırıldı...
        </div>
      )}
    </>
  );
};

Advertisement.propTypes = {
  with: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  addFontSize: PropTypes.string,
};

export default Advertisement;
