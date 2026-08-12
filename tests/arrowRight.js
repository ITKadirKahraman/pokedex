export function rightArrow(currentIndex, allPokemons) {
    currentIndex++;
    if (currentIndex >= allPokemons.length) {
        currentIndex = 0;
    }
    
    return currentIndex;
}