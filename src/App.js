import React from 'react';
import Budget from './components/Budget';
import Balance from './components/Balance';
import Spent from './components/Spent';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';
import { AppProvider } from './components/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <div className="container mt-4">
        <h1 className='mt-3'>Expense Tracker</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Balance />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
        </div>

        <h3 className='mt-3'>Expenses List</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>

        <h3 className='mt-3'>Add Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
