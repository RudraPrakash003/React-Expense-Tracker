import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [totalspent, setTotalSpent] = useState(0);

    useEffect(() => {
        const total = expenses.reduce((total, expense) => total + expense.amount, 0);
        setTotalSpent(total);
    }, [expenses]);

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (name) => {
        setExpenses(expenses.filter(expense => expense.name !== name));
    };

    return (
        <AppContext.Provider value={{ budget, setBudget, expenses, addExpense, deleteExpense, totalspent }}>
            {children}
        </AppContext.Provider>
    );
};
