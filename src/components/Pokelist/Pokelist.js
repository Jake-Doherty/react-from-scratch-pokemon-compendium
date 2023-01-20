import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import loadingGIF from '../../pokeLoading.gif';

export default function Pokelist({ pokemon, loading }) {
  if (loading) return <img src={loadingGIF} alt="loading" />;
  if (!loading)
    return (
      <div>
        {pokemon.map((monster) => (
          <PokemonCard key={monster._id} {...monster} />
        ))}
      </div>
    );
}
