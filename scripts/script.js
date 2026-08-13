const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let allPokemons = []; // Cache von allen geladenen Pokémons
let displayedPokemons = []; // die gesuchten Pokémons
let favoritePokemons = []; // die favoriten Pokémons werden gespeichert
let currentIndex = 0; // welches Pokemon ist gerade im Dialog geöfnnet
let contentRenderd = false; // Inhalt wurde noch nicht gerendert
let currentOffset = 0;
let loadedCount = 20; // wie viele hinzufügen
const LOAD_COUNT = 20; // wie viele auf einmal laden
const MAX_AMOUNT = 1025; // maximale Anzahl von Pokemon

function init() {
    renderPage();
    initSearch();
}

function renderPage() {
    renderHeader();
    fetchFirstTwentyPokemons();
    renderLoadMoreContainer();
    renderFooter();
}

function clearMessageMinLetter() {
    document.getElementById('NoPokemonsFound').innerHTML = "";
}

function showLoading() {
    document.getElementById("loadingScreen").style.display = "flex";
}

function hideLoading() {
    document.getElementById("loadingScreen").style.display = "none";
}

async function fetchFirstTwentyPokemons() {
    showLoading();
    try {
        const response = await fetch(
            `${BASE_URL}?limit=${LOAD_COUNT}&offset=${currentOffset}`
        );
        const data = await response.json();
        for (const pokemon of data.results) {
            const response = await fetch(pokemon.url);
            const details = await response.json();
            allPokemons.push(details);
        }
        currentOffset += LOAD_COUNT;
        displayedPokemons = [...allPokemons];
        updateDisplayedPokemons();
    } catch(e) {
        errorException(e);
    } finally {
        hideLoading();
    }
}

async function loadMorePokemons() {
    showLoading();
    try {
        const response = await fetch(
            `${BASE_URL}?limit=${LOAD_COUNT}&offset=${currentOffset}`
        );
        const data = await response.json();
        for (const pokemon of data.results) {
            const response = await fetch(pokemon.url);
            const details = await response.json();
            allPokemons.push(details);
        }
        currentOffset += LOAD_COUNT;
        displayedPokemons = [...allPokemons];
        updateDisplayedPokemons();
    } catch(e) {
        errorException(e);
    } finally {
        hideLoading();
    }
}

function errorException(exception) {
    return console.error(`${exception.name}: ${exception.message}`);
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

function updateDisplayedPokemons() {
    displayedPokemons = allPokemons.slice(0, loadedCount);
    renderLayoutPokemon();
}

function handleSearch(event) {
    if (event.key === "Enter") {
        searchPokemon();
    }
}

function renderLayoutPokemon() {
    let content = document.getElementById("pokemonList");
    content.innerHTML = '';
    displayedPokemons.forEach((pokemon, index) => {
        content.innerHTML += getSmallPokemonCards(pokemon, index);
    });
}

function renderBackgroundColor(pokemon) {
    const backgroundColor = typeColors[pokemon.types[0].type.name];
    return backgroundColor;
}