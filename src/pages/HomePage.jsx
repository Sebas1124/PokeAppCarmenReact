import { useEffect, useState } from "react"
import { PokemonCard } from "../components/PokemonCard/PokemonCard"


export const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading]   = useState(true);

  const fetchPokemons = async () => {

    try {

      const response  = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data      = await response.json();

      const pokeData = await Promise.all(
        data.results.map(async (pokemon, index) => {

          const fullData     = await fetch(pokemon.url);
          const fullDataJson = await fullData.json();

          return {
            id: index + 1,
            name: pokemon.name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
            types: fullDataJson.types,
            abilities: fullDataJson.abilities,
          }
        }
      ));

      setPokemons(pokeData);
      
    } catch (error) {
      console.error("Error buscando pokemons:", error);
    } finally{
      setLoading(false);
    }

  }

  // fetchPokemons(); // re renders infinitos.
  useEffect(() => {
    fetchPokemons();
  }, []) // -> dependecias vacias, se ejecuta una sola vez al montar el componente
  

  /* SPA -> Single Page Application */
  /* NPM -> Node Package Manager */

  if (loading){
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }

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
              key={pokemon.id} // -> significa que este elemento en el dom es unico
              img={pokemon.img}
              name={pokemon.name}
              pokemon={pokemon}
              mainType={pokemon.types[0].type.name}
            />
          ))
        }
        
      </main>
    </div>
  )
}
