function initSearch() {
    const search = document.getElementById('pokemonInput');
    search.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchPokemon();
        }
    });
}

function cleanSearch() {
    const search = document.getElementById('pokemonInput');
    search.value = "";
}

function cleanTypeFilter() {
    const typeFilter = document.getElementById('typeFilter');
    typeFilter.value = "all";
}

function searchPokemon() {
    const input = document.getElementById("pokemonInput");
    const searchTerm = input.value.toLowerCase().trim();
    if (searchTerm.length < 3) {
        displayedPokemons = allPokemons.slice(0, loadedCount);
        renderLayoutPokemon();
        return;
    }
    displayedPokemons = allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );
    renderLayoutPokemon();
}

function filterTypePokemon() {
    const selectedType =
        document.getElementById("typeFilter").value;
    if (selectedType === "all") {
        displayedPokemons = allPokemons.slice(0, loadedCount);
    } else {
        displayedPokemons = allPokemons
            .slice(0, loadedCount)
            .filter(pokemon =>
                pokemon.types.some(type =>
                    type.type.name === selectedType
                )
            );
    }
    renderLayoutPokemon();
}