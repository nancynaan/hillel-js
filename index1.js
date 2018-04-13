'use strict';

let valuesArray;

function sum() {
    return valuesArray.reduce(sum = (param1, param2) => param1 + param2);
}

function mul() {
    return valuesArray.reduce(mul = (param1, param2) => param1 * param2);
}

function applyAll(parameters) {
    valuesArray = [].slice.call(arguments, 1);
    console.log(parameters.apply(this, valuesArray));
}

applyAll(sum, 7, 5, 10, 55);
applyAll(mul, 7, 5, 10, 55);
