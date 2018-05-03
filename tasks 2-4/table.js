'use strict';

// task 2 - make a table

// add some elements in DOM
var divTable = document.getElementById("table");
divTable.className = 'table';

var heading = document.createElement('p');
heading.className = 'table-header';
heading.innerHTML = "Let's make your own great table! <br \/> Just enter the number of columns and rows below.";
divTable.appendChild(heading);

var form = document.createElement('form');
form.className = 'table-form';
divTable.appendChild(form);

var colDescription = document.createElement('p');
colDescription.className = 'table-description';
colDescription.innerHTML = "Columns:";
form.appendChild(colDescription);

var cols = document.createElement('input');
cols.id = 'columns';
cols.setAttribute('type', 'text');
form.appendChild(cols);

var rowDescription = document.createElement('p');
rowDescription.className = 'table-description';
rowDescription.innerHTML = "Rows:";
form.appendChild(rowDescription);

var rows = document.createElement('input');
rows.id = 'rows';
cols.setAttribute('type', 'text');
form.appendChild(rows);

var button = document.createElement('input');
button.className = 'table-button';
button.id = 'table-submit';
button.setAttribute('type', 'submit');
button.setAttribute('value', 'OK');
form.appendChild(button);

// check that user enters numeric values into inputs

var errorDiv = document.createElement('div');
errorDiv.id = 'error';
form.appendChild(errorDiv);

cols.onblur = function() {
    if (isNaN(this.value) || (this.value == 0) || (this.value == null)) {
        this.className = "error";
        error.innerHTML = "Not a numeric value! Try again.";
    }
};

cols.onfocus = function() {
    if (this.className == "error") {
        this.className = "";
        error.innerHTML = "";
    }
};

rows.onblur = function() {
    if (isNaN(this.value)  || (this.value == 0) || (this.value == null)) {
        this.className = "error";
        error.innerHTML = "Not a numeric value! Try again.";
    }
};

rows.onfocus = function() {
    if (this.className == "error") {
        this.className = "";
        error.innerHTML = "";
    }
};

// make a table
let rowsValue;
let colsValue;

function checkValues() {
    let colsText = document.getElementById('columns');
    colsValue = colsText.value;
    let rowsText = document.getElementById('rows');
    rowsValue = rowsText.value;
    if (isNaN(colsValue) || isNaN(rowsValue) || colsValue==0 || rowsValue==0) {
        alert('Not a numeric value, I told you so before. Try again!');
        return false;
    } else {
        makeTable();
    }
}
let tableBody;
let td, tr;
let table;
function makeTable() {
    let del = document.getElementById('newTable');
    if (del != null) {
        divTable.removeChild(tableBody);
        table.removeEventListener('mouseenter', getActive);
        table.removeEventListener('mouseleave', getNotActive);
    } // delete previous table
    tableBody = document.createElement('table');
    tableBody.id = 'newTable';
    divTable.appendChild(tableBody);
    let i, j;
    for (i=1; i<=rowsValue; i++) {
        tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for (j=1; j<=colsValue; j++) {
            td = document.createElement('td');
            td.innerHTML = '&nbsp;';
            tr.appendChild(td);
        }
    }
    table = document.getElementById('newTable');
    table.addEventListener('mouseover', getActive);
    table.addEventListener('mouseout', getNotActive);
}

form.setAttribute('onsubmit', 'checkValues(); return false');

let col;
let row;
function getActive(event) {
    // show an index of cell
    col = event.target.cellIndex + 1;
    row = event.target.parentElement.rowIndex + 1;
    let index = (row-1)*colsValue + col;
    if ((event.target.cellIndex != undefined || event.target.parentElement.rowIndex != undefined)
        || event.target.innerHTML == ``) {
        event.target.className = 'td-active';
        event.target.innerHTML = `${index}`;
    }
}

function getNotActive(event) {
    event.target.classList.remove('td-active');
    if ((event.target.cellIndex != undefined || event.target.parentElement.rowIndex != undefined)
        || event.target.innerHTML == ``) {
        event.target.innerHTML = ``;
    }
}

// task 3 - watches

let watches = document.createElement('div');
watches.id = 'watches';
divTable.appendChild(watches);
let hours = document.createElement('span');
watches.appendChild(hours);
let minutes = document.createElement('span');
watches.appendChild(minutes);
let seconds = document.createElement('span');
watches.appendChild(seconds);
let year = document.createElement('span');
watches.appendChild(year);
let month = document.createElement('span');
watches.appendChild(month);
let day = document.createElement('span');
watches.appendChild(day);

function getWatches() {
    let date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    watches.children[1].innerHTML = `${minutes}:`;
    hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    watches.children[0].innerHTML = `${hours}:`;

    day = date.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    watches.children[3].innerHTML = `<br/>${day}.`;

    month = date.getMonth();
    if (month < 10) {
        month = '0' + (month+1);
    }
    watches.children[4].innerHTML = `${month}.`;

    year = date.getFullYear();
    watches.children[5].innerHTML = `${year}`;

    function getTime() {
        let date = new Date();
        seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        watches.children[2].innerHTML = seconds;

        if (seconds === '00') {
            minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            watches.children[1].innerHTML = `${minutes}:`;
        }

        if (minutes === '00') {
            hours = date.getHours();
            if (hours < 10) {
                hours = '0' + hours;
            }
            watches.children[0].innerHTML = `${hours}:`;
        }
        if (hours === '00') {
            day = date.getDate();
            if (day < 10) {
                day = '0' + day;
            }
            watches.children[3].innerHTML = `<br/>${day}.`;
        }
    }
    let timerId;
    timerId = setInterval(getTime, 1000);
    getTime();
}
getWatches();


// task 4 - resize window

let resize = document.createElement('div');
resize.id = 'resize';
divTable.appendChild(resize);

function getWindowSize() {
    let basicWidth = document.documentElement.clientWidth;
    let basicHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    resize.innerHTML = `${basicWidth} * ${basicHeight}`;

    function getNewSize() {
        if (basicWidth !== document.documentElement.clientWidth ||
        basicHeight !== Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )) {
           basicWidth = document.documentElement.clientWidth;
           basicHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            resize.innerHTML = `${basicWidth} * ${basicHeight}`;
        }
    }
    let timerIdResize;
    timerIdResize = setInterval(getNewSize, 2000);
    getNewSize();
}
getWindowSize();
