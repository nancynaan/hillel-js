"use strict";

const applePrice = 12.50;
let discount = 15;
let appleNewPrice = Math.round((applePrice * (100 - discount)/100)*100)/100;

let orangePrice = 12.50;
const markup = 15;
let orangeNewPrice = Math.round((orangePrice * (100 + markup)/100)*100)/100;

console.log(`Яблоки украинские. \n
цена: ${appleNewPrice}грн`);
console.log(`\n`);
console.log(`Апельсины греческие. \n
цена: ${orangeNewPrice}грн`);