// import { type } from '@testing-library/user-event/dist/type/index.js';
import { useEffect, useState } from 'react';
import {
  fetchInitialPokemon,
  fetchPokemon,
  fetchPokemonType,
  fetchSearchedPokemon,
} from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');
  const [query, setQuery] = useState('');

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

  const handleTypeChange = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType);
    setPokemon(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetchSearchedPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };

  return {
    pokemon,
    types,
    handleTypeChange,
    loading,
    setSelectedType,
    handleSearch,
    setQuery,
  };
}
