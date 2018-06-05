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
                    <li class="header-element"><a class="header-link" href="#">Two</a></li></ul>
                    <span class="header-span">Enter the city:</span>
                    <form id="weatherForm" autocomplete="off" action="">
                    <div class="header-autocomplete">
                    <input id="city" class="header-input" type="text" name="myCity" placeholder=''>
                    </div>
                    <input id="submit" class="header-button" type="submit" value="Submit">
                    </form></div>`;
aside.innerHTML = `<div class="sidebar-links"><ul class="sidebar-list">
                    <li class="sidebar-element"><a class="sidebar-link" href="./index.html">Main</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="./table.html">Table</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="./slider.html">Slider</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="./progress1.html">Progress 1</a></li>
                    <li class="sidebar-element"><a class="sidebar-link" href="./progress2.html">Progress 2</a></li></ul></div>`;

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


// Autocomplete

let lat, lng;
function getAutocomplete() {
    let input = document.getElementById('city');
    let options = {
        types: ['(cities)'],
    };
    let autocomplete = new google.maps.places.Autocomplete(input, options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        let place = autocomplete.getPlace();
        lat = place.geometry.location.lat();
        lng = place.geometry.location.lng();
    });
}
google.maps.event.addDomListener(window, 'load', getAutocomplete);

// Weather API

function makeWeatherTable(baseObj) {
    let weatherObj = baseObj.data.current_condition["0"];
    let weatherIcon = weatherObj.weatherIconUrl["0"].value;
    let weatherDescription = weatherObj.weatherDesc["0"].value;
    let weatherTempC = weatherObj.temp_C;
    let weatherPressure = weatherObj.pressure;
    let weatherHumidity = weatherObj.humidity;
    let weatherWind = `${weatherObj.winddir16Point} ${weatherObj.winddirDegree}deg, ${weatherObj.windspeedKmph}km/h`;
    let cityName = document.getElementById('city').value;

    let weatherTable = document.createElement('table');
    weatherTable.className = 'weather-table';
    let header = document.querySelector('.header-menu');
    header.appendChild(weatherTable);
    if (header.children.length > 5) {
        header.replaceChild(header.children[5], header.children[4]);
    }

    weatherTable.innerHTML = `<table class="weather-table"> 
                                      <tr><td class="weather-main" colspan="2">${cityName}</td><td class="weather-secondary">Humidity: ${weatherHumidity}%</td></tr>
                                      <tr><td rowspan="2"><img class="weather-image" src="${weatherIcon}" alt="" /></td>
                                      <td class="weather-secondary">${weatherDescription}</td><td class="weather-secondary">Pressure: ${weatherPressure}mbar</td></tr>
                                      <tr><td class="weather-main">${weatherTempC}&deg;C</td><td class="weather-secondary">WInd: ${weatherWind}</td></tr>
                                      </table>`;
    return weatherTable;
}

function getWeather() {
    let city = document.getElementById('city');
    let cityName = city.value;
    let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e205fd206f60431a89c194450182305&q=${lat},${lng}&date=today&format=json`;

    function status(response) {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    function json(response) {
        return response.json();
    }

    let myInit = {
        method: 'GET',
        mode: 'cors'
    };

    fetch(url, myInit)
        .then(status)
        .then(json)
        .then(function(data) {
            if (data.data.error) {
                let errorText = `${data.data.error["0"].msg}`;
                alert(errorText);
                return;
            }

            let newData = JSON.stringify(data);
            localStorage.setItem(`${cityName}`, newData);
            let newObj = JSON.parse(localStorage.getItem(`${cityName}`));
            return newObj;
        })
        .then(function(data) {
            if (data === undefined) {
                return;
            }
            makeWeatherTable(data);
        }).catch(function(error) {
        alert(`Request failed with ${error}`);
    });
}

let weatherForm = document.getElementById('weatherForm');
weatherForm.addEventListener('submit', function(event) {
    event.preventDefault();
    getWeather();
});

weatherForm.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
});

function checkLocalStorage() {
    let storageLength = localStorage.length;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let storageObject = localStorage;
    if (storageLength > 0) {
        let storageRandomKey = ((Object.keys(storageObject))[getRandomInt(0, storageLength)]);
        let storageValue = JSON.parse(storageObject[storageRandomKey]);
        document.getElementById('city').setAttribute('value', storageRandomKey);
        makeWeatherTable(storageValue);
    }
}
document.addEventListener('DOMContentLoaded', checkLocalStorage);