export function evolutionNames(chain) {

    const evolutions = [];

    while (chain) {

        evolutions.push(chain.species.name);

        chain = chain.evolves_to[0];
    }

    return evolutions;
}