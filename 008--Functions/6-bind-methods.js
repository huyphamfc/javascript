'use strict'

const huyAirline = {
    airline: 'HuyAirline',
    iataCode: 'HUY',
    bookings: [],
    book(flightNum, name) {
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    }
}

const vnAirline = {
    airline: 'VN-Airline',
    iataCode: 'VN',
    bookings: []
}


// BIND METHOD
const book = huyAirline.book;

const bookHUY = book.bind(huyAirline);
bookHUY(888, 'FullStack'); // FullStack booked a seat on HuyAirline flight HUY888
const bookVN = book.bind(vnAirline);
bookVN(444, 'Dev'); // Dev booked a seat on VN-Airline flight VN444

const bookHUY11 = book.bind(huyAirline, 11);
bookHUY11('Machine Learning'); // Machine Learning booked a seat on HuyAirline flight HUY11
bookHUY11('Blockchain'); // Blockchain booked a seat on HuyAirline flight HUY11


// With Event Listeners
huyAirline.planes = 300;
huyAirline.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', huyAirline.buyPlane.bind(huyAirline));


// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 0.23); // addVAT = value => value + value * 0.23
console.log(addVAT(100)); // 123

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const taxRate = addTaxRate(0.23);
console.log(taxRate(100)); // 123