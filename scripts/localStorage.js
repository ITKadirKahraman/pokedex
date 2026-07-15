function saveToLocalStorage() {
    localStorage.setItem("pokémon", JSON.stringify(searchedPokemons));
}

function getFormLocalStorage() {
    const getData = localStorage.getItem("pokémon");
    if(getData) {
        searchedPokemons = JSON.parse(getData);
    }
}