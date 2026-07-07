function getHeader() {
    return `
        <div class="headerLeft">
            <img class="pokédex" src="./assets/icons/pokédex.svg" alt="Pokémdex">
            <h3>Pokédex with <span class="spanHeader">PokéAPI</span></h3>
        </div>
        <div class="headerRight">
            <p class="searchText">Search <span class="spanHeader">Pokémon</span></p>
            <input type="text" class="pokémonInput" id="pokémonInput" placeholder="Search Pokémon" onclick="enterKey(), addCity()">
            <button class="searchPokémon" onclick=""><img class="lopu" src="./assets/icons/lopu.svg" alt="Lopu"></button>
        </div>
    `;
}

function getSmallPokemonCards(pokemon) {
    return `
        <li>
            <button data-id="card" class="pokemonCard ${pokemon.types[0].type.name}" onclick="openDialog(index)">
                <div class="cardHeader">
                    <span class="spanPokemon">ID${pokemon.id}</span>
                    <span class="spanPokemon">${pokemon.name}</span>
                </div>
                <div class="cardMiddle">
                    <img data-id="cardImage" id="image" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="">
                </div>
                <div class="cardBottom" id="types">
                    <p>${pokemon.types.map(type => `<div class="type ${type.type.name}"> ${type.type.name}</div>`).join("")}</p>
                </div>
            </button>
        </li>
    `;
}

function getFooter() {
    return `
        <p class="footerText">Created by Kadir Kahraman</p>
        <img class="pokéball" src="./assets/icons/pokémonBall.svg" alt="Pokémdex">
    `;
}