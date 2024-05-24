import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from './AppContext';

const ExpenseForm = ({ showModal }) => {
  const { budget, addExpense, totalspent } = useContext(AppContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget === 0) {
      showModal("Please set a budget before adding expenses.");
      return;
    }
    if (!name.trim() || !amount.trim()) return;
    const newExpense = {
      id: uuidv4(),
      name: name,
      amount: parseInt(amount)
    };
    if (newExpense.amount>0){

      if (budget - totalspent >= newExpense.amount) {
        addExpense(newExpense);
        setName('');
        setAmount('');
      } else {
        showModal("You don't have enough balance");
      }
    };
    }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col-md-4 mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="cost">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2 mt-4">
          <button type="submit" className="btn btn-primary btn-block">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
