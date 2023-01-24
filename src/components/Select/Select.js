import React from 'react';
import './Select.css';

export default function Select({ handleTypeChange, types, selectedType }) {
  return (
    <select value={selectedType} onChange={handleTypeChange}>
      <option value="all">All</option>
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
