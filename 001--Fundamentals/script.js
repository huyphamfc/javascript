let js = 'amazing';
if (js === 'amazing') alert('JavaScript is fun!');

let firstName = 'Huy';
console.log(firstName);

console.log(typeof 99);
console.log(typeof firstName);
console.log(typeof true);

const year = 2022;
const age = 2222 - year;
console.log(year, age);
console.log(age - 1, 2 ** 3); // 2**3 = 2*2*2

//concatenate strings
const huyFirstName = 'Huy';
const huyLastName = 'Pham';
console.log(huyFirstName + ' ' + huyLastName);

//assignment
let x = 10 + 5;
x += 10; // x = x + 10
x *= 5; // x = x * 5
x++; // x = x + 1
console.log(x);

//comparison
console.log(age > x);
const isFullAge = age >= 18;

//operator precedence
console.log(year - 1991 > year - 2002); //31 > 18 => true

//template literals
const huyName = `I'm ${huyFirstName}`;
console.log(huyName);
console.log(`String with
multiple
lines`);

//if else statements
const birthYear = 1997;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//type conversion
const inputYear = '2022';
console.log(Number(inputYear) + 8);
console.log(inputYear + 8);
console.log(Number('Huy'));

console.log(String(69));
console.log(typeof '69');

//type coercion
console.log('I am ' + 25 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

// truthy & falsy values
console.log(Boolean(0));
console.log(Boolean('Huy'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

//equality operators
const ageValue = '18';
//strict
if (ageValue === 18) {
    console.log('true');
} else {
    console.log('false');
}
//loose
if (ageValue == 18) {
    console.log('true');
} else {
    console.log('false');
}

//prompt function
const favoriteNumber = prompt('What is your favorite number?');
console.log(favoriteNumber);

//logical operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('JavaScript is able to drive!');
} else {
    console.log('Someone else should drive ...');
}