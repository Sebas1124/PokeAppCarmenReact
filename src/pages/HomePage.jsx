import { PokemonCard } from "../components/PokemonCard/PokemonCard"


export const HomePage = () => {
  const pokemons = [
    {
      id: 1,
      name: "bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      favorite: true
    },
    {
      id: 2,
      name: "ivysaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
      id: 3,
      name: "venusaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    },
    {
      id: 4,
      name: "charmander",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 5,
      name: "charmeleon",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      id: 6,
      name: "charizard",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    },
  ]

  /* SPA -> Single Page Application */
  /* NPM -> Node Package Manager */

  return (
    <div>

      <header className="logo-container">
  
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" 
          alt="Logo PokeApp"
          className="logo" 
        />
        <h1>PokeApp</h1>

        <input
          type="text"
          className="search-bar"
          placeholder="Buscar pokémon..."
        />

      </header>

      <main className="pokedex-grid">
        {
          pokemons.map((pokemon) => (
            <PokemonCard
              img={pokemon.img}
              name={pokemon.name}
              pokemon={pokemon}
            />
          ))
        }
        
      </main>
    </div>
  )
}
