'use strict'


// SPLIT AND JOIN
console.log('a+very+nice+string'.split('+'));
// [ 'a', 'very', 'nice', 'string' ]

console.log('Huy Pham'.split(' '));
// [ 'Huy', 'Pham' ]

const [firstName, lastName] = 'Huy Pham'.split(' ');
console.log(firstName, lastName); // Huy Pham

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Huy PHAM

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('huy money car'); // Huy Money Car


// PADDING
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log(message.padEnd(25, '+')); // Go to gate 23!+++++++++++
console.log(message.padStart(20, '+').padEnd(25, '+')); // ++++++Go to gate 23!+++++

const maskCreditCard = function (number) {
    // const str = String(number);
    const str = number + '';
    const newStr = str.slice(-4);
    return newStr.padStart(str.length, '*');
}

console.log(maskCreditCard(87654321)); // ****4321


// REPEAT
const message_2 = 'Bad weather ... All departures delayed...';
console.log(message_2.repeat(3));