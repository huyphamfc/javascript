'use strict'

const calAvgScore = (math, physics, chemistry) => Math.round(((math + physics + chemistry) / 3) * 10) / 10;

const sortRank = (avgScore) => {
    if (avgScore >= 9) return 'Excellent';
    if (avgScore >= 8) return 'Very Good';
    if (avgScore >= 7) return 'Good';
    if (avgScore >= 6) return 'Fair';
    if (avgScore >= 5) return 'Poor';
    return 'Very Poor';
}

const process = (math, physics, chemistry) => {
    const avgScore = calAvgScore(math, physics, chemistry);
    const rank = sortRank(avgScore);
    console.log(`The average score is ${avgScore}, rank: ${rank}`);
}

process(10, 9, 8);
process(10, 8, 8);
process(8, 6.5, 7);
process(5, 6.75, 7.25)
process(6.75, 5, 6);
process(5, 3, 4.75);