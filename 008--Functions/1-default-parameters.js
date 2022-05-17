'use strict'

const createBooking = function (flightNum, numPassengers = 2, price = 69) {
    // ES5
    // numPassengers ||= 1;
    // price ||= 99;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    bookings.push(booking);
}

const bookings = [];
createBooking('LH123');
createBooking('LH789', 4, 101);
createBooking('LH234', 10, 10);
createBooking('LL678', undefined, 777);
console.log(bookings);