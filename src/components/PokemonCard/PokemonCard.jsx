import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

export const PokemonCard = ({ img, name, pokemon }) => {
  return (
    <div className={`pokemon-card fire-type`}>
        <Link to={`/detalle/${pokemon.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-inner">
                <div className="card-front">
                    <span className="pokemon-id">#{pokemon.id}</span>
                    <LazyLoadImage
                        className="pokemon-image"
                        alt={pokemon.name}
                        src={img}
                    />
                    <h2 className="pokemon-name">{name}</h2>
                    <div className="pokemon-type-container">
                        {pokemon.types.map(({ type }) => (
                            <div key={type.name} className={`type-badge ${type.name}`}>{type.name}</div>
                        ))}
                    </div>
                </div>
                <div className="card-back">
                    <h3>Habilidades</h3>
                    <ul>
                        {pokemon.abilities.map(({ ability }) => <li key={ability.name}>{ability.name}</li>)}
                    </ul>
                </div>
            </div>
        </Link>
    </div>
  )
}
