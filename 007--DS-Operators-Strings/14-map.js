'use strict'

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct :))'],
    [false, 'Try again!']
]);

console.log(question);
/**
Map(7) {
  'question' => 'What is the best programming language in the world?',
  1 => 'C',
  2 => 'Java',
  3 => 'JavaScript',
  'correct' => 3,
  true => 'Correct :))',
  false => 'Try again!'
}
 */


// CONVERT OBJECT TO MAP
const openingHours = {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }
}
console.log(openingHours);
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


// CONVERT MAP TO ARRAY
console.log([...question]);
/**
[
  [ 'question', 'What is the best programming language in the world?' ],
  [ 1, 'C' ],
  [ 2, 'Java' ],
  [ 3, 'JavaScript' ],
  [ 'correct', 3 ],
  [ true, 'Correct :))' ],
  [ false, 'Try again!' ]
]
 */


// QUIZ APP
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
/**
What is the best programming language in the world?
Answer 1: C
Answer 2: Java
Answer 3: JavaScript
 */

const message = Number(prompt('Your answer:'));
alert(question.get(message === question.get('correct')));