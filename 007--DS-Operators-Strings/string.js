'use strict'

const airline = 'TAP Air Vietnam';
const plane = 'A320';

console.log(plane[0]); // A
console.log('Huy'[0]); // H
console.log('Pham'.length); // 4

console.log(airline.indexOf('A')); // 1
console.log(airline.indexOf('Vietnam')); // 8
console.log(airline.lastIndexOf('P')); // 2

console.log(airline.slice(4)); // Air Vietnam - the extraction will start at 4
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Vietnam

console.log(airline.slice(-3)); // nam
console.log(airline.slice(1, -1)); // AP Air Vietna

const checkMiddleSeat = function (seat) {
    if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') console.log('You got the middle seat');
    else console.log('You got lucky');
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');