/*
CODING CHALLENGE 3
*/

'use strict';

const boy = {
    firstName: 'Huy',
    lastName: 'Pham',
    mathScore: 10,
    physicsScore: 10,
    chemistryScore: 10,
    calculateAvgScore: function () {
        boy.avgScore = (this.mathScore + this.physicsScore + this.chemistryScore) / 3;
        return this.avgScore;
    }
};

const girl = {
    firstName: 'JavaScript',
    lastName: 'Programming Language',
    mathScore: 10,
    physicsScore: 10,
    chemistryScore: 7,
    calculateAvgScore: function () {
        girl.avgScore = (this.mathScore + this.physicsScore + this.chemistryScore) / 3;
        return this.avgScore;
    }
};

const whoIsBetter = function (student_1, student_2) {
    if (student_1.calculateAvgScore() > student_2.calculateAvgScore()) return student_1.firstName;
    if (student_1.calculateAvgScore() < student_2.calculateAvgScore()) return student_2.firstName;
    return `Nobody`;
}

console.log(`${whoIsBetter(boy, girl)} is better`);