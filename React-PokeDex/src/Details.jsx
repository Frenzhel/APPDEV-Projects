import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Details.css';
import Statbar from './Statbar';
import Evolution from './Evolution';

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loading, setLoading] = useState(true);

    const cache = useRef({});

    const paskal = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            if (cache.current[id]) {
                setDetails(cache.current[id]);
                setEvolutionChain(cache.current[`${id}-evolution`] || []);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
                if (!response.ok)
                    throw new Error('Failed to fetch Pokémon details');
                const data = await response.json();

                const details = {
                    name: data.name,
                    url: data.sprites.front_default,
                    id: data.id,
                    weight: data.weight,
                    height: data.height,
                    types: data.types.map((t) => paskal(t.type.name)),
                    abilities: data.abilities.map((a) => a.ability.name),
                    moves: data.moves.map((m) => m.move.name),
                    stats: data.stats.reduce((acc, stat) => {
                        acc[stat.stat.name] = stat.base_stat;
                        return acc;
                    }, {}),
                };
                setDetails(details);
                cache.current[id] = details;

                const speciesResponse = await fetch(data.species.url);
                if (!speciesResponse.ok)
                    throw new Error('Failed to fetch species data');
                const speciesData = await speciesResponse.json();

                if (speciesData.evolution_chain) {
                    const evolutionResponse = await fetch(
                        speciesData.evolution_chain.url
                    );
                    if (!evolutionResponse.ok)
                        throw new Error('Failed to fetch evolution chain');
                    const evolutionData = await evolutionResponse.json();

                    const evolutions = [];
                    const collectEvolutions = (currentChain) => {
                        if (!currentChain) return;

                        const evolutionName = currentChain.species.name;
                        const idFromUrl = currentChain.species.url.split('/').slice(-2, -1)[0];

                        evolutions.push({
                            name: evolutionName,
                            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idFromUrl}.png`,
                        });

                        currentChain.evolves_to.forEach(collectEvolutions);
                    };

                    collectEvolutions(evolutionData.chain);
                    cache.current[`${id}-evolution`] = evolutions;
                    setEvolutionChain(evolutions);
                } else {
                    setEvolutionChain([]);
                }
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonDetails();
    }, [id]);

    const handleNext = () =>
        navigate(`/details/${parseInt(id) === 1025 ? 1 : parseInt(id) + 1}`);
    const handlePrevious = () =>
        navigate(`/details/${parseInt(id) === 1 ? 1025 : parseInt(id) - 1}`);

    const get3DModelUrl = (pokemonName) =>
        `https://projectpokemon.org/images/normal-sprite/${pokemonName.toLowerCase()}.gif`;

    const statColors = {
        hp: 'green',
        attack: 'red',
        defense: 'blue',
        'special-attack': 'orange',
        'special-defense': 'purple',
        speed: 'yellow',
    };

    if (loading) {
        return (
            <img
                src="https://i.pinimg.com/originals/b5/f2/8a/b5f28ae81ce69ccf4f2328c38e0d3e34.gif"
                id="Loading"
                alt="Loading"
            />
        );
    }

    if (!details) return <div>No Pokémon found!</div>;

    const typeColors = {
        grass: '#4CAF50',
        fire: '#FF5733',
        water: '#007BFF',
        bug: '#A8D700',
        normal: '#BEBEBE',
        electric: '#FFC107',
        ice: '#00BFFF',
        ground: '#D2B48C',
        fighting: '#D32F2F',
        poison: '#8E44AD',
        psychic: '#E91E63',
        rock: '#8B8B00',
        ghost: '#6A5ACD',
        dragon: '#4B0082',
        dark: '#4A4A4A',
        fairy: '#FFB3FF',
    };
    
    
    return (
        <div className="details-container">
            <button className="nav-arrow left-arrow" onClick={handlePrevious}>
                &larr;
            </button>
    
            <div className="details-content">
                <img
                    className="models"
                    src={get3DModelUrl(details.name) || details.url}
                    alt={details.name}
                    onError={(e) => {
                        e.target.src = details.url;
                    }}
                />
                <div className="details-specific">
                    <h1>{paskal(details.name)}</h1>
                    <div className="types-container">
                        {details.types.map((type) => (
                            <div
                                key={type}
                                className="type-badge"
                                style={{ backgroundColor: typeColors[type.toLowerCase()] || 'gray' }}
                            >
                                {paskal(type)}
                            </div>
                        ))}
                    </div>
                    <h1>#{details.id}</h1>
                    <h3>Weight: {details.weight / 10}kg</h3>
                    <h3>Height: {details.height / 10}m</h3>
                    <h3>Abilities: {details.abilities.join(', ')}</h3>
                    <br />
                    <h3>Base Stats:</h3>
                    {Object.entries(details.stats).map(([stat, value]) => (
                        <Statbar
                            key={stat}
                            label={paskal(stat)}
                            value={value}
                            color={statColors[stat] || 'gray'}
                        />
                    ))}
    
                    {evolutionChain.length > 1 && (
                        <Evolution evolutions={evolutionChain} />
                    )}
                </div>
            </div>
    
            <button className="nav-arrow right-arrow" onClick={handleNext}>
                &rarr;
            </button>
        </div>
    );
 }