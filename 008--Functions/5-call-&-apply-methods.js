'use strict'

const huyAirline = {
  airline: 'HuyAirline',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
  }
}

const vnAirline = {
  airline: 'VN-Airline',
  iataCode: 'EW',
  bookings: []
}

huyAirline.book(123, 'Huy'); // Huy booked a seat on huyAirline flight LH123
huyAirline.book(456, 'JavaScript'); // JavaScript booked a seat on HuyAirline flight LH456
console.log(huyAirline);
/*
{
  airline: 'HuyAirline',
  iataCode: 'LH',
  bookings: [
    { flight: 'LH123', name: 'Huy' },
    { flight: 'LH456', name: 'JavaScript' }
  ],
  book: [Function: book]
}
*/


// CALL METHOD
const book = huyAirline.book;
book.call(huyAirline, 100, 'FrontEnd')
book.call(vnAirline, 999, 'BackEnd');
console.log(huyAirline);
console.log(vnAirline);
/*
{
  airline: 'HuyAirline',
  iataCode: 'LH',
  bookings: [
    { flight: 'LH123', name: 'Huy' },
    { flight: 'LH456', name: 'JavaScript' },
    { flight: 'LH100', name: 'FrontEnd' }
  ],
  book: [Function: book]
}
{
  airline: 'VN-Airline',
  iataCode: 'EW',
  bookings: [ { flight: 'EW999', name: 'BackEnd' } ]
}
*/


// APPLY METHOD
const flightData = [111, 'Jack'];
book.apply(huyAirline, flightData);
book.call(huyAirline, ...flightData);
console.log(huyAirline);