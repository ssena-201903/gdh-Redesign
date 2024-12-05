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
            fontSize="18px"
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
      {/* <NewsTitle
        text="Tatilde Hayat Kurtaran İpuçları! Seyahatte Mutlaka Bilmeniz Gerekenler"
        variant="main"
      />
      <NewsPara
        text="Tatil, dinlenmek ve yenilenmek için harika bir fırsattır, 
        ancak doğru planlama yapılmadığında stresli bir deneyime dönüşebilir. 
        İşte seyahat sırasında size zaman ve enerji kazandıracak hayat kurtaran ipuçları! 
        Tatilinizi daha keyifli ve sorunsuz geçirmeniz için bu önerilere mutlaka göz atın."
        margin="10px 0 20px 0"
        fontSize="18px"
        lineHeight="2"
      />
      <NewsPara
        text="Unutmayın, tatil sadece yeni yerler keşfetmek değil, 
        aynı zamanda anılar biriktirmek demektir. 
        Planlamanızı akıllıca yaparak beklenmedik sorunları 
        en aza indirebilir ve her anın tadını çıkarabilirsiniz."
        margin="0"
        fontSize="18px"
        lineHeight="2"
      />
      <NewsImage src={img_1} alt="news_image" width="900px" height="300px" />
      <NewsTitle text="1. Seyahat Planlamasında Altın Kurallar" variant="sub" />
      <NewsTitle text="Esnek ve Akıllı Bilet Seçimi:" variant="minor" />
      <NewsPara
        text="Uçak biletlerinizi alırken fiyat karşılaştırma sitelerinden yararlanın 
        ve esnek tarih seçeneğini göz önünde bulundurun. 
        Genellikle hafta içi ve gece uçuşları daha ekonomik olabilir. 
        Ayrıca, hava yollarının bagaj politikalarını kontrol ederek sürpriz ücretlerden kaçının."
        margin="10px 0 20px 0"
        fontSize="18px"
        lineHeight="2"
      />
      <NewsTitle
        text="Konaklamada Önceliklerinizi Belirleyin:"
        variant="minor"
      />
      <NewsPara
        text="Tatil planınıza uygun bir otel veya konaklama seçmek önemlidir. 
        Çocuklu aileler için geniş odalar ve mutfak imkânı sunan tesisler idealdir. 
        Tek başınıza seyahat ediyorsanız, daha merkezi ve sosyal bir atmosfere sahip butik 
        otelleri tercih edebilirsiniz."
        margin="10px 0 20px 0"
        fontSize="18px"
        lineHeight="2"
      />
      <NewsTitle text="Acil Durumlar İçin Hazırlıklı Olun:" variant="minor" />
      <NewsPara
        text="Yanınızda her zaman temel ilk yardım malzemeleri, 
        yedek şarj cihazı ve pasaportunuzun bir kopyasını bulundurun. 
        Ayrıca, gideceğiniz ülkenin acil durum numaralarını not etmek de faydalı olacaktır."
        margin="10px 0 20px 0"
        fontSize="18px"
        lineHeight="2"
      />
      <Advertisement
        width="900px"
        height="300px"
        margin="80px 0"
        addFontSize="42px"
      />
      <NewsTitle
        text="2. Tatil Sürecinde Daha Fazla Rahatlık İçin Öneriler"
        variant="sub"
      />
      <NewsTitle text="Teknolojiden Yararlanın:" variant="minor" />
      <NewsPara
        text="Seyahatinizi kolaylaştırmak için mobil uygulamaları kullanın. 
        Navigasyon, yerel rehberler ve restoran önerileri için 
        TripAdvisor ve Google Maps gibi uygulamalar kurtarıcıdır. 
        Ayrıca, offline harita indirmeyi unutmayın!"
        margin="10px 0 20px 0"
        fontSize="18px"
        lineHeight="2"
      />
      <NewsTitle text="Hafif ve Pratik Bavullar Hazırlayın:" variant="minor" />
      <NewsPara
        text="Bavul hazırlarken minimalizmi benimseyin. 
        Her gün için ayrı kıyafet yerine farklı kombinasyonlarla kullanılabilecek parçalar seçin. 
        Ayrıca, çok cepli sırt çantaları hem seyahat sırasında hem de günübirlik turlarda 
        işinizi kolaylaştırır."
        margin="10px 0 20px 0"
        fontSize="18px"
        lineHeight="2"
      />
      <NewsImage
        src={img_2}
        alt="news_image"
        width="900px"
        height="300px"
        margin="20px 0"
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
      /> */}
    </div>
  );
};

export default NewsArticle;
