import { useEffect, useState } from 'react';
import { fetchInitialPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // load pokemon
      const data = await fetchInitialPokemon();
      // set pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);
  return pokemon;
}
