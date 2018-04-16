'use strict';

// first variant
for(let i = 0; i < 10; i++) {
    setTimeout((function (parameter) {
        return function () {
            console.log(parameter);
        }
    })(i), 100 * i);
}

/*
//second variant
for (let i = 0; i < 10; i++) {
    setTimeout(console.log, 100*i, i);
}
*/

/*
//third variant
function makeSetTimeout(i) {
    setTimeout(function() {
        console.log(i);
        }, 100*i);
}

for (let i = 0; i < 10; ++i) {
    makeSetTimeout(i);
}
*/
