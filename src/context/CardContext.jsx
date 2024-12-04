import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const CardContext = createContext();

// export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
    const [selectedCardId, setSelectedCardId] = useState(null);
    
  return (
    <CardContext.Provider value={{ selectedCardId, setSelectedCardId }}>
        {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);


