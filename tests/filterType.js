export function filterType(selectedType, displayedPokemons, allPokemons, loadedCount) {
    
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
    return displayedPokemons;
}