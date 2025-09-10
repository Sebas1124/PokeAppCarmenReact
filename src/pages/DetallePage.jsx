import { useParams } from "react-router-dom";

export const DetallePage = () => {

    const { id } = useParams();

  return (
    <div class="pokemon-detail-container">

        <a href="index.html" class="back-button">← Volver</a>

        <header class="pokemon-main-info fire-gradient-bg">
            <div class="header-content">
                <div class="pokemon-names">
                    <span class="pokemon-id-detail"> #006 </span>
                    <h1 class="pokemon-name-detail">Charizard</h1>
                </div>
                <div class="pokemon-types">
                    <span class="type-badge fire">Fuego</span>
                    <span class="type-badge flying">Volador</span>
                </div>
            </div>
            <div class="pokemon-image-wrapper">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                    alt="Charizard"
                    class="pokemon-image"
                />
            </div>

        </header>

        <main class="pokemon-body-info">

            <section class="info-panel">
                <h2>Descripción del Pokémon</h2>
                <p class="pokedex-entry">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae at dolorum earum, quisquam optio nemo ducimus velit cum ipsum!
                </p>
                <div class="physical-attributes">
                    
                </div>
            </section>

            <section class="info-panel">
                <h2>Estadísticas Base</h2>
                <ul class="stats-list">
                    
                </ul>
            </section>

            <section class="info-panel">
                <h2>Cadena Evolutiva</h2>
                <div class="evolution-chain">
                    <div class="evolution-stage">
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                            alt="Charmander"
                            class="evolution-image"
                        />
                        <span>Charmander</span>
                    </div>
                    <div class="evolution-arrow">&rarr;</div>
                    <div class="evolution-stage">
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
                            alt="Charmeleon"
                            class="evolution-image"
                        />
                        <span>Charmeleon</span>
                    </div>
                    <div class="evolution-arrow">&rarr;</div>
                    <div class="evolution-stage">
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                            alt="Charizard"
                            class="evolution-image"
                        />
                        <span>Charizard</span>
                    </div>
                </div>
            </section>

            <section class="info-panel">
                <h2>Debilidades</h2>
                <div class="weaknesses-grid">
                    <div class="type-badge water">Agua</div>
                    <div class="type-badge electric">Eléctrico</div>
                    <div class="type-badge ground">Tierra</div>
                </div>
            </section>

        </main>

    </div>
  )
}
