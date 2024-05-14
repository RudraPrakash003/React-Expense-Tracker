import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Balance = () => {
  const { budget, totalspent} = useContext(AppContext);
  const balanceLeft = budget - totalspent;
  return (
    <div className='alert alert-success'>
      <span>Balance left: Rs. {balanceLeft}</span>
    </div>
  );
};

export default Balance;
