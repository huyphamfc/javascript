'use strict'


const rest_1 = {
    name: 'Capri',
    numGuests: 20
}

const rest_2 = {
    name: 'La Piazza',
    owner: 'Huy Pham'
}

// OR ASSIGNMENT OPERATOR
rest_1.numGuests ||= 10; // rest_1.numGuests = rest_1.numGuests || 10;
rest_2.numGuests ||= 10; // rest_2.numGuests = rest_2.numGuests || 10;
console.log(rest_1, rest_2);

// AND ASSIGNMENT OPERATOR
rest_1.owner &&= 'Anonymous';
rest_2.owner &&= 'Anonymous';
console.log(rest_1, rest_2);
// { name: 'Capri', numGuests: 20 } { name: 'La Piazza', owner: 'Anonymous', numGuests: 10 }

// NULLISH ASSIGNMENT OPERATOR
rest_1.numGuests ??= 10;
rest_2.numGuests ??= 10;
console.log(rest_1, rest_2);