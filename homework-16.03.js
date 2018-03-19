"use strict";

// 2nd
console.log("It's beautiful day. I like 'free day'.");
console.log("It's beautiful day. I like \"free day\".");
console.log('It\'s beautiful day. I like "free day".');
console.log('It\'s beautiful day. I like \'free day\'.');
console.log("It\u0027s beautiful day. I like \"free day\".");
console.log("\n");

// 3rd
var firstNumber = 1.44*0.56*10000; //0.8064*10000
var otherFirstNumber = 2.688*0.3*10000; //0.8064*10000
var secondNumber = 3.14*2.03*10000; //6.3742*10000
var otherSecondNumber = 3.1871*2*10000; //6.3742*10000
var firstResult = (firstNumber*secondNumber)/10000;
var otherSecondResult = (otherFirstNumber*otherSecondNumber)/10000;
console.log(firstResult === otherSecondResult);
console.log("\n");


// 4th
console.log(("string"+2)/0); //NaN
console.log(+"string"+2); //NaN
