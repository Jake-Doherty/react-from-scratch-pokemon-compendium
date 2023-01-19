import React from 'react';
import { usePokemon } from '../hooks/usePokemon.js';
import Select from './Select/Select.js';

export default function Main() {
  const pokemon = usePokemon();
  console.log('pokemon', pokemon);
  return (
    <div>
      <Select />
      {pokemon.map((monster) => (
        <p key={monster.id}>{monster.pokemon}</p>
      ))}
    </div>
  );
}
