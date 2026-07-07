let layoutPokemon = [];

function init() {
    renderHeader();
    fetchDataJson();
    renderFooter();
}

function renderHeader() {
    document.getElementById('headerContainer').innerHTML = getHeader();
}

function renderFooter() {
    document.getElementById('footerContainer').innerHTML = getFooter();
}

function renderSmallCards() {
    document.getElementById('pokemonList').innerHTML = getSmallPokemonCards();
}

async function fetchDataJson() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();

    for (let index = 0; index < data.results.length; index++) {
        const pokemon = data.results[index];

        const response = await fetch(pokemon.url);
        const details = await response.json();

        layoutPokemon.push(details);
    }

    console.log(data);
    renderLayoutPokemon();
}

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "GET", // "GET", POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(data)
    });
    return response.json();
}

function renderLayoutPokemon() {
    let content = document.getElementById("pokemonList");
    content.innerHTML = '';
    for (let index = 0; index < layoutPokemon.length; index++) {
        content.innerHTML += getSmallPokemonCards(layoutPokemon[index]);
    }
}