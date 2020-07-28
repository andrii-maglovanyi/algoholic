# Sort array of scores with limited maximum value

Each round, players receive a score between 0 and 100, which you use to rank them from highest to lowest.

Write a function that takes:

- an array of `unsortedScores`
- the `highestPossibleScore` in the game

and returns a sorted array of scores in less than `O(n*log(n))` time.

```javascript
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE); // [91, 89, 65, 53, 41, 37]
```

**Multiple players can have the same score!** If 10 people got a score of 90, the number 90 should appear 10 times in our output array.

We can do this in O(n)O(n) time and space.
