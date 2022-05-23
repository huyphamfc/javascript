/**
 * BUILDING A FOOTBALL BETTING
 * 
 * Suppose we get data from a web service abut a certain game. In this challenge we're gonna work with the data. So here are your tasks:
 * 
 * - Create one player array for each team (variables 'players_1' and 'players_2').
 * - The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable 'gk' with the goalkeeper's name, and one array 'fieldPlayers' with all the remaining 10 field players
 * - Create an array 'allPlayers' containing all players of both teams (22 players).
 * - During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 'playersFinal_1' containing all the original team 1 players plus 'Thiago', 'Coutinho', and 'Perisic'.
 * - Based on the game.odds object, create one variable for each odd (called 'team_1', 'draw' and 'team_2').
 * - Write a function 'printGoals' that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in).
 * - The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
 * 
 * Test Data: use players 'Davies', 'Muller', 'Lewandowski' and 'Kimich'. Then, call the function again with players from game.scored.
 */


'use strict';

const game = {
    team_1: 'Bayern Munich',
    team_2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'May 9th, 2022',
    odds: {
        team_1: 1.33,
        x: 3.25,
        team_2: 6.5
    }
};

const [players_1 = [], players_2 = []] = game.players;
const [gk_1, ...field_1] = players_1;
const [gk_2, ...field_2] = players_2;
const allPlayers = [...players_1, ...players_2];
const playersFinal_1 = [...players_1, 'Thiago', 'Coutinho', 'Perisic'];
const { odds: { team_1, x: draw, team_2 } } = game;
console.log(team_1, draw, team_2);

const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski');

team_1 < team_2 && console.log('Team 1 is more likely to win');
team_1 > team_2 && console.log('Team 2 is more likely to win');