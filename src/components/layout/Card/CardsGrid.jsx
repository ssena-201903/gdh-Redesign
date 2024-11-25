import React, { useEffect, useState } from "react";
import NewsCardImg from "./NewsCardImg";
import Advertisement from "../../sections/Advertisement/Advertisement";

const CardsGrid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const newsCards = Array.from({length: 18}, (_, index) => ({
        id: index + 1, //giving id for each card
    }))

    const cardsWithAds = [];
    newsCards.forEach((card, index) => {
        cardsWithAds.push(card);

        //after every 6 cards add an advertisement
        if ((index + 1) % 6 === 0) {
            cardsWithAds.push({ id: `ad-${index}`, type: "advertisement"});
        }
    });
    setCards(cardsWithAds);
  }, []);

  return (
    <div className="cards-wrap-home-page">
        {cards.map((item) =>
            item.type === "advertisement" ? (
                <Advertisement
                    key={item.id}
                    width="1200px"
                    height="300px"
                    margin="30px"
                />
            ) : (
                <NewsCardImg key={item.id}/>
            )
        )}
    </div>
  );

};

export default CardsGrid;
