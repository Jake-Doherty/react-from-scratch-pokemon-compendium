import React from 'react';

export default function PokemonCard({ pokemon, url_image, pokedex, hp }) {
  // console.log(url_image, pokedex);
  return (
    <div>
      <h2>{pokemon}</h2>
      <a href={pokedex}>
        <img src={url_image} />
      </a>
      <h4>HP: {hp}</h4>
    </div>
  );
}
