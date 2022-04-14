/*
CODING CHALLENGE 2:

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Tasks:
    - Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    - Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!
*/

const marksMass = 78;
const marksHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const marksBMI = marksMass / marksHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (marksBMI > johnBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}