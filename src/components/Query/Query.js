import React from 'react';

export default function Query({ query, setQuery, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}
