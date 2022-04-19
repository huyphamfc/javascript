/*
CODING CHALLENGE 2
*/
'use strict';

const scores = [10, 5, 7, 8, 2];
const rank = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 8) {
        rank[i] = 'Excellent';
    }
    else if (scores[i] >= 6.5) {
        rank[i] = 'Good';
    }
    else if (scores[i] >= 5) {
        rank[i] = 'Meet';
    } else {
        rank[i] = 'Poor';
    }
}

console.log(scores);
console.log(rank);