'use strict'


// OR SHORT CIRCUITING
console.log(3 || 'Huy'); // 3
console.log('' || 'Baby'); // Baby
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// application
const value = 0;

const result = value > 0 ? value : -1;
console.log(result); // -1

const result_2 = value || -1;
console.log(result_2); // -1



// AND SHORT CIRCUITING
console.log(0 && 'Huy'); // 0
console.log(7 && 'Baby'); // Baby
console.log('Hello' && 23 && null && 'Huy'); // null

// application
const mathScore = 'PASSED';
const literatureScore = 'PASSED';

const target = mathScore === 'PASSED' && literatureScore === 'PASSED' ? 'PASSED' : 'FAILED';
console.log(target); // PASSED

const target_2 = mathScore && literatureScore;
console.log(target_2); // PASSED