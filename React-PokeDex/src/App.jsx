import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Kanto from './Kanto';
import Johto from './Johto';
import Hoenn from './Hoenn';
import Home from './Home';
import Sinnoh from './Sinnoh';
import Unova from './Unova';
import Details from './Details';
import Kalos from './Kalos';
import Alola from './Alola';
import Galar from './Galar';
import Paldea from './Paldea';
import Hisui from './Hisui';
import './App.css';

export default function App() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('id');
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        const fetchAllPokemon = async () => {
            setLoading(true);
            try {
                const maxPokemon = 1025; // Total Pokémon
                const fetches = [];

                for (let i = 1; i <= maxPokemon; i++) {
                    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                    fetches.push(fetch(url).then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok for ' + url);
                        }
                        return response.json();
                    }));
                }

                const pokemonData = await Promise.all(fetches);
                const pokemons = pokemonData.map((data) => ({
                    name: data.name,
                    url: data.sprites.front_default,
                    id: data.id,
                    weight: data.weight,
                    height: data.height,
                    types: data.types.map((t) => t.type.name),
                    moves: data.moves.map((m) => m.move.name),
                    abilities: data.abilities.map((a) => a.ability.name),
                    stats: data.stats.reduce((acc, stat) => {
                        acc[stat.stat.name] = stat.base_stat;
                        return acc;
                    }, {}),
                }));
                setPokemon(pokemons);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPokemon();
    }, []);

    // Sort Pokémon based on selected option and order
    const sortPokemon = (pokemonList) => {
        return [...pokemonList].sort((a, b) => {
            let comparison = 0;
            switch (sortOption) {
                case 'id':
                    comparison = a.id - b.id;
                    break;
                case 'weight':
                    comparison = a.weight - b.weight;
                    break;
                case 'height':
                    comparison = a.height - b.height;
                    break;
                default: // 'name'
                    comparison = a.name.localeCompare(b.name);
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    };

    // Filter Pokémon based on search term and selected type
    const filteredPokemon = sortPokemon(pokemon.filter((poke) => {
        const matchesSearchTerm = poke.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType ? poke.types.includes(selectedType) : true;
        return matchesSearchTerm && matchesType;
    }));

    // Function to filter Pokémon by region
    const filterByRegion = (regionStart, regionEnd) => {
        return filteredPokemon.filter(poke => poke.id >= regionStart && poke.id <= regionEnd);
    };

    return (
        <Router>
            <Navbar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
                sortOrder={sortOrder} 
                setSortOrder={setSortOrder}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<Home pokemon={filteredPokemon} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/kanto" element={<Kanto pokemon={filterByRegion(1, 151)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/johto" element={<Johto pokemon={filterByRegion(152, 251)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/hoenn" element={<Hoenn pokemon={filterByRegion(252, 386)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/sinnoh" element={<Sinnoh pokemon={filterByRegion(387, 493)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/unova" element={<Unova pokemon={filterByRegion(494, 649)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/kalos" element={<Kalos pokemon={filterByRegion(650, 721)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/alola" element={<Alola pokemon={filterByRegion(722, 809)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/galar" element={<Galar pokemon={filterByRegion(810, 898)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/hisui" element={<Hisui pokemon={filterByRegion(899, 905)} loading={loading} searchTerm={searchTerm} />} />
                <Route path="/paldea" element={<Paldea pokemon={filterByRegion(906, 1025)} loading={loading} searchTerm={searchTerm} />} />
            </Routes>
            <br/>
            <Footer />
        </Router>
    );
}
