import React, { createContext, useContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev);
    };

    return (
        <NavbarContext.Provider value={{isNavbarOpen, toggleNavbar}}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => useContext(NavbarContext);