'use strict';

const price = 25;
let persons = [];
let i;
let inCash=0;

//make your own line of customers
for(i=0; i>=0; i++) {
    alert(`Do yo wanna buy a ticket? One ticket costs 25 dollars.
    Give the 25 or 50 or 100 dollars bill!`);
    let pay = +prompt('Enter your bill:');
    let change = pay - price;
    if (pay == 25 || pay == 50 || pay == 100) {
        if (inCash >= pay - price) {
            inCash = inCash + pay - change;
            persons[i] = true;
            alert(`Here is your ticket! Your change is ${change}$.`);
        } else {
            persons[i] = false;
            alert(`I can't sell you a ticket! Give a smaller bill.`);
            giveChance(persons);
        }
    } else {
        alert(`This bill doesn't accepted, give me another - 25/50/100$!`);
        persons[i] = false;
        break;
    }
}
//give a chance for those who have a lot of money
function giveChance(persons) {
    let anotherChance = +prompt(`Enter your smaller bill:`);
    let change = anotherChance - price;
        if (inCash>=anotherChance && anotherChance==25 || anotherChance == 50 || anotherChance == 100) {
            inCash = inCash + anotherChance - change;
            persons[i] = true;
            alert(`Here is your ticket! Your change is ${change}$.`);
        } else {
            alert('Sorry, come back later.');
            persons[i] = false;
        }
}
//return result - alert for become confident that function returns something
function tickets(persons) {
    let i;
    for(i=0; i<persons.length; i++) {
        if (persons[i]==false) {
            alert('no');
            return 'NO';
        }
    }
    alert('yes');
    return 'YES';

}
tickets(persons);