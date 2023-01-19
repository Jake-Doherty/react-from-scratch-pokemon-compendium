import React from 'react';
import { usePokemon } from '../hooks/pokemon.js';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <div>
      {pokemon.map((monster) => (
        <p key={monster.id}>{monster.pokemon}</p>
      ))}
    </div>
  );
}
