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

function renderMessageNoPokemonFound() {
    document.getElementById('#NoPokemonsFound').innerHTML = getPokemonNotFound(pokémonInput);
}

function renderMessageMinLetter() {
    document.getElementById('#NoPokemonsFound').innerHTML = getMessageMinLetters();
}