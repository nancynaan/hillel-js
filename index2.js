'use strict';

let value = 5;
let newValue = 0;
let maths = {
    sum: function() {
        newValue += value;
        console.log(newValue);
        return this;
    },
    minus: function () {
        newValue -= value;
        console.log(newValue);
        return this;
    },
    multiple: function () {
        newValue *= value;
        console.log(newValue);
        return this;
    },
    showResult: function () {
        console.log(newValue);
        return this;
    }
};

maths.sum().multiple().minus().sum().multiple().minus().showResult();
