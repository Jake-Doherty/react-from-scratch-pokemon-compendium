export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/');

  const data = await resp.json();

  return data.results;
}

export async function fetchPokemonType() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

export async function fetchPokemon(type) {
  if (type === 'all') return fetchInitialPokemon();
  const resp = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?type=${type}`);
  const data = await resp.json();
  return data.results;
}

export async function fetchSearchedPokemon(type, pokemon) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  params.set('pokemon', pokemon);
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
