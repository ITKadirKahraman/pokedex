import test from "node:test";
import assert from "node:assert/strict";
import {rightArrow} from "./arrowRight.js";

test.only("a next step", () => {
    let currentIndex = 1;
    let allPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    assert.equal(rightArrow(currentIndex, allPokemons), 2);
});