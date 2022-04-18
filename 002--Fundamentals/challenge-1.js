const boyMathScore = 10;
const boyPhysicsScore = 10;
const boyChemistryScore = 10;

const girlMathScore = 10;
const girlPhysicsScore = 10;
const girlChemistryScore = 10;

const calculateAverageScore = (math, physics, chemistry) => (math + physics + chemistry) / 3;

const whoBetter = (boyAverageScore, girAverageScore) => {
    if (boyAverageScore > girAverageScore) return `Boy is better than Girl`;
    if (boyAverageScore < girAverageScore) return `Girl is better than Boy`;
    return `Nobody`;
}

const boyAverageScore = calculateAverageScore(boyMathScore, boyPhysicsScore, boyChemistryScore);
const girAverageScore = calculateAverageScore(girlMathScore, girlPhysicsScore, girlChemistryScore);

console.log(whoBetter(boyAverageScore, girAverageScore));
console.log(whoBetter(calculateAverageScore(boyMathScore, boyPhysicsScore, boyChemistryScore), calculateAverageScore(girlMathScore, girlPhysicsScore, girlChemistryScore)));