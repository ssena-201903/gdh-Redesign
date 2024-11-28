import React from "react";

const NewsTitle = ({ text, variant }) => {
    const styles = {
        main: { fontSize: '32px', fontWeight: 'bold', color: '#000' },
        sub: { fontSize: '24px', fontWeight: '600', color: '#333', margin: "20px 0" },
        minor: { fontSize: '20px', fontWeight: 'normal', color: '#666' },
      };
    
      return <h2 style={styles[variant]}>{text}</h2>;
  
};

export default NewsTitle;
