import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [selectedCardId, setSelectedCardId] = useState(
      () => localStorage.getItem('selectedCardId') || null
    );

    useEffect(() => {
      if (selectedCardId) {
        localStorage.setItem('selectedCardId', selectedCardId);
      }
    }, [selectedCardId]);
    
  return (
    <CardContext.Provider value={{ selectedCardId, setSelectedCardId }}>
        {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);


