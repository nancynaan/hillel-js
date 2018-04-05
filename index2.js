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
        return false;
    } else {
        alert(`VALID`);
        return true;
    }
}














