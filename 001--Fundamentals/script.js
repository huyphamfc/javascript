// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is fun!');

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
console.log('Concatenate Strings');
const huyFirstName = 'Huy';
const huyLastName = 'Pham';
console.log(huyFirstName + ' ' + huyLastName);

//assignment
console.log('Assignment');
let x = 10 + 5;
x += 10; // x = x + 10
x *= 5; // x = x * 5
x++; // x = x + 1
console.log(x);

//comparison
console.log('Comparison');
console.log(age > x);
const isFullAge = age >= 18;

//operator precedence
console.log('Precedence');
console.log(year - 1991 > year - 2002); //31 > 18 => true

//template literals
console.log('Template Literals');
const huyName = `I'm ${huyFirstName}`;
console.log(huyName);
console.log(`String with
multiple
lines`);

//if else statements
console.log('if else statements');
const birthYear = 1997;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);