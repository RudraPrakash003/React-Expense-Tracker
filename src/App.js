import React, { useState } from 'react';
import Budget from './components/Budget';
import Balance from './components/Balance';
import Spent from './components/Spent';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [ expenses, setExpenses ] = useState([]);
  const [value, setValue] = useState(0);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  const deleteExpense = (name) => {
    setExpenses(expenses.filter(expense => expense.name !== name));
  };


  return (
    <div className="container mt-4">
        <h1 className='mt-3'>Expense Tracker</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget value={value} setValue={setValue} />
          </div>
          <div className='col-sm'>
            <Balance />
          </div>
          <div className='col-sm'>
            <Spent expenses={expenses}/>
          </div>
        </div>

        <h3 className='mt-3'>Expenses List</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList expenses={expenses} onDelete={deleteExpense}/>
          </div>
        </div>

        <h3 className='mt-3'>Add Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseForm addExpense={addExpense} budget={value} />
          </div>
        </div>
    </div>
  );
};

export default App;
