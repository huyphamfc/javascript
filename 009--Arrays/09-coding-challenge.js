/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is less than or equal to 2 years old, humanAge is equal to dogAge time 2; if the dog is greater than 2 years old, humanAge is equal to dogAge time 4 and plus 16.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old).
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages).
4. Test Cases:
    Case 1: [5, 2, 4, 1, 15, 8, 3]
    Case 2: [16, 6, 10, 5, 6, 1, 4]
*/

'use strict'


// const dogAge = [5, 2, 4, 1, 15, 8, 3];
const dogAge = [16, 6, 10, 5, 6, 1, 4];

const calAverageHumanAge = function (dogAge) {
    const humanAge = dogAge.map(value => value <= 2 ? value * 2 : value * 4 + 16);
    console.log(humanAge);

    const adultAge = humanAge.filter(value => value >= 18);
    console.log(adultAge);

    const averageAge = Math.round(adultAge.reduce((sum, value, i, arr) => sum + value / arr.length, 0));
    console.log(averageAge);
};

calAverageHumanAge(dogAge);