import React, { useContext } from 'react';
import ExpenseItem from './expenseItem';
import { AppContext } from './AppContext';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} name={expense.name} amount={expense.amount} onDelete={deleteExpense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
