import test from "node:test";
import assert from "node:assert/strict";
import {leftArrow} from "./arrowLeft.js";

test.only("a step back", () => {
    let currentIndex = -1;
    let allPokemons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    assert.equal(leftArrow(currentIndex, allPokemons), 9);
});