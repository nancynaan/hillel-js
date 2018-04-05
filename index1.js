'use strict';

const recipe = {
    sugar: 200,
    eggs: 1,
    milk: 100,
    flour: 300,
    apples: 3,
    oil: 100
};
//get an Object with available ingredients
let available = {};
function GetAvailable() {
    alert('Давайте печь пироги! Посмотрим сколько пирогов получится из ваших ингридиентов?');
    available.sugar = prompt('Сколько грамм сахара у вас имеется?');
    available.eggs = prompt('Сколько яиц у вас имеется?');
    available.milk = prompt('Сколько милилитров молока у вас имеется?');
    available.flour = prompt('Сколько грамм муки у вас имеется?');
    available.apples = prompt('Сколько яблок у вас имеется?');
    available.oil = prompt('Сколько грамм масла у вас имеется?');
}
GetAvailable(available);
//compare available ingredients with our recipe
function cakes(recipe, available) {
    let cakes;
    let ingredientsArray = [];
    if (available.sugar>=recipe.sugar) {
        cakes = Math.floor(available.sugar / recipe.sugar);
        ingredientsArray[0] = cakes;
    } else {
        cakes = 0;
        return `Количество пирогов доступное для приготовления - ${cakes}.` //sugar is necessary!
    }
    if (available.eggs>=recipe.eggs) {
        cakes = Math.floor(available.eggs / recipe.eggs);
        ingredientsArray[1] = cakes;
    } else {
        cakes = 0;
        return `Количество пирогов доступное для приготовления - ${cakes}.` //eggs are necessary!
    }
    if (available.flour>=recipe.flour) {
        cakes = Math.floor(available.flour / recipe.flour);
        ingredientsArray[2] = cakes;
    } else {
        cakes = 0;
        return `Количество пирогов доступное для приготовления - ${cakes}.` //flour is necessary!
    }
    if (available.milk>=recipe.milk) {
        cakes = Math.floor(available.milk / recipe.milk);
        ingredientsArray[3] = cakes;
    } else {
        cakes = 0;
        return `Количество пирогов доступное для приготовления - ${cakes}.` //milk is necessary!
    }
    if (available.oil>=recipe.oil) {
        cakes = Math.floor(available.oil / recipe.oil);
        ingredientsArray[4] = cakes;
    } else {
        cakes = 0;
        return `Количество пирогов доступное для приготовления - ${cakes}.` //oil is necessary!
    }
    if (available.apples>=recipe.apples) {
        cakes = Math.floor(available.apples / recipe.apples);
        ingredientsArray[5] = cakes;
    } else {
        cakes = 0;
        return `Количество пирогов доступное для приготовления - ${cakes}.` //apples are necessary too!
    }
    //make an Array of all cakes value & select the max value
    let i;
    let maxCakes = ingredientsArray[0];
    for (i=1; i<ingredientsArray.length; i++) {
        if (ingredientsArray[i] < maxCakes) {
            cakes = ingredientsArray[i];
        } else {
            cakes = maxCakes;
        }
    }
    return `Количество пирогов доступное для приготовления - ${cakes}.`;
}
alert(cakes(recipe, available));