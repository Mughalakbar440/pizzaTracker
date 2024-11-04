import React from "react";

const SelectInput = ({ id, className, options, value, onChange }) => {
    return (
        <select
            id={id}
            className={`block w-full rounded-md shadow-sm bg-gray-800 text-gray-300 border-gray-700 focus:ring focus:ring-indigo-400 focus:border-indigo-400 ${className}`}
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;
