"use strict";

// 1st
const applePrice = 12.50;
let discount = prompt(`Введите размер скидки, %:`); // change discount value here
let appleNewPrice = Math.round((applePrice * (100 - +discount)/100)*100)/100;

(discount>0 && discount<100)
    ? alert(`Яблоки украинские.\nцена: ${appleNewPrice}грн`)
    : alert(`Яблоки украинские.\nцена: ${applePrice}грн`);

// 2nd
let userString = prompt(`Напишите здесь что-нибудь:`);
let stringLength = userString.length;
let iteration;

if (stringLength>0 && stringLength<10) {
    for (iteration = 0; iteration <= stringLength; iteration++) {
        alert(userString.charAt(iteration));
    }
} else {
    alert(userString.substring(0, 7) + ` ` + userString.substring(9, stringLength));
}



