export function leftArrow(currentIndex, allPokemons) {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = allPokemons.length - 1;
    }

    return currentIndex;
}