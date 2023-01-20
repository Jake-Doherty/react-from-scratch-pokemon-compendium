import React from 'react';
import { usePokemon } from '../hooks/usePokemon.js';
import Pokelist from './Pokelist/Pokelist.js';
import Select from './Select/Select.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, loading } = usePokemon();

  // console.log('types', types);

  return (
    <main>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Pokelist pokemon={pokemon} loading={loading} />
    </main>
  );
}
