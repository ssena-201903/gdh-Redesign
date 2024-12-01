import React from "react";

const NewsTitle = ({ text, variant }) => {
    const styles = {
        main: { fontSize: '36px', fontWeight: '700', color: '#181731', margin: "40px 0 40px 0" },
        sub: { fontSize: '24px', fontWeight: '700', color: '#181731', margin: "30px 0 30px 0" },
        minor: { fontSize: '20px', fontWeight: '500', color: '#181731', margin: "30px 0 10px 0" },
      };
    
      return <h2 style={styles[variant]}>{text}</h2>;
  
};

export default NewsTitle;
