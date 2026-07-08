const BASE_URL = "https://pokeapi.co/api/v2/";
const LOAD_COUNT = 20;
let layoutPokemon = [];
let allPokemons = [];
let currentIndex = 0;

function init() {
    renderHeader();
    fetchDataJson();
    renderLoadMoreContainer();
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

function renderLoadMoreContainer() {
    document.getElementById('loadMoreContainer').innerHTML = getLoadMoreButton();
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

async function renderLoadMorePokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await response.json();

    
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

function arrowLeft() {
    let dialogLeft = document.getElementById('arrowLeft');
    
    dialogLeft.addEventListener("click", () => {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = allPokemons.length - 1;
        }
        renderDialog();
    });
}

function arrowRight() {
    let dialogRight = document.getAnimations('arrowRight');
    
    dialogRight.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= allPokemons.length) {
            currentIndex = 0;
        }
        renderDialog();
    });
}