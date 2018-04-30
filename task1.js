'use strict';

let i = -1;

let cacheObject = {
    0: {
        arg1: null,
        arg2: null
    }
};

var complexFunction = function(arg1, arg2) {
    i++;
    //making new inserted object in cacheObject
    let key = i;
    cacheObject[key] = {};
    cacheObject[key]['arg1'] = arg1;
    cacheObject[key]['arg2'] = arg2;
    return arg1 + arg2;
};

var cachedFunction = function(arg1, arg2) {
    let key;
    for (key in cacheObject) {
        if (cacheObject[key].arg1 === arg1 && cacheObject[key].arg2 === arg2) {
            console.log(cacheObject[key].arg1 + cacheObject[key].arg2);
            return; //if you have repeating values again, you'll see them without inserting in parent Object
        }
    }
    // if you have 2 new values, you'll see them in cacheObject
    for (key in cacheObject) {
        let value = complexFunction(arg1, arg2);
        console.log(value);
        console.log(cacheObject); //check the Object here!
        break;
    }
};

cachedFunction(2, 2);
cachedFunction(1, 2);
cachedFunction(1, 2);
cachedFunction(4, 2);
cachedFunction(2, 2);
cachedFunction(4, 2);

