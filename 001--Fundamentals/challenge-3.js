/*
CODING CHALLENGE 3:
There are 2 gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy

Tasks:
    - Calculate the average score for each team, using the test cases below
    - Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
    - Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: use a logical operator to test for minimum score, as well as multiple else-if blocks.
    - Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
Test Cases:
    - Case 1 (Nobody wins):     Dolphins score 96, 108, 89
                                Koalas   score 88, 100, 91
    - Case 2 (Koalas wins):     Dolphins score 97, 101, 112
                                Koalas   score 95, 109, 123
    - Case 3 (Draw):            Dolphins score 97, 101, 112
                                Koalas   score 95, 106, 109
*/

// const dolphinsFistScore = 96;
// const dolphinsSecondScore = 108;
// const dolphinsThirdScore = 89;

// const koalasFirstScore = 88;
// const koalasSecondScore = 100;
// const koalasThirdScore = 91;

// const dolphinsFistScore = 97;
// const dolphinsSecondScore = 101;
// const dolphinsThirdScore = 112;

// const koalasFirstScore = 95;
// const koalasSecondScore = 109;
// const koalasThirdScore = 123;

const dolphinsFistScore = 97;
const dolphinsSecondScore = 101;
const dolphinsThirdScore = 112;

const koalasFirstScore = 95;
const koalasSecondScore = 109;
const koalasThirdScore = 106;

const dolphinsAverageScore = (dolphinsFistScore + dolphinsSecondScore + dolphinsThirdScore) / 3;
const koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

const MIN_SCORE = 100;

console.log('Dolphins: ' + dolphinsAverageScore);
console.log('Koalas: ' + koalasAverageScore);

if (dolphinsAverageScore > MIN_SCORE && koalasAverageScore > MIN_SCORE) {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log('Dolphins wins');
    } else if (dolphinsAverageScore === koalasAverageScore) {
        console.log('Draw');
    } else {
        console.log('Koalas wins');
    }
} else if (dolphinsAverageScore > MIN_SCORE || koalasAverageScore > MIN_SCORE) {
    if (dolphinsAverageScore > koalasAverageScore) {
        console.log('Dolphins wins');
    } else {
        console.log('Koalas wins');
    }
} else {
    console.log('Nobody wins');
}