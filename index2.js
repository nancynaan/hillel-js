'use strict';

function getIndex(userValue) {
    let fibonacciArray = [0, 1];
    let indexOfValue;
    let i = 2;

    for (i; i >= 0; i++) {
        if (userValue === 0) {
            indexOfValue = 0;
            return indexOfValue;
        }
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        if (fibonacciArray[i] === userValue) {
            indexOfValue = fibonacciArray.indexOf(fibonacciArray[i]);
            return indexOfValue;
        }
        if (userValue < fibonacciArray[i]) {
            return ('Error! Not a fibonacci number.'); //not a fibonacci number
        }
    }
}

function fibonacci(userValue) {
	console.log(getIndex.call(this, userValue));
}

fibonacci(17711);
fibonacci(0);
fibonacci(2);
fibonacci(17);

