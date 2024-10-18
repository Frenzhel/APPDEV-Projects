import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css'
export default function Navbar({ searchTerm, setSearchTerm, sortOption, setSortOption, sortOrder, setSortOrder, selectedType, setSelectedType }) {
    const handleSortOrderToggle = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    };
    return (
        <>
        <nav>
            <h1><Link to="/">PokeDex</Link></h1>
            <input 
                type="text" 
                placeholder="Search Pokémon..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search Pokémon"
                style={{
                    padding: '5px',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '2em',
                    width: '30%',
                    marginTop: '1em',
                    backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/189/189012.png)', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 10px center',
                    backgroundSize: '20px',
                }}
            />
                <div className="sorting">
                <select className='sort'
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                        <option value="height">Height</option>
                    </select>
                    <button className='sort' onClick={handleSortOrderToggle}>
                        {sortOrder === 'asc' ? '⇅' : '⇅'} 
                    </button>
                    <select className='sort'
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        aria-label="Select Pokémon Type"
                    >
                        <option value="">All Types</option>
                        <option value="bug">Bug</option>
                        <option value="dragon">Dragon</option>
                        <option value="fairy">Fairy</option>
                        <option value="fire">Fire</option>
                        <option value="ghost">Ghost</option>
                        <option value="ground">Ground</option>
                        <option value="normal">Normal</option>
                        <option value="psychic">Psychic</option>
                        <option value="steel">Steel</option>
                        <option value="dark">Dark</option>
                        <option value="electric">Electric</option>
                        <option value="fighting">Fighting</option>
                        <option value="flying">Flying</option>
                        <option value="grass">Grass</option>
                        <option value="ice">Ice</option>
                        <option value="poison">Poison</option>
                        <option value="water">Water</option>
                        <option value="rock">Rock</option>
                    </select>
                </div>
            <ul>
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/kanto" activeClassName="active">Kanto</NavLink></li>
                <li><NavLink to="/johto" activeClassName="active">Johto</NavLink></li>
                <li><NavLink to="/hoenn" activeClassName="active">Hoenn</NavLink></li>
                <li><NavLink to="/sinnoh" activeClassName="active">Sinnoh</NavLink></li>
                <li><NavLink to="/unova" activeClassName="active">Unova</NavLink></li>
                <li><NavLink to="/kalos" activeClassName="active">Kalos</NavLink></li>
                <li><NavLink to="/alola" activeClassName="active">Alola</NavLink></li>
                <li><NavLink to="/galar" activeClassName="active">Galar</NavLink></li>
                <li><NavLink to="/hisui" activeClassName="active">Hisui</NavLink></li>
                <li><NavLink to="/paldea" activeClassName="active">Paldea</NavLink></li>
            </ul>
        </nav>
        </>    
    );
}

Navbar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
    sortOption: PropTypes.string.isRequired,
    setSortOption: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    setSortOrder: PropTypes.func.isRequired,
    selectedType: PropTypes.string.isRequired,
    setSelectedType: PropTypes.func.isRequired,
};
