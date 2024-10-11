import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id');
  const [selectedType, setSelectedType] = useState('All');
  const [types, setTypes] = useState([]);

  const regionRanges = {
    All: [1, 1025],
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

  // Fetch Pokémon types
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const typesList = response.data.results.map(type => type.name);
        setTypes(['All', ...typesList]); // Add 'All' option
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };

    fetchTypes();
  }, []);

  // Filter the Pokémon based on the search term and selected type
  const filteredPokemon = pokemon.filter(poke => {
    const matchesSearchTerm = 
      poke.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      poke.id.toString() === searchTerm; // Check if ID matches
    const matchesType = selectedType === 'All' || poke.types.some(typeInfo => typeInfo.type.name === selectedType);
    return matchesSearchTerm && matchesType;
  });

  // Sort the Pokémon based on the selected sort option
  const sortedPokemon = filteredPokemon.sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.id - b.id;
    }
  });

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
        <div className="sorting-container">
          <input
            type="text"
            placeholder="Search...."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select onChange={e => setSortOption(e.target.value)} value={sortOption}>
            <option value="name">Sort by Name</option>
            <option value="id">Sort by ID</option>
          </select>
          <select onChange={e => setSelectedType(e.target.value)} value={selectedType}>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </nav>
      {loading ? (
        <div className="loading-container">
          <img id='loading' src="https://media.giphy.com/media/65oO2hg3xAX04/giphy.gif" alt="Loading..." />
        </div>
      ) : (
        <div className="pokemon-grid">
          {sortedPokemon.map(poke => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
