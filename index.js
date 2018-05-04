'use strict';

let studentsData = {
    1: {
        name: 'Иванов Иван Иванович',
        startDate: 2000,
        endDate: 2005
    },
    2: {
        name: 'Римусов Римус Римусович',
        startDate: 2010,
        endDate: 2015
    },
    3: {
        name: 'Борисова Анастасия Николаевна',
        startDate: 1990,
        endDate: 1995
    },
    4: {
        name: 'Колесников Роман Викторович',
        startDate: 2005,
        endDate: 2010
    },
    5: {
        name: 'Абдулаева Эльвира Билаловна',
        startDate: 2005,
        endDate: 2010
    },
    6: {
        name: 'Ярошенко Дарья Денисова',
        startDate: 1995,
        endDate: 2000
    },
    7: {
        name: 'Петрухин Федор Богданович',
        startDate: 2010,
        endDate: 2015
    }
};

//first
let key;
let studentsString = '';
function showStudents(startDate, endDate) {
    startDate = +prompt('Введите год поступления:');
    endDate = +prompt('Введите год окончания (отчисления):');
    for(key in studentsData) {
        if (studentsData[key].startDate==startDate && studentsData[key].endDate==endDate) {
            studentsString = studentsString + studentsData[key].name + '\n';
        }
    }
    return studentsString;
}

if (showStudents()== studentsString) {
    if (studentsString === '') {
        alert('Студентов по данному запросу не обнаружено!');
    } else {
        alert(`В выбранный период обучались:\n${studentsString}`);
    }
}

//second
let studentsObject = {};
let sumOfStudents = 0;
let keyValue;
let maxValue = keyValue;
let yearValue;

function getPeriod(startDate, endDate) {
	alert('Посмотрим в каком году училось наибольшее количество студентов!');
    startDate = +prompt('Введите год начала периода:');
    endDate = +prompt('Введите год окончания периода');
    let key;
    while (startDate<=endDate) {
        for(key in studentsData) {
            if(startDate>=studentsData[key].startDate && startDate<=studentsData[key].endDate){
                sumOfStudents += 1;
            }
        }
        studentsObject[startDate] = sumOfStudents;
        startDate++;
        sumOfStudents = 0;
    }

    // get a value of first key in studentsObject for the next comparasion of values for finding the biggest one
    for(key in studentsObject) {
        keyValue = studentsObject[key];
        break;
    }
    // compare values of each key and find the biggest one
    for(key in studentsObject) {
        if (studentsObject[key] > keyValue && studentsObject[key] > studentsObject[key-1]) {
            maxValue = studentsObject[key];
            yearValue = key;
        }
    }
    return (yearValue, maxValue);
}

if (getPeriod(yearValue, maxValue)) {
    alert(`В ${yearValue} году училось наибольшее количество студентов - ${maxValue}.`);
} else {
    alert(`Вы ввели некорректное число! Повторите действия снова!`);
}
