'use strict';

function checkNumber() {
    let digit = +prompt(`Введите число:`);
    let iteration;
    let valueArray = [];

    if (digit === 2) {
        valueArray[0] = true;
    }
    if (digit > 0) {
        for (iteration = 2; iteration < digit; iteration++) {
            if (digit % iteration === 0) {
                valueArray[0] = false;
                break;
            } else {
                valueArray[0] = true;
            }
        }
    } else {
        valueArray[0] = false;
    }

    if (digit % 2 === 0) {
        valueArray[1] = true;
    } else {
        valueArray[1] = false;
    }

    if (digit % 10 === 0 && digit>0) {
        valueArray[2] = true;
    } else {
        valueArray[2] = false;
    }
    alert(valueArray);
}

checkNumber();