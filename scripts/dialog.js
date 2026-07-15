function openDialog(index) {
    console.log(index);
    console.log(allPokemons[index]);
    
    currentIndex = index;
    const dialog =  document.getElementById('dialog');
    dialog.innerHTML = getDialogPokemonCard(allPokemons[currentIndex]);
    dialog.showModal();
}

function renderDialog() {
    const dialog = document.getElementById('dialog');
    dialog.innerHTML = getDialogPokemonCard(allPokemons[currentIndex]);
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