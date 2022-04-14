/*
CODING CHALLENGE 1:

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
    BMI = mass / height ** 2 
        = mass / (height * height)
    (mass in kg and height in meter)
Tasks:
    - Store Mark's and John's mass and height in variables
    - Calculate both their BMIs using the formula (you can even implement both versions)
    - Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
Test Data:
    - Case 1: Marks weights 78kg and is 1.69m tall. John weights 92 kg and is 1.95m tall
    - Case 2: Marks weights 95kg and is 1.88m tall. John weights 85 kg and is 1.76m tall
*/

// Case 1
const marksMass = 78;
const marksHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Case 2
// const marksMass = 95;
// const marksHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = marksBMI > johnBMI;

console.log(marksBMI, johnBMI, markHigherBMI);