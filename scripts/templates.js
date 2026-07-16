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
                    <span class="spanPokemon">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
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
    const backgroundColor = typeColors[pokemon.types[0].type.name];
    return `
            <div class="dialogCard">
                <button class="closeBtn" id="closeBtn" onclick="closeDialog()">
                    <img class="close" id="close" src="./assets/icons/close.svg" alt="Close">
                </button>
                <h2 style="color: ${backgroundColor}" id="idName">${pokemon.name.toUpperCase()}</h2>
                <div class="dialogHeader">
                    <div class="dialogLeft">
                        <p class="size">ID${pokemon.id}</p>
                        <div class="typesContainer ${pokemon.types.length === 1 ? 'single' : 'multiple'}">
                            ${pokemon.types
                                .map(type => `<div class="types ${type.type.name}">${type.type.name}</div>`)
                                .join("")}
                        </div>
                        <p class="size">height ${pokemon.height} m</p>
                        <p class="size">weight ${pokemon.weight} kg</p>
                    </div>
                    <img data-id="cardImage" id="imageDialog" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                    <div class="dialogRight">
                        <p class="stats">${pokemon.stats[0].stat.name} ${pokemon.stats[0].base_stat}</p>
                        <p class="stats">${pokemon.stats[1].stat.name} ${pokemon.stats[1].base_stat}</p>
                        <p class="stats">${pokemon.stats[2].stat.name} ${pokemon.stats[2].base_stat}</p>
                        <p class="stats">${pokemon.stats[5].stat.name} ${pokemon.stats[5].base_stat}</p>
                    </div>
                    <div class="dialogMiddle">
                        <div class="dialogMiddleLeft">
                            <p class="size">ID${pokemon.id}</p>
                            <div class="typesContainer ${pokemon.types.length === 1 ? 'single' : 'multiple'}">
                                ${pokemon.types
                                    .map(type => `<div class="types ${type.type.name}">${type.type.name}</div>`)
                                    .join("")}
                            </div>
                            <p class="size">height ${pokemon.height} m</p>
                            <p class="size">weight ${pokemon.weight} kg</p>
                        </div>
                        <div class="dialogMiddleRight">
                            <p class="stats">${pokemon.stats[0].stat.name} ${pokemon.stats[0].base_stat}</p>
                            <p class="stats">${pokemon.stats[1].stat.name} ${pokemon.stats[1].base_stat}</p>
                            <p class="stats">${pokemon.stats[2].stat.name} ${pokemon.stats[2].base_stat}</p>
                            <p class="stats">${pokemon.stats[5].stat.name} ${pokemon.stats[5].base_stat}</p>
                        </div>
                    </div>
                </div>
                <div class="evolutionContainer">
                        <h4>Evolution Chain</h4>
                </div>
                <ul data-id="evolution-chain" id="evolutionChain${pokemon.id}" class="evolutionChain">

                </ul>
                <nav>
                    <button class="arrow" id="arrowLeft" aria-label="Pfeil nach links" onclick="arrowLeft()">
                        <img class="left" id="left" src="./assets/icons/arrowLeft.svg" alt="Left arrow">
                    </button>
                    <button class="arrow" id="arrowRight" aria-label="Pfeil nach Rechts" onclick="arrowRight()">
                        <img class="right" id="right" src="./assets/icons/arrowRight.svg" alt="Right">
                    </button>
                </nav>
            </div>
    `;
}

function evolutionChain(pokemon) {
    return `
        <li class="evolutionList">
            <h4 class="evolutionHeadline">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
            <img class="imageEvolution" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
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