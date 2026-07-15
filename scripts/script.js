const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonInput = document.getElementById('pokemonInput');
let allPokemons = []; // Cache von allen geladenen Pokémons
let searchedPokemons = []; // die gesuchten Pokémons
let currentIndex = 0; // welches Pokemon ist gerade im Dialog geöfnnet
let contentRenderd = false; // Inhalt wurde noch nicht gerendert
const LOAD_COUNT = 20; // wie viele auf einmal laden
const MAX_AMOUNT = 1025; // maximale Anzahl von Pokemon

function init() {
    renderPage();
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

async function fetchFirstTwentyPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();

    for (let index = 0; index < data.results.length; index++) {
        const pokemon = data.results[index];

        const response = await fetch(pokemon.url);
        const details = await response.json();

        allPokemons.push(details);
    }

    renderLayoutPokemon();
}

async function loadMorePokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await response.json();

    for (let index = LOAD_COUNT + 1; index < MAX_AMOUNT; index++) {
        const element = array[index];
        
    }
    
}

async function searchPokemon() {
    let search = document.getElementById('pokemonInput');
    searchedPokemons = [];

    search.addEventListener("keydown", function (event) {
        if(event.key === "Enter") {
            renderLayoutPokemon();
            searchedPokemons.push(search);
        }
    })
}

async function loadMoreBtn() {
    loadMorePokemons();
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
    for (let index = 0; index < LOAD_COUNT; index++) {
        content.innerHTML += getSmallPokemonCards(allPokemons[index], index);
    }
}