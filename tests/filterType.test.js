import test from "node:test";
import assert from "node:assert/strict";
import { filterType } from "./filterType.js";

test.only("filter for types", () => {
    selectedType, 
    displayedPokemons, 
    allPokemons, 
    loadedCount
    assert.deepStrictEqual(filterType());
});

let currentIndex = -1;
    let allPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    assert.equal(leftArrow(currentIndex, allPokemons), 9);

const chain = {
        species: {
            name: "bulbasaur"
        },
        evolves_to: [
            {
                species: {
                    name: "ivysaur"
                },
                evolves_to: [
                    {
                        species: {
                            name: "venusaur"
                        },
                        evolves_to: []
                    }
                ]
            }
        ]
    };

    assert.deepStrictEqual(evolutionNames(chain), ["bulbasaur", "ivysaur", "venusaur"]);