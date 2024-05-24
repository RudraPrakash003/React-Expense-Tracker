import React from 'react';
import { MdDelete } from "react-icons/md";

const ExpenseItem = ({ name, amount, onDelete }) => {
    const handleDelete = () => {
        onDelete(name);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <div className="d-flex align-items-center">
                <span className="bg-primary text-white pr-4 px-3 py-1 rounded">
                    Rs.{amount}
                </span>
                <MdDelete 
                    onClick={handleDelete} 
                    role="button" 
                    size='1.5rem' 
                    style={{ marginLeft: '10px' }} />
            </div>
        </li>
    );
};

export default ExpenseItem;
