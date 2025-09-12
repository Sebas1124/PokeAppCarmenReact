import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const DetallePage = () => {

    const [loading, setLoading]         = useState(true);
    const [pokemon, setPokemon]         = useState(null);
    const [mainType, setMainType]       = useState(null);
    const [speciesData, setSpeciesData] = useState(null);

    const [evolutionData, setEvolutionData] = useState(null);
    const [textEntries, setTextEntries]     = useState("");
    const [weakness, setWeakness]           = useState([]);

    const [haveError, setHaveError] = useState(false);

    const { id } = useParams();

    const fetchPokemon = async (id) => {
        try {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();

            setPokemon(data);
            setMainType(data.types[0].type.name);

            // cargar las evoluciones
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();

            setSpeciesData(speciesData);

            const entries = speciesData.flavor_text_entries.filter(entry => entry.language.name === 'es')[0];

            setTextEntries(entries.flavor_text);

            const evolutionResponse = await fetch(speciesData.evolution_chain.url);
            const evolutionDataRes  = await evolutionResponse.json();

            setEvolutionData(evolutionDataRes.chain);

            // debilidades del pokemon
            const typeResponse = await fetch(data.types[0].type.url);
            const typeData = await typeResponse.json();

            const weaknesses = typeData.damage_relations.double_damage_from;
            setWeakness(weaknesses);

        } catch (error) {
            console.error("Error buscando detalles del Pokémon:", error);            
            setHaveError(true);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon(id);
    }, [])
    

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Cargando detalles del Pokémon...</p>
            </div>
        )
    }

    if (haveError) {
        return (
            <div className="error-container">
                <p>Error cargando detalles del Pokémon. Por favor, inténtalo de nuevo más tarde.</p>
            </div>
        )
    }
    

  return (
    <div className="pokemon-detail-container">

        <Link to="/" className="back-button">← Volver!</Link>

        <header className={`pokemon-main-info ${mainType}-gradient-bg`}>
            <div className="header-content">
                <div className="pokemon-names">
                    <span className="pokemon-id-detail">{pokemon.id}</span>
                    <h1 className="pokemon-name-detail">{pokemon.name}</h1>
                </div>
                <div className="pokemon-types">
                    {pokemon.types.map(({ type }) => (
                        <div key={type.name} className={`type-badge ${type.name}`}>{type.name}</div>
                    ))}
                </div>
            </div>
            <div className="pokemon-image-wrapper">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.name}
                    className="pokemon-image"
                />
            </div>
            {
                speciesData.is_legendary && (
                    <div className="legendary-badge">
                        <span>Legendario</span>
                    </div>
                ) 
            }

        </header>

        <main className="pokemon-body-info">

            <section className="info-panel">
                <h2>Descripción del Pokémon</h2>
                <p className="pokedex-entry">
                    {textEntries}
                </p>
                <div className="physical-attributes">
                    
                </div>
            </section>

            <section className="info-panel">
                <h2>Estadísticas Base</h2>
                <ul className="stats-list">
                    {
                        pokemon.stats.map(({ stat, base_stat }) => (
                            <li key={stat.name} className="stat-item">
                                <span className="stat-name">{stat.name}</span>
                                <span className="stat-value">{base_stat}</span>
                                <div className="stat-bar">
                                    <div className={`stat-fill ${mainType}`} style={{ width: `${base_stat}%` }}></div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <section className="info-panel">
                <h2>Cadena Evolutiva</h2>
                <div className="evolution-chain">
                    {
                        evolutionData && (
                            <>
                                <div className="evolution-stage">
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionData.species.url.split('/').slice(-2, -1)[0]}.png`}
                                        alt={evolutionData.species.name}
                                        className="evolution-image"
                                    />
                                    <span className="evolution-name">{evolutionData.species.name}</span>
                                </div>
                                {
                                    evolutionData.evolves_to.length > 0 && (
                                        <>
                                            <span className="evolution-arrow">→</span>
                                            <div className="evolution-stage">
                                                <img
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionData.evolves_to[0].species.url.split('/').slice(-2, -1)[0]}.png`}
                                                    alt={evolutionData.evolves_to[0].species.name}
                                                    className="evolution-image"
                                                />
                                                <span className="evolution-name">{evolutionData.evolves_to[0].species.name}</span>
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    evolutionData.evolves_to.length > 0
                                    && evolutionData.evolves_to[0].evolves_to.length > 0
                                    && (
                                        <>
                                            <span className="evolution-arrow">→</span>
                                            <div className="evolution-stage">
                                                <img
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionData.evolves_to[0].evolves_to[0].species.url.split('/').slice(-2, -1)[0]}.png`}
                                                    alt={evolutionData.evolves_to[0].evolves_to[0].species.name}
                                                    className="evolution-image"
                                                />
                                                <span className="evolution-name">{evolutionData.evolves_to[0].evolves_to[0].species.name}</span>
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                    
                </div>
            </section>

            <section className="info-panel">
                <h2>Debilidades</h2>
                <div className="weaknesses-grid">
                    {
                        weakness.map(({ name }) => (
                            <div key={name} className={`type-badge ${name}`}>{name}</div>
                        ))
                    }
                </div>
            </section>

        </main>

    </div>
  )
}
