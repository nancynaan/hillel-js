'use strict';

// task 2 - make a table

// add some elements in DOM
var divTable = document.createElement('div');
divTable.className = 'table';
divTable.id = 'table';
content.appendChild(divTable);

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