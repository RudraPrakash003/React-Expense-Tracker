import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { AppContext } from './AppContext';

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(budget);

    const handleEditClick = () => {
        setEditMode(true);
        setInputValue(budget);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        setBudget(inputValue);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="alert alert-info d-flex align-items-center">
            {editMode ? (
                <>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button className="btn btn-sm btn-primary mx-2" onClick={handleSaveClick}>Save</button>
                </>
            ) : (
                <>
                    <span>Budget: Rs. {budget}</span>
                    <FaEdit className="btn-info mx-2" role="button" onClick={handleEditClick} size='1rem' />
                </>
            )}
        </div>
    );
};

export default Budget;
