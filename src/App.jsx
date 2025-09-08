import { PokemonCard } from "./components/PokemonCard/PokemonCard"


export const App = () => {

  const pokemons = [
    {
      name: "bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      favorite: true
    },
    {
      name: "ivysaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    },
    {
      name: "venusaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    },
    {
      name: "charmander",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    }
  ]

  return (
    <div>
      {
        pokemons.map((pokemon) => (
          <PokemonCard
            img={pokemon.img}
            name={pokemon.name}
            pokemon={pokemon}
          />
        ))
      }
      
    </div>
  )
}
