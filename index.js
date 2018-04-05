'use strict';

function validatePassword() {
    let password = document.getElementById("password").value;
    let passwordArray = password.split('');
    let upperCaseLetters = false;
    let lowerCaseLetters = false;
    let numberValues = false;
    let passwordLength = false;
    let iteration;

    for (iteration = 0; iteration < passwordArray.length; iteration++) {
        if (passwordArray[iteration]>="A" && passwordArray[iteration]<="Z") {
            upperCaseLetters = true;
            break;
        }
    }
    for (iteration = 0; iteration < passwordArray.length; iteration++) {
        if (passwordArray[iteration]>="a" && passwordArray[iteration]<="z") {
            lowerCaseLetters = true;
            break;
        }
    }
    for (iteration = 0; iteration < passwordArray.length; iteration++) {
        if (passwordArray[iteration]>="0" && passwordArray[iteration]<="9") {
            numberValues = true;
            break;
        }
    }

    if (passwordArray.length>6 && passwordArray.length<20){
        passwordLength = true;
    }

    if (!upperCaseLetters || !lowerCaseLetters || !numberValues || !passwordLength) {
        alert(`INVALID`);
        alert('Составьте валидный пароль и получите доступ дальше!');
        return false;
    } else {
        alert(`VALID`);
        let digit=prompt('Введите число:');
        checkNumber(digit);
    }
}

function checkNumber(digit) {
    let numberParameters = {
        prime: false,
        even: false,
        multiple: false,
    };
    let iteration;
    let key;

    if (digit==2) {
        numberParameters.prime = true;
        numberParameters.even = true;
    }
    if (digit >= 0) {
        for (iteration = 2; iteration < digit; iteration++) {
            if (digit % iteration === 0) {
                if (digit % 2 === 0) {
                    numberParameters.even = true;
                    if (digit % 10 === 0 && digit > 0) {
                        numberParameters.multiple = true;
                    }
                }
                break;
            } else {
                numberParameters.prime = true;
            }
        }
    } else {
        if(digit % 2 === 0) {
            numberParameters.even = true;
        }
    }

    for (key in numberParameters) {
        alert(numberParameters[key]);
    }

    if (numberParameters.prime||numberParameters.even||numberParameters.multiple) {
        getSum();
    } else {
        alert('Подумайте над числом');
        return false;
    }
}


function getSum() {
    let firstNumber = prompt('Введите число:');
    let secondNumber = prompt('Введите число:');
    let firstArray = firstNumber.split('');
    let secondArray = secondNumber.split('');
    let i;
    let sum;
    let resultArray = [];

    if (firstNumber.length==secondNumber.length) {
        for(i=firstNumber.length-1; i>=0; i--) {
            sum = +firstArray[i] + +secondArray[i];
            if(sum>=10 && i<=0) {
                resultArray[0]=sum;
            }
            if (sum>=10 && i>0) {
                sum = sum - 10;
                firstArray[i-1] = +firstArray[i-1] + 1;
            }
            resultArray[i] = sum;
        }
    } else {
        if (firstNumber.length-secondNumber.length<0) {
            firstArray = secondNumber.split('');
            secondArray = firstNumber.split('');
        }
        if(firstArray.length-secondArray.length>0) {
            for(i=firstArray.length-1; i>=0; i--) {
                sum = +firstArray[i] + +secondArray[i-(firstArray.length-secondArray.length)];
                resultArray[i] = sum;
                if (sum>=10 && i>=firstArray.length-secondArray.length) {
                    sum = sum - 10;
                    firstArray[i-1] = +firstArray[i-1] + 1;
                    resultArray[i] = sum;
                }
                if (i<firstArray.length-secondArray.length){
                    resultArray[i]=+firstArray[i];
                }
            }
        }
    }
    let result = resultArray.join('');
    alert(result);
}

