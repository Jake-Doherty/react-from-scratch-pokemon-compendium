import React from 'react';
import './Pokelist.css';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import loadingGIF from '../../pokeLoading.gif';

export default function Pokelist({ pokemon, loading }) {
  if (loading) return <img src={loadingGIF} alt="loading" />;
  if (!loading)
    return (
      <div className="monster-list">
        {pokemon.map((monster) => (
          <PokemonCard key={monster._id} {...monster} />
        ))}
      </div>
    );
}
