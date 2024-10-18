import React from 'react';

const Evolution = ({ evolutions }) => {
    // Check if the evolution chain is empty
    if (!evolutions || evolutions.length === 0) return null;

    const paskal = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

    const get3DModelUrl = (pokemonName) =>
        `https://projectpokemon.org/images/normal-sprite/${pokemonName.toLowerCase()}.gif`;

    return (
        <div className="evolution-container">
            <h2>Evolution Chain</h2>
            <div className="evolution-list">
                {evolutions.map((evolution, index) => {
                    const newModel = get3DModelUrl(evolution.name);
                    return (
                        <div key={index} className="evolution-item">
                            <div className="Card">
                                <img
                                    src={newModel? newModel:evolution.sprite}
                                    alt={evolution.name}
                                    onError={(e) =>
                                        (e.target.src = evolution.sprite)
                                    }
                                />
                                <h4>{paskal(evolution.name)}</h4>
                            </div>
                            {index < evolutions.length - 1 && (
                                <span className="evolution-arrow">
                                    &rarr;
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Evolution;
