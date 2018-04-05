'use strict';

let firstNumber = prompt(`Введите первое число:`);
let secondNumber = prompt(`Введите второе число:`);
let iteration;
let innerIteration=0;
let firstNumberDigitsArray = [];
let secondNumberDigitsArray = [];
let sum = 0;

let firstNumberArray = firstNumber.split('');

for (iteration=firstNumberArray.length-1; iteration>=0; iteration--) {
    for (innerIteration; innerIteration<=firstNumberArray.length-1-iteration; innerIteration++) {
        firstNumberDigitsArray[iteration]=firstNumberArray[iteration]*Math.pow(10, innerIteration);
    }
}
innerIteration=0;

let secondNumberArray = secondNumber.split('');

for (iteration=secondNumberArray.length-1; iteration>=0; iteration--) {
    for (innerIteration; innerIteration<=secondNumberArray.length-1-iteration; innerIteration++) {
        secondNumberDigitsArray[iteration]=secondNumberArray[iteration]*Math.pow(10, innerIteration);
    }
}

let fullArray = firstNumberDigitsArray.concat(secondNumberDigitsArray);

for (iteration=0; iteration<=fullArray.length-1; iteration++) {
    sum = sum + fullArray[iteration];
}
alert(`Сумма чисел = ${sum}`);




