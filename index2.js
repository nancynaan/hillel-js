'use strict';

const price = 25;
let persons = [];
let i;
let inCash=0;


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
            break;
        }
    } else {
        alert(`This bill doesn't accepted, give me another - 25/50/100$!`);
        persons[i] = false;
        break;
    }
}

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

