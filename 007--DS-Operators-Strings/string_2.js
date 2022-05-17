'use strict'

const airline = 'TAP Air Vietnam';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization in name
const passenger = 'hUy';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


// Comparing emails
const email = 'info@huy.io';
const loginEmail = ' Info@Huy.io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // info@huy.io
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);


// Replacing
const priceVN = '24,000VND';
const priceUS = priceVN.replace('VND', 'USD').replace(',', '.');
console.log(priceUS); // 24,000USD

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// All passengers come to boarding gate 23. Boarding door 23! - ONLY replace the first character
console.log(announcement.replace(/door/g, 'gate'));
// All passengers come to boarding gate 23. Boarding gate 23!


// Boolean
const plane = 'HuyAir A320neo';
console.log(plane.includes('A32')); // true
console.log(plane.includes('AIR')); // false
if (plane.startsWith('Huy') && plane.endsWith('neo'))
    console.log('Part of the new HuyAir family');


// Practice
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun'))
        console.log('You are NOT allowed on board');
    else
        console.log('Welcome aboard!');
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');