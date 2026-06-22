function getHeader() {
    return `
        <div class="headerLeft">
            <img class="pokédex" src="./assets/icons/pokédex.svg" alt="Pokémdex">
            <h1>Pokédex with PokéAPI</h1>
        </div>
        <div class="headerRight">
            <p class="searchText">Search Pokémon:</p>
            <input type="text" id="pokémonInput" placeholder="Search Pokémon" onclick="enterKey(), addCity()">
            <button class="searchPokémon" onclick=""><img src="./assets/icons/lopu.svg" alt="Lopu"></button>
        </div>
    `;
}

function getFooter() {
    return `
        <p class="footerText">Created by Kadir Kahraman</p>
        <img class="pokédex" src="./assets/icons/pokémonBall.svg" alt="Pokémdex">
    `;
}