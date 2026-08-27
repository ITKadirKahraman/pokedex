export function search(search, displayedPokemons, allPokemons, loadedCount) {

    if (search.length < 3) {
        displayedPokemons = allPokemons.slice(0, loadedCount);
        renderLayoutPokemon();
        return;
    }

    displayedPokemons = allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );

    return displayedPokemons;
}