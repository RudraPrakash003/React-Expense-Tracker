import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Budget = ({ value, setValue }) => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState(0);

    const handleEditClick = () => {
        setEditMode(true);
        setInputValue(value);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        setValue(inputValue);
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
                    <span>Budget: Rs. {value}</span>
                    <FaEdit className="btn-info mx-2" role="button" onClick={handleEditClick} size='1rem' />
                </>
            )}
        </div>
    );
};

export default Budget;
