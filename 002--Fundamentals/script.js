'use strict';

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

//functions
function logger() {
    console.log('My name is Huy');
}

//calling, running, invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

console.log(fruitProcessor(1, 3));


//function declaration
function calculateAge_1(birthYear) {
    return 2022 - birthYear;
}
const age_1 = calculateAge_1(1991);
//function expression
const calculateAge_2 = function (birthYear) {
    return 2022 - birthYear;
}
const age_2 = calculateAge_2(2002);
console.log(age_1, age_2);

//arrow functions
const calculateAge_3 = birthYear => 2022 - birthYear;
const age_3 = calculateAge_3(1001);
console.log(age_3);

const yearsUntilRetirement = birthYear => 60 - (2022 - birthYear);
console.log(yearsUntilRetirement(1997));

const calculateAge = (firstName, birthYear) => `${firstName} is ${2022 - birthYear} years old`;
console.log(calculateAge('Huy', 1997));
console.log(calculateAge('JavaScript', 1995));

//functions calling other functions
const calAge = birthYear => 2022 - birthYear;
const personInfo = (firstName, birthYear) => `${firstName} is ${calAge(birthYear)} years old`;
console.log(personInfo('Baby', 2020));

//arrays
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(2022, 2023, 2024);

console.log(friends);
console.log(years);

console.log(friends[0]);
console.log(years[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'John';
console.log(friends);

const person = ['Huy', 'Pham', 2, friends];
console.log(person);

//add elements into an array - push & unshift
friends.push('Messi');
friends.unshift('Ronaldo');
console.log(friends);

//remove elements from an array
const popped = friends.pop();
const shifted = friends.shift();
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));// true or false