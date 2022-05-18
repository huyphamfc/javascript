/*
BUILDING A SIMPLE POLL APP

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
Task:
    1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things
        - Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
            What is your favorite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++
        - Based on the input number, update the answers array. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense
    2. Call this method whenever the user clicks the "Answer Poll" button.
    3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like 'Poll result are 13, 2, 4, 1'.
    4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

Test Data: [5,2,3], [1,5,3,9,6,1]
*/


'use strict'

const poll = {
    question: 'What is your favorite programming language?',
    options: [
        '0: JavaScript',
        '1: Python',
        '2: Rust',
        '3: C++'
    ],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    },
    displayResults(type = 'array') {
        if (type === 'array') console.log(this.answers);
        if (type === 'string') console.log(`Poll results are ${this.answers.join(',')}`);
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');