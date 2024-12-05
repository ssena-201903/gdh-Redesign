import React, { createContext, useContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [contentLength, setContentLength] = useState(0);

    return (
        <ContentContext.Provider value={{ contentLength, setContentLength }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => useContext(ContentContext);