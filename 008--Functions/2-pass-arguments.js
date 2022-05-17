'use strict'

const flight = 'LH234';
const huy = {
    name: 'Huy',
    passport: 12345678,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'CCCCC';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 12345678) {
        console.log('Check In!');
    } else {
        console.log('Wrong passport!!!');
    }
}

checkIn(flight, huy); // Check In!
console.log(flight, huy); // LH234 { name: 'Mr. Huy', passport: 12345678 }