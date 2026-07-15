function getHeader() {
    return `
        <div class="headerLeft">
            <img class="pokédex" src="./assets/icons/pokédex.svg" alt="Pokémdex">
            <h3>Pokédex with <span class="spanHeader">PokéAPI</span></h3>
        </div>
        <div class="headerRight">
            <p class="searchText">Search <span class="spanHeader">Pokémon</span></p>
            <input type="text" class="pokemonInput" id="pokemonInput" placeholder="Search Pokémon" onclick="searchPokemon()">
            <button class="searchPokemon" onclick="searchPokemon()"><img class="lopu" src="./assets/icons/lopu.svg" alt="Lopu"></button>
        </div>
    `;
}

function getSmallPokemonCards(pokemon, index) {
    const backgroundColor = typeColors[pokemon.types[0].type.name];
    return `
        <li>
            <button data-id="card" class="pokemonCard" style="background-color: ${backgroundColor}" onclick="openDialog(${index})">
                <div class="cardHeader">
                    <span class="spanPokemon">ID${pokemon.id}</span>
                    <span class="spanPokemon">${pokemon.name}</span>
                </div>
                <div class="cardMiddle">
                    <img data-id="cardImage" id="image" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                </div>
                <div class="cardBottom" id="types">
                    <p>${pokemon.types.map(type => `<div class="type ${type.type.name}"> ${type.type.name}</div>`).join("")}</p>
                </div>
            </button>
        </li>
    `;
}

function getDialogPokemonCard(pokemon) {
    console.log(pokemon);
    return `
            <div class="dialogCard">
                <button class="closeBtn" id="closeBtn" onclick="closeDialog()">
                    <img class="close" id="close" src="./assets/icons/close.svg" alt="Close">
                </button>
                <div class="dialogHeader">
                    <h2>${pokemon.name}</h2>
                    <div class="dialogLeft">
                        <p>ID${pokemon.id}</p>
                        <div class="cardBottom" id="types">
                            <p>${pokemon.types.map(type => `<div class="type ${type.type.name}"> ${type.type.name}</div>`).join("")}</p>
                        </div>
                        <p>height ${pokemon.height} m</p>
                        <p>weight ${pokemon.weight} kg</p>
                    </div>
                    <img data-id="cardImage" id="image" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                    <div class="dialogRight">
                        <p>${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}</p>
                        <p>${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}</p>
                        <p>${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}</p>
                        <p>${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}</p>
                    </div>
                </div>
                <div>
                        <h4>Evolution Chain</h4>
                </div>
                <ul data-id="evolution-chain"
                    id="#EvolutionChain${pokemon.id}"
                    class="evolutionChain">
                </ul>
                <nav>
                    <button class="arrowLeft" id="arrowLeft" aria-label="Pfeil nach links" onclick="arrowLeft()">←</button>
                    <button class="arrowRight" id="arrowRight" aria-label="Pfeil nach Rechts" onclick="arrowRight()">→</button>
                </nav>
            </div>
    `;
}

function evolutionChain(pokemon) {
    return `
        <li>
            <h4>${pokemon.name}</h4>
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        </li>
    `;
}

function getLoadMoreButton() {
    return `
        <button class="btnLoadMore" id="loadMore" onclick="loadMoreBtn()">Load more</button>
    `;
}

function getPokemonNotFound(searchInput) {
    return `
        <p data-id="not-found">Sorry, no Pokémon found for "${searchInput}"!😢 </p>
    `;
}

function getMessageMinLetters() {
    return `
        <p data-id="min-letters">Please enter at least 3 letters for search.</p>
    `;
}

function getFooter() {
    return `
        <p class="footerText">Created by Kadir Kahraman</p>
        <img class="pokéball" src="./assets/icons/pokémonBall.svg" alt="Pokémdex">
    `;
}