import React from 'react';
import { Link } from 'react-router-dom';
export default function Galar({ pokemon, loading, searchTerm }) {

    function paskal(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    if (loading) {
        return <img src="https://i.pinimg.com/originals/b5/f2/8a/b5f28ae81ce69ccf4f2328c38e0d3e34.gif" id="Loading"/>
    }
    const filteredPokemon = pokemon.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const get3DModelUrl = (pokemonName) => {
        return `https://projectpokemon.org/images/normal-sprite/${pokemonName.toLowerCase()}.gif`;
    }  
    return (
        <div className="con-content">
            <h1 id="label">Galar Region</h1>
            <div id="container">
                {filteredPokemon.length > 0 ? (
                    filteredPokemon.map((poke) => {
                        const newmodel = get3DModelUrl(poke.name)
                        return(
                            <Link 
                                to={`/details/${poke.id}`} 
                                key={poke.id} 
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="PokemonCard">
                                    <h2>#{poke.id}</h2>
                                    <br />
                                    <img 
                                        src={newmodel ? newmodel : poke.url} 
                                        alt={poke.name} 
                                        onError={(e) => { e.target.src = poke.url; }}
                                    />
                                    <br />
                                    <div className="card-name">
                                        <h1>{paskal(poke.name)}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <p>No Pokémon found matching your search.</p>
                )}
            </div>
        </div>
    );
}