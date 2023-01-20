import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchPokemonType } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // load pokemon
      const data = await fetchInitialPokemon();
      // set pokemon in state
      setPokemon(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
    setLoading(true);
    const data = await fetchPokemon(type);
    setPokemon(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return { pokemon, types, handleTypeChange, loading };
}
