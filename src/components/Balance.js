import React from 'react';

const Balance = ({ budget, totalSpent }) => {
  const balanceLeft = 0;
  return (
    <div className='alert alert-success'>
      <span>Balance left: Rs. {balanceLeft}</span>
    </div>
  );
};

export default Balance;
