import React from 'react';

export default function Select({ handleTypeChange, types, setSelectedType }) {
  return (
    <select
      onChange={(e) => {
        setSelectedType(e.target.value);
        handleTypeChange();
      }}
    >
      {types.map(({ type }) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
