import React, { useState } from 'react';
import Budget from './components/Budget';
import Balance from './components/Balance';
import Spent from './components/Spent';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';
import { AppProvider } from './components/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [modal, setModal] = useState({ show: false, message: '' });

  const showModal = (message) => {
    setModal({ show: true, message });
  };

  const closeModal = () => {
    setModal({ show: false, message: '' });
  };

  return (
    <AppProvider>
      <div className="container mt-4">
        <h1 className="mt-3">Expense Tracker</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Balance />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>

        <h3 className="mt-3">Expenses List</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-3">Add Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseForm showModal={showModal} />
          </div>
        </div>

        {modal.show && (
          <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Notification</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <p>{modal.message}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppProvider>
  );
};

export default App;
