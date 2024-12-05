import React, { useEffect, useState } from "react";
import { useContent } from "../../../context/ContentContext";
import NewsCard from "./NewsCard";

const CardsGridContent = () => {
  const { contentLength } = useContent();
  const [cards, setCards] = useState([]);

  // calculate the number of cards as length of content
  useEffect(() => {
    const numberOfCards = Math.floor(contentLength / 450);
    const newCards = Array.from({ length: numberOfCards }, (_, index) => ({
      id: index + 1,
    }));
    setCards(newCards);
  }, [contentLength]);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div id="news-content" style={{ flex: 3 }}>
        <h5
          style={{
            margin: "0 0 40px 20px",
            fontSize: "20px",
            fontWeight: "400",
            color: "#181731",
          }}
        >
          İlginizi çekebilir
        </h5>
        {/* making cards dynamically */}
        {cards.map((card) => (
          <div key={card.id}>
            <NewsCard key={card.id} width="280px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGridContent;
