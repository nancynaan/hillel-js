'use strict';

var page = document.getElementById('wrapper');

var header = document.createElement('header');
header.id = 'header';
header.className = 'header';
page.appendChild(header);

var aside = document.createElement('aside');
aside.id = 'aside';
aside.className = 'sidebar';
page.appendChild(aside);

var content = document.createElement('content');
content.id = 'content';
page.appendChild(content);

var footer = document.createElement('footer');
footer.id = 'footer';
footer.className = 'footer';
page.appendChild(footer);

header.innerHTML = `<div class="header-menu"><div class="header-image">
                    <img class="header-logo" src="./images/logo.png"/></div><ul class="header-list">
                    <li class="header-element"><a class="header-link" href="#">Main</a></li>
                    <li class="header-element"><a class="header-link" href="#">One</a></li>
                    <li class="header-element"><a class="header-link" href="#">Two</a></li></ul></div>`;
aside.innerHTML = `<div class="sidebar-links"><ul class="sidebar-list">
                    <li class="sidebar-element"><a class="sidebar-link" href="./index.html">Main</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="./table.html">Table</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="./slider.html">Slider</a></li></ul></div>`;

footer.innerHTML = `<div class="footer-links"><ul class="footer-list">
                    <li class="footer-element"><span>powered by NancyNan</span></li>
                    <li class="footer-element"><a class="footer-link" target="_blank" href="https://github.com/nancynaan/hillel-js">Github</a></li></ul></div>`;

// watches

let watches = document.createElement('div');
watches.id = 'watches';
header.appendChild(watches);
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

// resize window

let resize = document.createElement('div');
resize.id = 'resize';
header.appendChild(resize);

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
    timerIdResize = setInterval(getNewSize, 3000);
    getNewSize();
}
getWindowSize();

// stopwatch
let description = document.createElement('span');
description.innerHTML = `You're here for`;
description.className = 'footer-description';
footer.insertBefore(description, footer.children[1]);
var stopwatch = document.createElement('div');
stopwatch.className = 'footer-stopwatch';
footer.appendChild(stopwatch);
stopwatch.id = 'stopwatch';
let secondsStopwatch = document.createElement('span');
stopwatch.appendChild(secondsStopwatch);
let minutesStopwatch = document.createElement('span');
stopwatch.appendChild(minutesStopwatch);

secondsStopwatch = 0;
minutesStopwatch = 0;
stopwatch.children[0].innerHTML = `0${minutesStopwatch}:`;
stopwatch.children[1].innerHTML = `${secondsStopwatch}`;

function makeStopwatch() {
    secondsStopwatch++;
    stopwatch.children[1].innerHTML = `${secondsStopwatch}`;
    if(secondsStopwatch>59) {
        minutesStopwatch++;
        stopwatch.children[0].innerHTML = `0${minutesStopwatch}:`;
        secondsStopwatch=0;
        if (minutesStopwatch>9) {
            stopwatch.children[0].innerHTML = `${minutesStopwatch}:`;
        }
    }
    if(secondsStopwatch<10) {
        secondsStopwatch = `0${secondsStopwatch}`;
        stopwatch.children[1].innerHTML = `${secondsStopwatch}`;
    }
}
let timerId;
timerId = setInterval(makeStopwatch, 1000);
makeStopwatch();

document.addEventListener('keydown', setZeroStopwatch);

function setZeroStopwatch(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        secondsStopwatch = 0;
        stopwatch.children[1].innerHTML = `0${secondsStopwatch}`;
        minutesStopwatch = 0;
        stopwatch.children[0].innerHTML = `0${minutesStopwatch}:`;
    }
}

function setPauseStopwatch(event) {
    if (event.target) {
        clearTimeout(timerId);
    }
}

function setStartStopwatch(event) {
    if (event.target) {
        timerId = setInterval(makeStopwatch, 1000);
        makeStopwatch();
    }
}

stopwatch.addEventListener('mouseover', setPauseStopwatch);
stopwatch.addEventListener('mouseout', setStartStopwatch);
