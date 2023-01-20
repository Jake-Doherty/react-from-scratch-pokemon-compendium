import React from 'react';
import { usePokemon } from '../hooks/usePokemon.js';
import PokemonCard from './PokemonCard/PokemonCard.js';
import Select from './Select/Select.js';

export default function Main() {
  const { pokemon, types } = usePokemon();

  // console.log('types', types);

  return (
    <main>
      <Select types={types} />
      {pokemon.map((monster) => (
        <PokemonCard key={monster.id} {...monster} />
      ))}
    </main>
  );
}
