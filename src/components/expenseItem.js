import React from 'react';
import { MdDelete } from "react-icons/md";

const ExpenseItem = ({ name, amount, onDelete }) => {
    const handleDelete = () => {
        onDelete(name);
      };
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div>
                <span  className="bg-primary text-white pr-4 px-3 py-1 rounded">
                    Rs.{amount}
                </span>
                <MdDelete onClick={handleDelete} role="button" size='1.5rem'></MdDelete>

            </div>
        </li>
    );
};

export default ExpenseItem;
