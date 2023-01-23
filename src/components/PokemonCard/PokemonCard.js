import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({
  pokemon,
  url_image,
  pokedex,
  hp,
  attack,
  defense,
  base_experience,
}) {
  return (
    <div className="poke-container">
      <h2 className="poke-name">{pokemon}</h2>
      <a className="poke-anchor" href={pokedex} target="_blank" rel="noreferrer">
        <img className="image" src={url_image} />
      </a>
      <div className="stats">
        <h4 className="hp">HP: {hp}</h4>
        <h5 className="exp">Base Experience: {base_experience}</h5>
        <h5 className="atk">Attack: {attack}</h5>
        <h5 className="def">Defense: {defense}</h5>
      </div>
    </div>
  );
}
