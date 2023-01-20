import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.js';

export default function Pokelist({ pokemon }) {
  return (
    <div>
      {pokemon.map((monster) => (
        <PokemonCard key={monster._id} {...monster} />
      ))}
    </div>
  );
}
