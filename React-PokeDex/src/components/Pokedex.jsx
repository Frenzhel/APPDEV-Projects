// src/components/Pokedex.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const [selectedRegion, setSelectedRegion] = useState('Kanto');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const regionRanges = {
    Kanto: { start: 1, end: 151 },
    Johto: { start: 152, end: 251 },
    Hoenn: { start: 252, end: 386 },
    Sinnoh: { start: 387, end: 493 },
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const { start, end } = regionRanges[selectedRegion];
      const promises = [];
      
      for (let i = start; i <= end; i++) {
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }

      try {
        const results = await Promise.all(promises);
        setPokemon(results.map(res => res.data));
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [selectedRegion]);

  return (
    <div>
      <h1>PokeDex</h1>
      <select onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
        {Object.keys(regionRanges).map(region => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-grid">
          {pokemon.map(poke => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
