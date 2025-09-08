
export const PokemonCard = ({ img, name, pokemon }) => {

    const handleFavorite = (pokemon) => {
        console.log(`agregando pokemon ${pokemon.name} a favoritos...`)
    }

  return (
    <div className="pokemon-card" style={{ 
        backgroundColor: pokemon.favorite ? 'blue' : "black"
    }}>
        <img 
            className="pokemon-image" 
            src={img}
            alt="pokemon"
        />
        <h2 className="pokemon-name">{name}</h2>
        <button onClick={() => handleFavorite(pokemon)}>❤️</button>
    </div>
  )
}
