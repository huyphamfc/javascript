/**
CODING CHALLENGE

- Create an array 'event' of the different game events that happened (no duplicates)
- After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
- Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
- Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: ⚽️ GOAL
 */


'use strict'

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()];
console.log(time);
console.log(`An event happened, on average, every ${time.pop() / gameEvents.size} minutes`);

for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}