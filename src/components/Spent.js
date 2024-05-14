import React from 'react'

const Spent = ({ expenses }) => {
  const totalSpent = expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);

  return (
    <div className='alert alert-dark'>
      <span>Spent: Rs. {totalSpent}</span>
    </div>
  );
};

export default Spent;