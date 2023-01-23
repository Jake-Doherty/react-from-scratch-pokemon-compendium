import React from 'react';
import { usePokemon } from '../../hooks/usePokemon.js';
import Pokelist from '../Pokelist/Pokelist.js';
import Select from '../Select/Select.js';
import Query from '../Query/Query.js';
import './Main.css';

export default function Main() {
  const {
    pokemon,
    types,
    handleTypeChange,
    loading,
    handleSearch,
    query,
    setQuery,
    selectedType,
    setSelectedType,
  } = usePokemon();

  return (
    <main>
      <div className="search-container">
        <Query {...{ handleSearch, query, setQuery }} />
        <Select
          types={types}
          handleTypeChange={handleTypeChange}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
      <Pokelist pokemon={pokemon} loading={loading} />
    </main>
  );
}
