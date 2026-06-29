function getHeader() {
    return `
        <div class="headerLeft">
            <img class="pokédex" src="./assets/icons/pokédex.svg" alt="Pokémdex">
            <h3>Pokédex with <span>PokéAPI</span></h3>
        </div>
        <div class="headerRight">
            <p class="searchText">Search <span>Pokémon</span></p>
            <input type="text" class="pokémonInput" id="pokémonInput" placeholder="Search Pokémon" onclick="enterKey(), addCity()">
            <button class="searchPokémon" onclick=""><img class="lopu" src="./assets/icons/lopu.svg" alt="Lopu"></button>
        </div>
    `;
}

function getFooter() {
    return `
        <p class="footerText">Created by Kadir Kahraman</p>
        <img class="pokéball" src="./assets/icons/pokémonBall.svg" alt="Pokémdex">
    `;
}