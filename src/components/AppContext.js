import React, { createContext, useState, useContext} from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ budget, setBudget ] = useState(0);
    const [ spent, setSpent ] = useState(0);

    return (
        <AppContext.Provider value = {{ budget, setBudget, spent, setSpent }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);