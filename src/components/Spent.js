import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Spent = () => {
  const { totalspent } = useContext(AppContext);

  return (
    <div className='alert alert-dark'>
      <span>Spent: Rs. {totalspent}</span>
    </div>
  );
};

export default Spent;
