'use strict';

let studentsData = {
    1: {
        name: 'Иванов Иван Иванович',
        startDate: 1990,
        endDate: 1995
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
let students = '';
function showStudents(startDate, endDate) {
    startDate = +prompt('Введите год поступления:');
    endDate = +prompt('Введите год окончания (отчисления):');
    for(key in studentsData) {
        if (studentsData[key].startDate==startDate && studentsData[key].endDate==endDate) {
            students = students + studentsData[key].name + '\n';
        }
    }
    return students;
}

if (showStudents()== students) {
    if (students === '') {
        alert('Студентов по данному запросу не обнаружено!');
    } else {
        alert(`В выбранный период обучались:\n${students}`);
    }
}

