// src/components/Pokedex.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const [selectedRegion, setSelectedRegion] = useState('Kanto');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const regionRanges = {
    Kanto: [1, 151],
    Johto: [152, 251],
    Hoenn: [252, 386],
    Sinnoh: [387, 493],
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const [start, end] = regionRanges[selectedRegion];

      try {
        const promises = Array.from({ length: end - start + 1 }, (_, i) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${start + i}`)
        );

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
      <nav className="navbar">
        <h1>PokeDex</h1>
        <div className="region-buttons">
          {Object.keys(regionRanges).map(region => (
            <button 
              key={region} 
              className={selectedRegion === region ? 'active' : ''} 
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </nav>
      {loading ? (
        <img id='loading' src="https://media.giphy.com/media/65oO2hg3xAX04/giphy.gif" alt="" />
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
