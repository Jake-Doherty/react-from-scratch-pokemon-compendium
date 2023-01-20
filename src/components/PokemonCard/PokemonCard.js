import React from 'react';

export default function PokemonCard({
  pokemon,
  url_image,
  pokedex,
  hp,
  attack,
  defense,
  base_experience,
}) {
  // console.log(url_image, pokedex);
  return (
    <div>
      <h2>{pokemon}</h2>
      <a href={pokedex}>
        <img src={url_image} />
      </a>
      <h4>HP: {hp}</h4>
      <h5>Base Experience: {base_experience}</h5>
      <h5>Attack: {attack}</h5>
      <h5>Defense: {defense}</h5>
    </div>
  );
}
