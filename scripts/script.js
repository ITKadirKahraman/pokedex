const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let allPokemons = []; // Cache 
let displayedPokemons = []; // searched pokemons
let pokemonCache = new Map();
let favoritePokemons = []; // favoriten Pokémons saved
let currentIndex = 0; // the open pokemon with dialog
let contentRenderd = false; // not render
let currentOffset = 0;
let loadedCount = 20; // added
const LOAD_COUNT = 20; // how much
const MAX_AMOUNT = 1025; // max count of pokemons

function init() {
    renderPage();
    initSearch();
}

function renderPage() {
    renderHeader();
    loadMorePokemons();
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

function showNoPokemonCards() {
    const list = document.getElementById('pokemonList');
    list.innerHTML = "";
    showNoButtonLoadMore();
}

function showNoButtonLoadMore() {
    const button = document.getElementById('loadMoreContainer');
    button.innerHTML = "";
}

async function getPokemonDetails(pokemon) {
    if(pokemonCache.has(pokemon.name)) {
        return pokemonCache.get(pokemon.name);
    }
    try {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
            throw new Error(`Pokémon ${pokemon.name} konnte nicht geladen werden.`);
        }
        const details = await response.json();
        pokemonCache.set(pokemon.name, details);
        return details;
    } catch(e) {
        errorException(e);
    }
}

async function loadMorePokemons() {
    showLoading();
    showNoPokemonCards();
    try {
        const response = await fetch(
            `${BASE_URL}?limit=${LOAD_COUNT}&offset=${currentOffset}`
        );
        const data = await response.json();
        for (const pokemon of data.results) {
            const details = await getPokemonDetails(pokemon);
            allPokemons.push(details);
        }
        currentOffset += LOAD_COUNT;
        loadedCount += LOAD_COUNT;
        updateDisplayedPokemons();
        cleanSearch();
        cleanTypeFilter();
    } catch(e) {
        errorException(e);
    } finally {
        hideLoading();
    }
}

function errorException(exception) {
    return console.error(`${exception.name}: ${exception.message}`);
}

function updateDisplayedPokemons() {
    displayedPokemons = allPokemons.slice(0, loadedCount);
    renderLayoutPokemon();
    renderLoadMoreContainer();
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