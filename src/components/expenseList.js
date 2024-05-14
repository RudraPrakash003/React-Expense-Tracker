import React from 'react';
import ExpenseItem from './expenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} name={expense.name} amount={expense.amount} onDelete={onDelete}/>
      ))}
    </ul>
  );
};

export default ExpenseList;
