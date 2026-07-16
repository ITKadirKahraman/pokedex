async function openDialog(index) {
    currentIndex = index;
    const pokemon = allPokemons[currentIndex];
    const dialog =  document.getElementById('dialog');
    dialog.innerHTML = getDialogPokemonCard(pokemon);
    dialog.showModal();
    await loadEvolutionChain(pokemon)
}

async function loadEvolutionChain(pokemon) {
    const speciesResponse = await fetch(pokemon.species.url);
    const speciesData = await speciesResponse.json();

    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();

    const names = getEvolutionNames(evolutionData.chain);

    const container =
        document.getElementById(`evolutionChain${pokemon.id}`);

    container.innerHTML = "";

    for (const name of names) {

        const response = await fetch(BASE_URL + name);

        const evolutionPokemon = await response.json();

        container.innerHTML += evolutionChain(evolutionPokemon);
    }
}

function getEvolutionNames(chain) {

    const evolutions = [];

    while (chain) {

        evolutions.push(chain.species.name);

        chain = chain.evolves_to[0];
    }

    return evolutions;
}

async function renderDialog() {
    const dialog = document.getElementById('dialog');
    const pokemon = allPokemons[currentIndex];
    dialog.innerHTML = getDialogPokemonCard(pokemon);
    await loadEvolutionChain(pokemon);
}

function closeDialog() {
    document.getElementById('dialog').close();
}

function arrowLeft() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = allPokemons.length - 1;
    }

    renderDialog();    
}

function arrowRight() {
    currentIndex++;
    if (currentIndex >= allPokemons.length) {
        currentIndex = 0;
    }
    
    renderDialog();
}