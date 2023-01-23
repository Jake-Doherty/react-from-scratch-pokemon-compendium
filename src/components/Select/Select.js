import React from 'react';
import './Select.css';

export default function Select({ handleTypeChange, types, setSelectedType }) {
  return (
    <select
      onChange={(e) => {
        setSelectedType(e.target.value);
        handleTypeChange();
      }}
    >
      <option value="all">All</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
