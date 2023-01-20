import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchPokemonType } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // load pokemon
      const data = await fetchInitialPokemon();
      // set pokemon in state
      setPokemon(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // load types
      const data = await fetchPokemonType();
      // set types in state
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchPokemon(type);
    setPokemon(data);
  };

  return { pokemon, types, handleTypeChange };
}
