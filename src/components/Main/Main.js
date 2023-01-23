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
    setSelectedType,
  } = usePokemon();

  // console.log('types', types);

  return (
    <main>
      <Query {...{ handleSearch, query, setQuery }} />
      <Select types={types} handleTypeChange={handleTypeChange} setSelectedType={setSelectedType} />
      <Pokelist pokemon={pokemon} loading={loading} />
    </main>
  );
}
