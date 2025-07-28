import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarStyle, setSidebarStyle] = useState({
        width: '256px'
    })

    const toggleSidebar = () => {
        const newState = !sidebarOpen;
        setSidebarOpen(newState);

        if (newState) {
            setSidebarStyle({
                width: '256px',
                transition: 'width 0.3s ease',
                overflow: 'hidden',
            });
        } else {
            setSidebarStyle({
                width: '60px',
                transition: 'width 0.3s ease',
                overflow: 'hidden',
            });
        }
    };
    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, toggleSidebar, sidebarStyle }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useToggleSidebarContext = () => useContext(SidebarContext);
