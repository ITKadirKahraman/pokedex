function saveToLocalStorage() {
    localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
}

function getFormLocalStorage() {
    const getData = localStorage.getItem("favoritePokemons");
    if(getData) {
        favoritePokemons = JSON.parse(getData);
    }
}

function saveFavorite(pokemonId) {

    const pokemon = allPokemons.find(
        pokemon => pokemon.id === pokemonId
    );

    const favorite = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other["official-artwork"].front_default
    };

    favoritePokemons.push(favorite);

    saveToLocalStorage();
}