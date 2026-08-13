import test from "node:test";
import assert from "node:assert/strict";
import {evolutionNames} from "./evolution.js";

test.only("evolutions", () => {
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
})